module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        '@vue/airbnb',
        'prettier',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
        'no-debugger': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'never' }],
        'import/extensions': [
            2,
            {
                js: 'always',
                vue: 'always',
                ts: 'never',
            },
        ],
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
};
