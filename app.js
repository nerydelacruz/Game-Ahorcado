window.onload = function(){
    canvas = document.getElementById('canvas');
    if(canvas && canvas.getContext){
        ctx = canvas.getContext('2d');
        if(ctx){

            //lado izquierdo superior ESQUINA
            ctx.lineWidth=2;
            ctx.strokeStyle='#fff';
            ctx.shadowColor='#3300f2';
            
            ctx.shadowBlur = 12;  
            ctx.beginPath();
            ctx.moveTo(1,40);
            ctx.lineTo(1,20);
            ctx.lineTo(15,1);
            ctx.lineTo(40,1);
            ctx.stroke();

            //lado derecho superior ESQUINA
            ctx.beginPath();
            ctx.moveTo(460,1);
            ctx.lineTo(485,1);
            ctx.lineTo(499,20);
            ctx.lineTo(499,40);
            ctx.stroke();

            //lado izquierdo inferior ESQUINA
            ctx.beginPath();
            ctx.moveTo(1,210);
            ctx.lineTo(1,235);
            ctx.lineTo(15,249);
            ctx.lineTo(40,249);
            ctx.stroke();

            //lado inferior derecho ESQUINA
            ctx.beginPath();
            ctx.moveTo(460,249);
            ctx.lineTo(485,249);
            ctx.lineTo(499,235);
            ctx.lineTo(499,215);
            ctx.stroke();

            //lado izquierdo
            ctx.strokeStyle='#6b2d3c';
            ctx.beginPath();
            ctx.moveTo(1,60);
            ctx.lineTo(1,190);
            ctx.stroke();

            //lado derecho
            ctx.beginPath();
            ctx.moveTo(499,60);
            ctx.lineTo(499,190);
            ctx.stroke();
            
            //lado izquierdo 2
            ctx.lineWidth=2;
            ctx.strokeStyle="#3300f2"
            ctx.beginPath();
            ctx.moveTo(35,45);
            ctx.lineTo(35,90);
            ctx.lineTo(28,100);
            ctx.lineTo(28,135);
            ctx.lineTo(35,145);
            ctx.lineTo(35,200)
            ctx.stroke();

            //lado derecho 2
            ctx.beginPath();
            ctx.moveTo(465,45);
            ctx.lineTo(465,90);
            ctx.lineTo(472,100);
            ctx.lineTo(472,135);
            ctx.lineTo(465,145);
            ctx.lineTo(465,200)
            ctx.stroke();

            //Grupo Central******************************************************************************************
            //LINEAS DE ARRIBA GRUPO-1-
            //Lineas de arriba IZQUIERDA PARTE-1
            ctx.beginPath();
            ctx.lineWidth=2.5;
            ctx.strokeStyle='rgba(255,255,255,0.8)';
            ctx.moveTo(60,75);
            ctx.lineTo(63,83);
            ctx.lineTo(120,83);
            ctx.stroke();
            //                 PARTE-2
            ctx.beginPath();
            ctx.strokeStyle="#3300f2"
            ctx.moveTo(121.5,83);
            ctx.lineTo(145,83);
            ctx.stroke();
            //                 PARTE-3
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.8)';
            ctx.moveTo(146.5,83);
            ctx.lineTo(180,83);
            ctx.stroke();
            //                 PARTE-4
            ctx.beginPath();
            ctx.strokeStyle="#3300f2"
            ctx.moveTo(181.5,83);
            ctx.lineTo(210,83);
            ctx.lineTo(220,73);
            ctx.lineTo(230,73)
            ctx.stroke();
            

            //Lineas de arriba DERECHA PARTE-1
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.8)';
            ctx.moveTo(430,75);
            ctx.lineTo(427,83);
            ctx.lineTo(370,83);
            ctx.stroke();
            //                 PARTE-2
            ctx.beginPath();
            ctx.strokeStyle="#3300f2"
            ctx.moveTo(369.5,83);
            ctx.lineTo(344,83);
            ctx.stroke();
            //                 PARTE-3
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.8)';
            ctx.moveTo(343.5,83);
            ctx.lineTo(309,83);
            ctx.stroke();
            //                 PARTE-4
            ctx.beginPath();
            ctx.strokeStyle="#3300f2"
            ctx.moveTo(308.5,83);
            ctx.lineTo(279,83);
            ctx.lineTo(270,73);
            ctx.lineTo(260,73)
            ctx.stroke();

            //LINEAS DE ARRIBA GRUPO-2-
            //Lineas de arriba IZQUIERDA PARTE-1
            ctx.beginPath();
            ctx.strokeStyle="rgbA(51, 0, 242,0.7)"
            ctx.moveTo(55,102);
            ctx.lineTo(65,92);
            ctx.lineTo(160,92);
            ctx.stroke();

            //                           PARTE-2
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.5)';
            ctx.moveTo(180,92);
            ctx.lineTo(240,92);
            ctx.stroke();

            //Lineas de arriba DERECHA PARTE-1
            ctx.beginPath();
           ctx.strokeStyle="rgbA(51, 0, 242,0.7)"
            ctx.moveTo(445,102);
            ctx.lineTo(435,92);
            ctx.lineTo(340,92);
            ctx.stroke();

            //                           PARTE-2
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.5)';
            ctx.moveTo(320,92);
            ctx.lineTo(260,92);
            ctx.stroke();

            //LINEAS DE ABAJO GRUPO-1---------------------------------------------------------
            //Lineas de arriba IZQUIERDA PARTE-1
            ctx.beginPath();
            ctx.lineWidth=2.5;
            ctx.strokeStyle='rgba(255,255,255,0.8)';
            ctx.moveTo(60,175);
            ctx.lineTo(63,167);
            ctx.lineTo(120,167);
            ctx.stroke();
            //                 PARTE-2
            ctx.beginPath();
            ctx.strokeStyle="#3300f2"
            ctx.moveTo(121.5,167);
            ctx.lineTo(145,167);
            ctx.stroke();
            //                 PARTE-3
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.8)';
            ctx.moveTo(146.5,167);
            ctx.lineTo(180,167);
            ctx.stroke();
            //                 PARTE-4
            ctx.beginPath();
            ctx.strokeStyle="#3300f2"
            ctx.moveTo(181.5,167);
            ctx.lineTo(210,167);
            ctx.lineTo(220,177);
            ctx.lineTo(230,177)
            ctx.stroke();
            

            //Lineas de arriba DERECHA PARTE-1
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.8)';
            ctx.moveTo(430,175);
            ctx.lineTo(427,167);
            ctx.lineTo(370,167);
            ctx.stroke();
            //                 PARTE-2
            ctx.beginPath();
            ctx.strokeStyle="#3300f2"
            ctx.moveTo(369.5,167);
            ctx.lineTo(344,167);
            ctx.stroke();
            //                 PARTE-3
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.8)';
            ctx.moveTo(343.5,167);
            ctx.lineTo(309,167);
            ctx.stroke();
            //                 PARTE-4
            ctx.beginPath();
            ctx.strokeStyle="#3300f2"
            ctx.moveTo(308.5,167);
            ctx.lineTo(279,167);
            ctx.lineTo(270,177);
            ctx.lineTo(260,177)
            ctx.stroke();

            //LINEAS DE ARRIBA GRUPO-2-
            //Lineas de arriba IZQUIERDA PARTE-1
            ctx.beginPath();
            ctx.strokeStyle="rgbA(51, 0, 242,0.7)"
            ctx.moveTo(55,148);
            ctx.lineTo(65,158);
            ctx.lineTo(160,158);
            ctx.stroke();

            //                           PARTE-2
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.5)';
            ctx.moveTo(180,158);
            ctx.lineTo(240,158);
            ctx.stroke();

            //Lineas de arriba DERECHA PARTE-1
            ctx.beginPath();
           ctx.strokeStyle="rgbA(51, 0, 242,0.7)"
            ctx.moveTo(445,148);
            ctx.lineTo(435,158);
            ctx.lineTo(340,158);
            ctx.stroke();

            //                           PARTE-2
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255,0.5)';
            ctx.moveTo(320,158);
            ctx.lineTo(260,158);
            ctx.stroke();

            //PARTE DE ARRIBA ---PUNTOS--- ALREDEDORES
            //Puntos En la parte de ARRIBA -IZQUIERDA
            ctx.fillStyle='rgba(255,255,255)';
            ctx.beginPath();
            ctx.strokeStyle='#FFF';
            ctx.moveTo(70,2);
            ctx.lineTo(72,2);
            ctx.lineTo(72,4)
            ctx.lineTo(70,4)
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            //Puntos En la parte de ARRIBA -DERECHA
            ctx.fillStyle='rgba(255,255,255)';
            ctx.beginPath();
            ctx.strokeStyle='#FFF';
            ctx.moveTo(430,2);
            ctx.lineTo(428,2);
            ctx.lineTo(428,4)
            ctx.lineTo(430,4)
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            //Puntos En la parte de ABAJO -IZQUIERDA
            ctx.fillStyle='rgba(255,255,255)';
            ctx.beginPath();
            ctx.strokeStyle='#FFF';
            ctx.moveTo(70,248);
            ctx.lineTo(72,248);
            ctx.lineTo(72,246)
            ctx.lineTo(70,246)
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            //Puntos En la parte de ABJO -DERECHA
            ctx.fillStyle='rgba(255,255,255)';
            ctx.beginPath();
            ctx.strokeStyle='#FFF';
            ctx.moveTo(430,248);
            ctx.lineTo(428,248);
            ctx.lineTo(428,246)
            ctx.lineTo(430,246)
            ctx.closePath();
            ctx.fill();
            ctx.stroke();


            //PARTE DE ARRIBA ---PUNTOS--- INTERNAMENTE
            //Puntos En la parte de ARRIBA -IZQUIERDA
            ctx.fillStyle='rgba(255,255,255)';
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255)';
            ctx.moveTo(100,100);
            ctx.lineTo(105,100);
            ctx.lineTo(105,105)
            ctx.lineTo(100,105)
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            //Puntos En la parte de ARRIBA -DERECHA
            ctx.fillStyle='rgba(255,255,255)';
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255)';
            ctx.moveTo(400,100);
            ctx.lineTo(395,100);
            ctx.lineTo(395,105)
            ctx.lineTo(400,105)
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

             //PARTE DE ABAJO ---PUNTOS---
            //Puntos En la parte de ABAJO -IZQUIERDA
            ctx.fillStyle='rgba(255,255,255)';
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255)';
            ctx.moveTo(100,150);
            ctx.lineTo(105,150);
            ctx.lineTo(105,145)
            ctx.lineTo(100,145)
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            //Puntos En la parte de ABAJO -DERECHA
            ctx.fillStyle='rgba(255,255,255)';
            ctx.beginPath();
            ctx.strokeStyle='rgba(255,255,255)';
            ctx.moveTo(400,150);
            ctx.lineTo(395,150);
            ctx.lineTo(395,145)
            ctx.lineTo(400,145)
            ctx.closePath();
            ctx.fill();
            ctx.stroke();


        }else{
            console.log('no se soporta la etiqueta canvas')
        }
    }
}