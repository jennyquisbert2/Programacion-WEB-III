function esPalindromo(cadena) {
  
  let textoLimpio = cadena.toLowerCase();
  
  let textoInvertido = textoLimpio.split("").reverse().join("");
  
  return textoLimpio === textoInvertido;
}

console.log(esPalindromo("oruro")); // Resultado: true
console.log(esPalindromo("hola"));  // Resultado: false

