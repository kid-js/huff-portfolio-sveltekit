import globals from "globals";
import parser from "svelte-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/*.html", "**/*.md"],
}, ...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
            ...globals.node,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "no-inner-declarations": 0,
        "no-constant-condition": 0,
        "no-unused-vars": 1,
        "no-console": 1,
        "no-empty": 1,
        semi: 1,

        "max-len": ["warn", {
            code: 80,
        }],
    },
}, {
    files: ["**/*.svelte"],

    languageOptions: {
        parser: parser,
    },
}];