# About

このパッケージは、`null` を `undefined` に変換するためのユーティリティです。
作者が個人的に使っている処理を切り出したものです。
好みベースの設計なので、必要に応じて自由に調整してください。

This package is a utility for converting `null` values to `undefined`.
It is extracted from logic the author uses for personal projects.
Since it is preference-based, feel free to adjust or customize it as needed.


# インストール

```
npm install @akimeaki/null-to-undefined
```

# 使い方

nullToUndefined関数に渡した値にあるnullをundefinedに変換します。

```js
import nullToUndefined from "@akimeaki/null-to-undefined";


const data = {
	aaa: null,
	bbb: "bbbb",
	ccc: [
		null,
		1234
	]
}

const result = nullToUndefined(data);
```

resultの中身
```json
{
	aaa: undefined,
	bbb: "bbbb",
	ccc: [
		undefined,
		1234
	]
}
```

# License

Released under the [MIT license](https://opensource.org/license/mit)
