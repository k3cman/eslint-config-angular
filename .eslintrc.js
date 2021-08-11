module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        "@angular-eslint/component-selector": [
          "error",
          {
            prefix: "app",
            style: "kebab-case",
            type: "element",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            prefix: "app",
            style: "camelCase",
            type: "attribute",
          },
        ],
      },
    },
    {
        files: ["*.html"],
        extends: ["plugin:@angular-eslint/template/recommended"]
    }
  ],
};
