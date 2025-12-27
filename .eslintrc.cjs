module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {

        semi: ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],

        quotes: ['error', 'single'],
        '@typescript-eslint/quotes': ['error', 'single'],

        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],

        'vue/html-indent': ['error', 4],
        'vue/html-quotes': ['error', 'double'],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
            },
        ],

        /* Key rule for your request */
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 4,
                },
                multiline: {
                    max: 1,
                },
            },
        ],

        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'ignore',
                multiline: 'below',
            },
        ],
        'vue/require-default-prop': 'off',

        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],

        '@typescript-eslint/explicit-function-return-type': 'off',
    },
};
