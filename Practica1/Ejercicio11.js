function obtenerPedido(id) {
  return Promise.resolve({ id, producto: "Laptop" });
}

function procesarPago(pedido) {
  return Promise.resolve(`Pago procesado para la ${pedido.producto}`);
}

function enviarConfirmacion(mensaje) {
  return Promise.resolve(`${mensaje} - Correo enviado.`);
}

obtenerPedido(101)
  .then(pedido => procesarPago(pedido))
  .then(resultadoPago => enviarConfirmacion(resultadoPago))
  .then(final => console.log(final)) // "Pago procesado para la Laptop - Correo enviado."
  .catch(err => console.error(err));

