const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs",
            globals: {
                ...globals.browser,
                ...globals.node,
                cy: "readonly", // Add cy as a global variable
                Cypress: "readonly", // Add Cypress as a global variable
                require: "readonly", // Add require as a global variable
            },
        },
        rules: {
            eqeqeq: "off",
            "no-unused-vars": "error",
            "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
        }
    },
    pluginJs.configs.recommended,
]
