module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ["react"], //changed from react-hook to react
  rules: {
    //made changes to the rules buy adding these 2 lines of code
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  },
}
