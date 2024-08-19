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


ctxWordsZone.font('48px serif');
ctxWordsZone.strokeText('Hola',20,30)

//dibujarCabeza();
const letters = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

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
        
        // Inserta el botón en el contenedor
        buttonContainer.appendChild(button);
    });