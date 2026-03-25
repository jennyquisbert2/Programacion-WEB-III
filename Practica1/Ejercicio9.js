const miPromesa = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve("¡Éxito! Operación completada tras 3 segundos.");
  }, 3000);
});

miPromesa.then((mensaje) => {
  console.log(mensaje);
});

