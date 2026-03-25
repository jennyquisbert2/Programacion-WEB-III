function obtenerExtremos(numeros) {
  
  return {
    mayor: Math.max(...numeros),
    menor: Math.min(...numeros)
  };
}

let obj = obtenerExtremos([3, 1, 5, 4, 2]);
console.log(obj); // Resultado: { mayor: 5, menor: 1 }






