function clasificarNumeros(arreglo) {
  
  let resultado = {
    pares: [],
    impares: []
  };

  for (let num of arreglo) {
    if (num % 2 === 0) {
     resultado.pares.push(num);
    } else {
      resultado.impares.push(num);
    }
  }

  return resultado;
}
let obj = clasificarNumeros([1, 2, 3, 4, 5]);
console.log(obj); // Resultado: { pares: [2, 4], impares: [1, 3, 5] }

