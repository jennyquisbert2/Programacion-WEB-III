// Función antigua basada en callbacks
function funcionConCallback(id, callback) {
  setTimeout(() => {
    if (id === 1) callback(null, "Usuario encontrado");
    else callback("Error: Usuario no existe");
  }, 1000);
}

// Convertimos a Promesa
function promisificada(id) {
  return new Promise((resolve, reject) => {
    funcionConCallback(id, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

promisificada(1)
  .then(res => console.log(res))
  .catch(err => console.error(err));
