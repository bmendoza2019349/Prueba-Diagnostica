let  valorPantalla='';

function limpiarPantalla(){
    valorPantalla = '';
    actualizarPantalla();
}

function agregarCaracter(char){
    valorPantalla += char;
    actualizarPantalla();
}

function calcular(){
    try {
        valorPantalla = eval(valorPantalla).toString();
        actualizarPantalla();
        /*eval sirve para capturar si es funcion matematica y operar */
    } catch (error) {
        valorPantalla='no se puede calcular';
        actualizarPantalla();
    }
}

function actualizarPantalla(){
    document.getElementById('pantalla').value = valorPantalla;
}
