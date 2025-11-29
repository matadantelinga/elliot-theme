/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
  ],
};
