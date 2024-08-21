const canvasZoneGame = document.getElementById('game-zone-id');
const ctxZone = canvasZoneGame.getContext('2d');

const canvasWordsZone = document.getElementById('words-zone-id');
const ctxWordsZone = canvasWordsZone.getContext('2d');

function dibujarCabeza() {
    ctxZone.lineWidth = 2
    ctxZone.fillStyle = '#0d0b14'
    ctxZone.strokeStyle = '#0d0b14'
    ctxZone.beginPath()
    //ctxZone.bezierCurveTo(502, 300, 514, 320, 495, 330)
    ctxZone.bezierCurveTo(507, 300, 519, 320, 500, 330)
    //ctxZone.bezierCurveTo(475, 340, 464, 310, 468, 300)
    ctxZone.bezierCurveTo(480, 340, 469, 310, 473, 300)
    ctxZone.fill()
    ctxZone.stroke()
    ctxZone.beginPath()
    ctxZone.moveTo(473, 300)
    //ctxZone.quadraticCurveTo(476, 283, 496, 291)
    ctxZone.quadraticCurveTo(484, 283, 504, 291)
    ctxZone.quadraticCurveTo(508, 295, 511, 300)
    ctxZone.fill()
    ctxZone.stroke()
}

dibujarCabeza();

function dibujarBrazoIzquierdo(){
     ctxZone.lineWidth = 2
     ctxZone.fillStyle = '#0d0b14'
     ctxZone.strokeStyle = '#0d0b14'
     ctxZone.beginPath()
     ctxZone.moveTo(480, 400)
     ctxZone.quadraticCurveTo(484, 283, 504, 291)
     ctxZone.quadraticCurveTo(508, 295, 511, 300)
     ctxZone.stroke()
}
dibujarBrazoIzquierdo();



//dibujarCabeza();
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const palabrasGroup = ['PANCHO', 'DADO','OTORRINORANRINGOLOGO   '];


// Referencia al contenedor donde se agregarán los botones

//console.log('Numero: '+palabrasGroup[Math.floor(Math.random()*palabrasGroup.length)].length)
//console.log('Palabras Group:'+Math.floor(Math.random() * palabrasGroup.length))
let palabraEscogidaAleatoriamente = ' ';
let indicePalabraAleatorio = Math.floor(Math.random() * palabrasGroup.length);
let palabraCreadaEnAleatorio = palabrasGroup[indicePalabraAleatorio];
console.log('AQUI ESTA LA PRUEBA'+palabraCreadaEnAleatorio.length)

let arrayPalabraAleatorio = [...palabraCreadaEnAleatorio]
console.log(arrayPalabraAleatorio)
/*
for(i=0;i<=palabrasGroup;i++){
    if (i === Math.floor(Math.random() * palabrasGroup.length)) {
        palabraEscogidaAleatoriamente=[...palabrasGroup[i]]
    }
}*/
//Creacion de lineas que va a ir cada letra
const numLines = arrayPalabraAleatorio.length
const lineWidth = 30 // Ancho de las líneas
const spacing = 10 // Espacio entre las líneas (ajustable)
const centroWidth = canvasWordsZone.width/2
const centroHeight = canvasWordsZone.height/2;
console.log(canvasWordsZone.height)
const totalLinesWidth = numLines * lineWidth + (numLines - 1) * spacing
let startX = centroWidth - totalLinesWidth / 2

for (i = 1; i <= numLines; i++) {
    ctxWordsZone.lineWidth = 4
    ctxWordsZone.strokeStyle = '#fff'
    ctxWordsZone.beginPath()
    ctxWordsZone.moveTo(startX, centroHeight)
    ctxWordsZone.lineTo(startX + lineWidth, centroHeight)
    ctxWordsZone.stroke()

    console.log(`X START: ${startX}`)
    console.log(`X FIN : ${startX + lineWidth}`)
    console.log('----')
    startX = startX + lineWidth + spacing
}
let objeto = {}
startX = centroWidth - totalLinesWidth / 2
for (i = 0; i < numLines; i++) {
    let caracter = arrayPalabraAleatorio[i]
    objeto[i] = {
        letra: caracter,
        xInicio: startX,
        xFinal: startX + lineWidth,
    }
    startX = startX + lineWidth + spacing
}

console.log(objeto)





const buttonContainer = document.getElementById('button-container')

// Itera sobre el array de letras
letters.forEach((letter) => {
    // Crea un botón para cada letra
    const button = document.createElement('button')

    // Agrega la clase definida a cada botón
    button.className = 'custom-button'

    // Asigna la letra como texto del botón
    button.textContent = letter

    button.addEventListener('click', () => {
        console.log(button.innerText)
        for (i = 0; i < arrayPalabraAleatorio.length; i++) {
            if (objeto[i].letra == button.innerText) {
                ctxWordsZone.font = '25px Impact'
                ctxWordsZone.fillStyle = '#fff';
                ctxWordsZone.fillText(button.innerText, objeto[i].xInicio+10,centroHeight-5)
            }
        }
        button.remove();
        /*ctxWordsZone.font = '25px Impact'
        ctxWordsZone.fillStyle = '#fff';
        ctxWordsZone.fillText(button.innerText, objeto[1].xInicio+10,centroHeight-5)*/
    })

    // Inserta el botón en el contenedor
    buttonContainer.appendChild(button)
})
/*
for(i=0;i<arrayPalabraAleatorio.length;i++){
    if(objeto[i].letra ==='d'){
        delete objeto[i]
        
        

    }
}
*/
console.log(objeto)