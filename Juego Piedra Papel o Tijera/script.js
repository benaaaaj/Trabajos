"use strict"; 


let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

let manoUsuario = document.querySelector(".mano-usuario");
let manoComputador = document.querySelector(".mano-computador");

let puntajeUsuario = document.querySelector(".puntaje-usuario p");
let puntajeComputador = document.querySelector(".puntuaje-computador p");

let labelResultado = document.querySelector(".resultado");

let tablero = document.querySelector(".tablero");

let eleccionUsuario = ""
let eleccionComputador = ""

let contadorUsuario = 0;
let contadorComputador =0;

/*alerta*/

const swalInicio = () =>{
    Swal.fire (
     '¿Juguemos?',
     'Gana el primero que alcance 3 puntos!',
     'question'
    )
}

swalInicio();

const swalGanador = ()  =>{
    Swal.fire ({
     icon:'Success',
     title:'Ganaste!',
     text: 'Continuemos...',
     confirmButtonText: 'Cool',
     allowOutsideClick: true

    })
}

swalGanador();

const swalPerdedor = ()  =>{
    Swal.fire ({
        icon:'error',
        title:'Oooops!',
        text: 'Sigue intentando',
        
    allowOutsideClick: false
       })
}

swalPerdedor();

const limpiarMarcador = () => {
  contUsuario = 0;
  contCompu = 0;
  puntajeUsuario.textContent= contUsuario;
  puntajeComputador.textContent = contCompu; 
}
const ganador = (puntajeUser, puntajeComputador) => {
    console.log("Usuario:" +puntajeUser, "Computador:"+puntajeComputador, "Acá se muestra el resultado")
    if (puntajeUser >=3 && puntajeUser > puntajeComputador){
        console.log ("Usuario ganador");
        swalGanador ();
        setTimeout (limpiarMarcadores, 3000);
    }
else if (puntajeComputador >= 3 && puntajeComputador>puntajeUser){
        console.log ("Usuario perdedor");
        swalPerdedor ();
        setTimeout (limpiarMarcadores, 3000);
    }
}
const resultado = () => {
    if( eleccionUsuario == "piedra"){
        if(eleccionComputador == "piedra"){
            labelResultado.textContent = "Empate!!"
        }

        if (eleccionComputador == "papel"){
            labelResultado.textContent = "Perdiste"
            contadorComputador++;
        }
        
        if (eleccionComputador == "Tijera"){
            labelResultado.textContent = "Ganaste"
            contadorUsuario++;
        }
    }
    if( eleccionUsuario == "papel"){
        if(eleccionComputador == "papel"){
            labelResultado.textContent = "Empate!!"
        }

        if (eleccionComputador == "tijera"){
            labelResultado.textContent = "Perdiste"
            contadorComputador++;
        }
        
        if (eleccionComputador == "piedra"){
            labelResultado.textContent = "Ganaste"
            contadorUsuario++;
        }
    }
    if( eleccionUsuario == "tijera"){
        if(eleccionComputador == "tijera"){
            labelResultado.textContent = "Empate!!"
        }

        if (eleccionComputador == "piedra"){
            labelResultado.textContent = "Perdiste"
            contadorComputador++;
        }
        
        if (eleccionComputador == "papel"){
            labelResultado.textContent = "Ganaste"
            contadorUsuario++;
        }
    }
}    

const eleccionComputadora = () => {
    let opcionAlAzar= Math.floor (  Math.random()*3);
    //opcion piedra
    if(opcionAlAzar == 0){
        manoComputador.src= "./assets/piedra_computadora.png;"
        eleccionComputador = "Piedra";
    }
    else if  (opcionAlAzar == 1){
        //opcion papel
        manoComputador.src="./assets/papel_computadora.png";
        eleccionComputador = "Papel";
    }
    else{
        //opcion tijera
        manoComputador.src= "./assets/tijera_computadora.png";
        eleccionComputador = "Tijera";
    }
}; 

botonPiedra.onClick = () => {
    manoUsuario.src = "./assets/piedra_ada.png";
    manoComputador.src = "./assets/piedra_computadora.png";
    labelResultado.textContent = "";
    tablero.classList.add("Jugando");
    setTimeout = () => {
        eleccionUsuario = "piedra"
        manoUsuario.src = "./assets/piedra_ada.png";
        eleccionUsuario();
        tablero.classList.remove("Jugando");
        resultado ();
    },2000
}
botonPapel.onClick = () => {
    manoUsuario.src = "./assets/papel_ada.png";
    manoComputador.src = "./assets/papel_computadora.png";
    labelResultado.textContent = "";
    tablero.classList.add("Jugando");
    setTimeout = () => {
        eleccionUsuario = "papel"
        manoUsuario.src = "./assets/papel_ada.png";
        eleccionUsuario();
        resultado ();
    },2000
}
botonTijera.onClick = () => {
    manoUsuario.src = "./assets/tijera_ada.png";
    manoComputador.src = "./assets/tijera_computadora.png";
    labelResultado.textContent = "";
    tablero.classList.add("Jugando");
    setTimeout = () => {
        eleccionUsuario = "tijera"
        manoUsuario.src = "./assets/tijera_ada.png";
        eleccionUsuario();
        resultado ();
    },2000
}