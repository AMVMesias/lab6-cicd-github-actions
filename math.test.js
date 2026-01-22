// math.test.js - Pruebas unitarias para math.js
// Autor: Estudiante - Lab 6 CI/CD
// Fecha: 22/01/2026

const { factorial, fibonacci } = require('./math');

describe('Función factorial', () => {
    test('factorial de 0 es 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('factorial de 1 es 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('factorial de 5 es 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('factorial de 10 es 3628800', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('factorial de número negativo lanza error', () => {
        expect(() => factorial(-1)).toThrow('No se puede calcular factorial de números negativos');
    });
});

describe('Función fibonacci', () => {
    test('fibonacci de 0 es 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci de 1 es 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci de 5 es 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('fibonacci de 10 es 55', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('fibonacci de número negativo lanza error', () => {
        expect(() => fibonacci(-1)).toThrow('No se puede calcular Fibonacci de números negativos');
    });
});
