const imagenes = [
    "https://static.vecteezy.com/system/resources/previews/013/358/473/non_2x/lemon-fruit-logo-design-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/007/063/099/non_2x/bell-icon-isolated-on-white-background-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/019/526/301/original/diamond-slot-game-color-icon-illustration-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/008/688/083/non_2x/cherry-icon-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/003/030/499/non_2x/golden-horseshoe-in-cartoon-style-illustration-isolated-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/007/697/457/non_2x/a-mouth-watering-isometric-icon-of-grapes-vector.jpg",
    "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Bar-512.png"
    /*     "https://thumbs.dreamstime.com/b/hoja-afortunada-verde-del-trébol-102007857.jpg", */
    /*     "https://media.istockphoto.com/id/1265616105/es/vector/icono-de-rebanada-naranja-vector-de-paz-naranja.jpg?s=170667a&w=0&k=20&c=_S_4jtaXns_A-3JsfOUKDK9tHRmfA22uXUEh0_03uRU=" */
]

function lanzar() {
    document.getElementById("iniciar").onclick = tirar;
}



//creo un bucle con la variable i con un valor inicial de 0 y que se repita hasta llegar a 3
function tirar() {
    numImagen = [];
    for (let i = 0; i < 3; i++) {
        numImagen.push(num_aleatorio());
        cambiar_imagen(i, numImagen[i]);
    }
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
    if (numImagen[0] === numImagen[1] && numImagen[1] === numImagen[2]) {
        alert("ganaste");
    }
}


//inicializa la funcion lanzar
lanzar();


// convierte los pesos a devcoins
function convertir() {
    var valorp = parseFloat(document.getElementById("pesos").value);
    if (isNaN(valorp) || valorp == 0) {
        alert("Ingresa un valor válido en pesos antes de convertir.");
        return;
    }
    var devcoins = valorp / 3;

    // actualiza el div con el saldo en devcoins
    var saldoDevcoins = parseFloat(document.getElementById("dinero-devcoins").textContent);
    saldoDevcoins += devcoins;

    // actualiza los devcoins y los limita a 2 decimales
    document.getElementById("dinero-devcoins").textContent = saldoDevcoins.toFixed(2);
}

function ingresarPesos() {
    var valorIngresadoPesos = parseFloat(document.getElementById("pesos-ingresados").value);
    if (isNaN(valorIngresadoPesos) || valorIngresadoPesos === 0) {
        alert("Ingresa un valor entre 1 y 9999 en pesos.");
    } else {
        document.getElementById("dinero-pesos").textContent = valorIngresadoPesos.toFixed(0);
    }
}

