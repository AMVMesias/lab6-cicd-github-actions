// math.js - Funciones matemáticas adicionales
// Autor: Estudiante - Lab 6 CI/CD
// Fecha: 22/01/2026

/**
 * Calcula el factorial de un número
 * @param {number} n - Número entero no negativo
 * @returns {number} Factorial de n
 * @throws {Error} Si n es negativo
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('No se puede calcular factorial de números negativos');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Calcula el n-ésimo número de Fibonacci
 * @param {number} n - Posición en la secuencia (0-indexed)
 * @returns {number} Número de Fibonacci en posición n
 * @throws {Error} Si n es negativo
 */
function fibonacci(n) {
    if (n < 0) {
        throw new Error('No se puede calcular Fibonacci de números negativos');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = { factorial, fibonacci };
