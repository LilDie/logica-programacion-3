function calcularFactorial() {
    const inputNumero = document.getElementById('numeroInput').value;
    const resultadoElemento = document.getElementById('resultado');
  
    // Verificar si el input es un número
    if (!isNaN(inputNumero) && inputNumero !== '') {
      const numero = parseInt(inputNumero);
  
      // Calcular el factorial
      let factorial = 1;
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
  
      // Mostrar el resultado en el DOM
      resultadoElemento.textContent = `El factorial de ${numero} es: ${factorial}`;
    } else {
      // Mostrar mensaje de error si el input no es un número
      resultadoElemento.textContent = 'Por favor, ingrese un número válido.';
    }
  }
  const numeroInput = document.getElementById('numeroInput');
numeroInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calcularFactorial();
  }
});