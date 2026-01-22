// eslint.config.js - Configuración de ESLint
// Autor: Estudiante - Lab 6 CI/CD
// Fecha: 22/01/2026

module.exports = [
    {
        files: ['**/*.js'],
        ignores: ['node_modules/**'],
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single']
        }
    }
];
