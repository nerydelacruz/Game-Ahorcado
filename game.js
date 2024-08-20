const canvasZoneGame = document.getElementById('game-zone-id');
const ctxZone = canvasZoneGame.getContext('2d');

const canvasWordsZone = document.getElementById('words-zone-id');
const ctxWordsZone = canvasWordsZone.getContext('2d');

function dibujarCabeza() {
    ctxZone.lineWidth = 2;
    ctxZone.fillStyle = '#0d0b14';
    ctxZone.strokeStyle = '#0d0b14';
    ctxZone.beginPath();
    ctxZone.bezierCurveTo(502, 300, 514, 320, 495, 330);
    ctxZone.bezierCurveTo(475, 340, 464, 310, 468, 300);
    ctxZone.fill();
    ctxZone.stroke();
    ctxZone.beginPath();
    ctxZone.moveTo(468, 300);
    ctxZone.quadraticCurveTo(476, 283, 496, 291);
    ctxZone.quadraticCurveTo(500, 295, 503, 300);
    ctxZone.fill();
    ctxZone.stroke();
}




//dibujarCabeza();
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const palabrasGroup = ['pancho', 'dado','otorrinoralingologo'];


// Referencia al contenedor donde se agregarán los botones
const buttonContainer = document.getElementById('button-container');




// Itera sobre el array de letras
letters.forEach(letter => {
    // Crea un botón para cada letra
    const button = document.createElement('button');

    // Agrega la clase definida a cada botón
    button.className = 'custom-button';

    // Asigna la letra como texto del botón
    button.textContent = letter;

    button.addEventListener('click', () => {
        ctxWordsZone.clearRect(0, 0, canvasWordsZone.width, canvasWordsZone.height);
        ctxWordsZone.font = ('48px Impact');
        ctxWordsZone.fillText(letter, 5, 70);
    })

    // Inserta el botón en el contenedor
    buttonContainer.appendChild(button);
});

console.log('Palabras Group:'+Math.floor(Math.random() * palabrasGroup.length))
let numeroLetrasPalabraEscogida = 0;
//console.log(Math.floor(Math.random() * 2));
//console.log(Math.floor(Math.random() * 3));
palabrasGroup.forEach((index, index2) => {
    if (index2 == Math.floor(Math.random() * palabrasGroup.length)) {
        console.log(index2.length)
        numeroLetrasPalabraEscogida = index.length
    }
})

console.log(numeroLetrasPalabraEscogida)
