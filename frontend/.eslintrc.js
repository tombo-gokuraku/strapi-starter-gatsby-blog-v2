module.exports = {
  parser: "babel-eslint",
  rules: {
    strict: 0,
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["jsx-a11y"],
}
