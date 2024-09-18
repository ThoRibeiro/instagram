module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 'warn',
        'no-debugger': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off'
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off'
            }
        }
    ]
};
