/*Archivo para el envio de información de la página contacto a la página resultado*/
const persona = {
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    comentarios: '',
    
    nombre_completo: function() {
        var completo = this.nombre + ' ' + this.apellidos;
        return completo;
    },

}
var url = new URL(window.location.href);
console.log(url);

/*Recibir información proveniente del formulario*/

persona.nombre = url.searchParams.get('Nombre');
persona.apellidos = url.searchParams.get('Apellidos');
persona.telefono = url.searchParams.get('Telefono');
persona.email = url.searchParams.get('Email');
persona.comentarios = url.searchParams.get('Comentarios');

/*Mandar información*/

var nomcompleto = document.getElementById('nombre');
nomcompleto.innerHTML = persona.nombre_completo();

var telefono = document.getElementById('telefono');
telefono.innerHTML = persona.telefono;

var email = document.getElementById('email');
email.innerHTML = persona.email;

var comentarios = document.getElementById('comentarios');
comentarios.innerHTML = persona.comentarios;
