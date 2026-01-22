// sum.test.js - Pruebas unitarias para sum.js
// Autor: Estudiante - Lab 6 CI/CD
// Fecha: 22/01/2026

const sum = require('./sum');

describe('Función sum', () => {
    test('suma 1 + 2 debe ser igual a 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('suma -1 + 1 debe ser igual a 0', () => {
        expect(sum(-1, 1)).toBe(0);
    });

    test('suma 0 + 0 debe ser igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    test('suma números decimales 1.5 + 2.5 debe ser 4', () => {
        expect(sum(1.5, 2.5)).toBe(4);
    });
});
