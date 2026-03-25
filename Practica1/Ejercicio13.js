const login = (credenciales) => {
  console.log(" Validando credenciales...");
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, usuario: "EstudianteUMSA" }), 1000);
  });
};

const obtenerPerfil = (user) => {
  console.log(` Obteniendo perfil de: ${user.usuario}...`);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, nombre: "Juan Perez", rol: "Admin" }), 1000);
  });
};

const obtenerPreferencias = (perfil) => {
  console.log(" Cargando preferencias del sistema...");
  return new Promise((resolve) => {
    setTimeout(() => resolve({ tema: "oscuro", idioma: "español", notificaciones: true }), 1000);
  });
};

// FUNCIÓN MIGRADA A ASYNC/AWAIT
async function cargarConfiguracion(credenciales) {
  try {
    const user = await login(credenciales);
    const perfil = await obtenerPerfil(user);
    const prefs = await obtenerPreferencias(perfil);

    console.log(" ¡Configuración cargada con éxito!");
    console.log("Datos finales:", prefs);
    
  } catch (error) {
    console.error(" Error en el proceso de carga:", error);
  }
}
cargarConfiguracion({ user: "admin", pass: "1234" });