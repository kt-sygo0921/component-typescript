module.exports = {
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    plugins: [
        "@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json"
    },
    rules: {
        "@typescript-eslint/indent": "off",
        // 空インターフェースを許可する
        "@typescript-eslint/no-empty-interface": "off",
        // インターフェース名をIから始めない
        "@typescript-eslint/interface-name-prefix": "off",
        // camelcaseを強制する
        "@typescript-eslint/camelcase":"off",
        // お好みのルール設定を
        "prettier/prettier": [
            2,
            {
                arrowParens: "avoid",
                bracketSpacing: false,
                jsxBracketSameLine: true,
                printWidth: 120,
                singleQuote: true,
                trailingComma: "es5",
                tabWidth: 4,
            },
        ],
        // .ts/.tsxファイル内のReact jsx表記を許可する
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".ts", ".tsx"],
            },
        ],
        // インデントは4スペース
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-closing-bracket-location": 0,
        "@typescript-eslint/adjacent-overload-signatures": "error",
        // if制御で最終的に何も返さなくてもOK
        "consistent-return": 0,
        // .jsファイル内でDependenciesのパッケージをimportしてもOK
        "import/no-extraneous-dependencies": 0,
        "no-unused-expressions": 0,
        // 変数に _ 使ってもOK
        "no-underscore-dangle": 0,
        // dynamic-requireを許可 静的ページ 言語判定後にrequireパスを分岐しているため
        "global-require": 0,
        // ver6.1.0以降非推奨になっているため対象から削除
        "jsx-a11y/label-has-for": 0,
        // クラスメソッドがthisを使わなくてもよい
        "class-methods-use-this": 0,

        // ...
    },
    globals: {
        document: true,
        window: true,
        CustomEvent: true,
    },
}