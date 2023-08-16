const imagenes = [
    { nombre: "limon", url: "https://static.vecteezy.com/system/resources/previews/013/358/473/non_2x/lemon-fruit-logo-design-vector.jpg" },
    { nombre: "campana", url: "https://static.vecteezy.com/system/resources/previews/007/063/099/non_2x/bell-icon-isolated-on-white-background-free-vector.jpg" },
    { nombre: "diamante", url: "https://static.vecteezy.com/system/resources/previews/019/526/301/original/diamond-slot-game-color-icon-illustration-vector.jpg" },
    { nombre: "cereza", url: "https://static.vecteezy.com/system/resources/previews/008/688/083/non_2x/cherry-icon-free-vector.jpg" },
    { nombre: "herradura", url: "https://static.vecteezy.com/system/resources/previews/003/030/499/non_2x/golden-horseshoe-in-cartoon-style-illustration-isolated-vector.jpg" },
    { nombre: "uva", url: "https://static.vecteezy.com/system/resources/previews/007/697/457/non_2x/a-mouth-watering-isometric-icon-of-grapes-vector.jpg" },
    { nombre: "bar", url: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Bar-512.png" }
];

function lanzar() {
    document.getElementById("iniciar").onclick = tirar;
}

/**
 * guarda el historial en el elemento creado li y en el for agrega las imagenes que salieron 
 * en la jugada reciente y con appendChild los agregamos en le contenedor
 */
function actualizarHistorial(jugada) {
    var listaJugadas = document.getElementById("lista-jugadas");
    var nuevaJugada = document.createElement("li");

    var jugadaTexto = document.createElement("span");
    jugadaTexto.textContent = "Jugada: ";
    nuevaJugada.appendChild(jugadaTexto);

    for (var i = 0; i < numImagen.length; i++) {
        var imagen = document.createElement("img");
        var imagenInfo = imagenes.find(img => img.nombre === numImagen[i].nombre);
        imagen.src = imagenInfo.url;
        imagen.classList.add("imagen-historial");
        nuevaJugada.appendChild(imagen);
    }

    listaJugadas.appendChild(nuevaJugada);
}

//creo un bucle con la variable i con un valor inicial de 0 y que se repita hasta llegar a 3

function tirar() {
    numImagen = [];
    for (let i = 0; i < 3; i++) {
        numImagen.push(num_aleatorio());
        cambiar_imagen(i, numImagen[i].url);
    }
    var jugadaActual = "Jugada: " + numImagen[0] + " - " + numImagen[1] + " - " + numImagen[2];
    actualizarHistorial(jugadaActual);
}

//escoge un numero aleatorio 
function num_aleatorio() {
    var numAzar = Math.floor(Math.random() * imagenes.length);
    return imagenes[numAzar];
}


//cambia las imagenes en la

function cambiar_imagen(num, img) {
    var imagenCambiar = document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0];
    imagenCambiar.src = img;
}


// verifica que la posicion de las imagenes sea iguales en los 3 casos y en caso de ser correcta saldra un alert
function verificar_premio() {
    if (numImagen[0].nombre === numImagen[1].nombre && numImagen[1].nombre === numImagen[2].nombre) {
        alert("ganaste");
    }
}


//inicializa la funcion lanzar
lanzar();

// convierte los pesos a devcoins
function convertir() {
    var valorP = parseFloat(document.getElementById("pesos-convertir").value);
    if (isNaN(valorP) || valorP === 0) {
        alert("Ingresa un valor válido en pesos antes de convertir.");
        return;
    }

    var saldoPesos = parseFloat(document.getElementById("dinero-pesos").textContent);

    if (valorP > saldoPesos) {
        alert("No dispones de esa cantidad de pesos para realizar la conversión");
        return;
    }

    var devcoins = valorP / 3;

    // actualiza el div con el saldo en devcoins
    var saldoDevcoins = parseFloat(document.getElementById("dinero-devcoins").textContent);
    saldoDevcoins += devcoins;

    // actualiza los devcoins y los limita a 2 decimales
    document.getElementById("dinero-devcoins").textContent = saldoDevcoins.toFixed(2);

    saldoPesos -= valorP;

    document.getElementById("dinero-pesos").textContent = saldoPesos.toFixed(0);

    var jugadaActual = "Conversion: " + valorP + " pesos a " + devcoins.toFixed(2) + " devcoins";
    actualizarHistorial(jugadaActual, []);
}

function ingresarPesos() {
    var valorIngresadoPesos = parseFloat(document.getElementById("pesos-ingresados").value);
    if (isNaN(valorIngresadoPesos) || valorIngresadoPesos === 0) {
        alert("Ingresa un valor entre 1 y 9999 en pesos.");
    } else {
        document.getElementById("dinero-pesos").textContent = valorIngresadoPesos.toFixed(0);
    }
}

