function miFuncion(texto) {
  const conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  
  const textoMinuscula = texto.toLowerCase();

  for (let caracter of textoMinuscula) {
    if (conteo.hasOwnProperty(caracter)) {
      conteo[caracter]++;
    }
  }

  return conteo;
}
let obj = miFuncion("euforia");
console.log(obj); // { a: 1, e: 1, i: 1, o: 1, u: 1 }
