module.exports = {  root: true,  env: {    node: true,  },  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended", "plugin:prettier/recommended"],  parserOptions: {    ecmaVersion: 2020,  },  rules: {    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",    "no-var": 2, // 禁用var，用let和const代替    "no-sequences": 1, // 使用逗号运算符    "no-extra-bind": 2, // 禁止不必要的函数绑定    "no-extra-boolean-cast": 2, // 禁止不必要的bool转换    "no-extra-parens": 1, // 禁止非必要的括号    "no-extra-semi": 2, // 禁止多余的冒号    "no-trailing-spaces": 2, // 一行结束后面不要有空格    "@typescript-eslint/no-empty-function": 0, // 函数可以为空    "@typescript-eslint/no-explicit-any": 0, // 可以使用any    eqeqeq: 2, // 必须使用全等    "prettier/prettier": [      "error",      {        printWidth: 200,        endOfLine: "auto",        jsxBracketSameLine: true,      },    ],  },};