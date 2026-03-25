async function obtenerDatosMigrado() {
  try {
    console.log(" Consultando datos...");
    
    const respuesta = await fetch("https://jsonplaceholder.typicode.com");
    
    if (!respuesta.ok) {
      throw new Error(`Error en la red: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    
    console.log(" Datos recibidos con éxito:");
    console.log(datos);
    
    return datos;
  } catch (error) {
    console.error(" Fallo el ejercicio:", error.message);
  }
}
obtenerDatosMigrado();
