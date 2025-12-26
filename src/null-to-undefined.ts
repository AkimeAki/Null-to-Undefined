type Builtin =
	| Function
	| Date
	| RegExp
	| Map<any, any>
	| Set<any>
	| WeakMap<any, any>
	| WeakSet<any>
	| Error
	| Promise<any>
	| ArrayBuffer
	| ArrayBufferView;

type NullToUndefined<T> = T extends null
	? undefined
	: T extends Builtin
		? T
		: T extends (infer U)[]
			? NullToUndefined<U>[]
			: T extends object
				? { [K in keyof T]: NullToUndefined<T[K]> }
				: T;

const transform = (value: any, seen: WeakMap<object, any>): any => {
	if (value === null) {
		return undefined;
	}

	if (value === undefined) {
		return value;
	}

	if (typeof value !== "object") {
		return value;
	}

	if (seen.has(value)) {
		return seen.get(value);
	}

	if (
		value instanceof Date ||
		value instanceof RegExp ||
		value instanceof Map ||
		value instanceof Set ||
		value instanceof WeakMap ||
		value instanceof WeakSet ||
		value instanceof Error ||
		value instanceof Promise ||
		ArrayBuffer.isView(value) ||
		value instanceof ArrayBuffer
	) {
		return value;
	}

	if (Array.isArray(value)) {
		const result: any[] = [];
		seen.set(value, result);

		for (const item of value) {
			result.push(transform(item, seen));
		}
		return result;
	}

	const result: any = {};
	seen.set(value, result);

	for (const key of Object.keys(value)) {
		result[key] = transform(value[key], seen);
	}

	return result;
};

const nullToUndefined = <T>(value: T): NullToUndefined<T> => {
	return transform(value, new WeakMap()) as NullToUndefined<T>;
};

export default nullToUndefined;
