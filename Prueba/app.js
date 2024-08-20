const tableros = document.getElementById('tablero');
const tblCanva = tableros.getContext('2d'); 
/*
tblCanva.lineWith=2;
tblCanva.strokeStyle = '#fff'
tblCanva.beginPath();
tblCanva.moveTo(10,10);
tblCanva.lineTo(50,10);
tblCanva.stroke();
*/
console.log(tableros.width)
//Sabiendo que el rectangulo mide 140 width y 170 height
const numLines = 6
const lineWidth = 20 // Ancho de las líneas
const spacing = 10 // Espacio entre las líneas (ajustable)
const centroWidth = 250;
const centroHeight = 50;

// Calcula donde INICIARA a dibujar las lineas---startX  esta el inicio---
const totalLinesWidth = numLines * lineWidth + (numLines - 1) * spacing
let startX = centroWidth - totalLinesWidth / 2
//console.log('centro '+startX)

let palabra = [...'tomate']

for(i=1;i<=palabra.length;i++){
    tblCanva.lineWith = 2
    tblCanva.strokeStyle = '#fff'
    tblCanva.beginPath()
    tblCanva.moveTo(startX, centroHeight)
    tblCanva.lineTo(startX+lineWidth, centroHeight)
    tblCanva.stroke()
    
    console.log(`X START: ${ startX}`)
    console.log(`X FIN : ${startX+lineWidth}`)
    console.log('----')
    startX = startX+lineWidth+spacing;
}



let objeto = {};
startX = centroWidth - totalLinesWidth / 2;
for(i=0;i<6;i++){
    let caracter = palabra[i]
    objeto[i] = {
        letra: caracter,
        xInicio: startX,
        xFinal: startX + lineWidth
    }
    startX = startX + lineWidth + spacing
}

console.log(objeto[1].xInicio)

tblCanva.font = '15px Impact'
tblCanva.fillText(objeto[2].letra, objeto[2].xInicio+4,centroHeight-2)