// nullを全てundefinedに変換
const nullToUndefined = (object) => {
    for (const value in object) {
        // nullの場合はundefinedにする
        if (object[value] === null) {
            object[value] = undefined;
            continue;
        }
        // 配列の場合はfor文で再起的に回す
        if (Array.isArray(object[value])) {
            const array = object[value];
            for (let i = 0; i < array.length; i++) {
                array[i] = nullToUndefined(array[i]);
            }
            continue;
        }
        // オブジェクトの場合も再起的に実行
        if (typeof object[value] === "object") {
            object[value] = nullToUndefined(object[value]);
            continue;
        }
    }
    return object;
};
export default nullToUndefined;
