function calcularFactorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }//for

    return factorial;
}//calcularFactorial

function procesar() {
    const input = document.getElementById("numeroInput").value;
    const numero = Number(input);

    const resultadoDOM = document.getElementById("resultado");

    if (isNaN(numero) || numero < 0) {
        resultadoDOM.textContent = "❌ Error: Ingresa un número válido (0 o mayor).";
        return;
    }//if

    const resultado = calcularFactorial(numero);
    resultadoDOM.textContent = `El factorial de ${numero} es: ${resultado}`;
}//procesar
