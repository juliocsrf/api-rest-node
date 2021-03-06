module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        indent: ['error', 4],
        'class-methods-use-this': 'off',
        'import/first': 'off',
        'no-param-reassign': 'off',
    },
};
