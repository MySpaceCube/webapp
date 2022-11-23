module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['@nuxtjs', 'plugin:vue/recommended'],
    rules: {
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 3,
                multiline: {
                    allowFirstLine: false,
                },
            },
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        semi: [2, 'always'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
}
