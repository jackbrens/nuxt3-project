module.exports = {
  // 两个缩进
  tabWidth: 2,
  // jsx使用单引号
  jsxSingleQuote: true,
  // 在jsx中把'>' 是否单独放一行
  jsxBracketSameLine: true,
  // 行宽 120 个字符
  printWidth: 120,
  // js 使用单引号
  singleQuote: true,
  // 换行符统一
  endOfLine: 'auto',
  // 分号不要
  semi: false,
  // json文件 行宽 200 个字符
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  // 箭头函数 "always" （默认）在所有情况下都需要参数
  arrowParens: 'always',
}
