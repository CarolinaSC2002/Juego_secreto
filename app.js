let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos= 1;
let numeroMaximo=10;
console.log(numeroSecreto)



//funcion generica
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número  en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p','El número secreto es mayor');
        }else{
            asignarTextoElemento('p','El número secreto en menor')
        }
        intentos++
        limpiarCaja(); 
    }
    return;
} 

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sortemamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //recursividad
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
     //Generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disable','true');

}

condicionesIniciales();

//opción
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

/*
let numerosSorteados =[];// crear el arreglo
console.log(numerosSorteados);
numerosSorteados.push(8);//agregar elementos
numerosSorteados.length;//tamaño del arreglo
//los elementos arrancan en la posición 0
numerosSorteados[0];// el primer elemento del arreglo
numerosSorteados[(numerosSorteados.length-1)];// el último elemento del arreglo
*/

