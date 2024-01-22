
async function enviarDatos() {
    const nombre = document.getElementById('nombre').value;

    try {
        const resultado = await enviarDatosAlServidor(nombre);
        mensajeAgradecimiento(resultado);
    } catch (error) {
        mensajeError(error)
    }
}

function enviarDatosAlServidor(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = (nombre.toLowerCase() !== 'error');
            
            const resultado = exito ? 'Binvenido al sistema' : 'Datos erroneos'
            exito ? resolve(resultado) : reject(resultado)
        }, 2000);
    });
}

function mensajeAgradecimiento(mensaje) {
    const mensajeElemnt = document.getElementById('mensaje');
    mensajeElemnt.textContent = mensaje;
    mensajeElemnt.classList.remove('oculto');
}

function mensajeError(error) {
    const mensajeElemnt = document.getElementById('mensaje');
    mensajeElemnt.textContent = error;
    mensajeElemnt.classList.remove('oculto');
}