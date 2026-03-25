const obtenerUsuario = (id) => 
  Promise.resolve({ id: id, nombre: "Estudiante UMSA" });

const obtenerPosts = (userId) => 
  Promise.resolve({ id: 101, titulo: "Mi primer post en Web 3" });

const obtenerComentarios = (postId) => 
  Promise.resolve(["¡Excelente código!", "Muy buena explicación"]);

async function mostrarComentarios(id) {
  try {
    console.log(" Buscando datos del usuario...");
    
    const user = await obtenerUsuario(id);
    console.log(` Usuario encontrado: ${user.nombre}`);

    const posts = await obtenerPosts(user.id);
    console.log(` Post encontrado: ${posts.titulo}`);

    const comentarios = await obtenerComentarios(posts.id);
    
    console.log(" Comentarios:");
    console.table(comentarios); 

  } catch (error) {
    console.error(" Ocurrió un error:", error);
  }
}
mostrarComentarios(1);


