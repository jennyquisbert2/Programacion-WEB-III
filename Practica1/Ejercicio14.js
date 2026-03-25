const miPromesa = () => Promise.resolve("Datos recibidos");

function convertirACallback(callback) {
  miPromesa()
    .then(resultado => {
      callback(null, resultado); 
    })
    .catch(error => {
      callback(error);
    });
}

convertirACallback((err, data) => {
  if (err) return console.error(err);
  console.log("Desde el callback:", data);
});
