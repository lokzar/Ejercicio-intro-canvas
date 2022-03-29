const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

//Generar rectángulo
ctx.fillStyle = "purple"

//fillRect(x,y,width,height)
//x y= punto incial width= ancho a partir del punto height= alto a partir del punto
ctx.fillRect(260, 260, 30, 30)

ctx.fillStyle="orange"
ctx.fillRect(25,25,100,100)
ctx.clearRect(45,45,60,60)

//borrar canvas
//ctx.clearRect(0,0,500,500)

//pintar el perímetro
ctx.strokeRect(300,50,50,50) 

//Paths(líneas)
ctx.beginPath()
    //inicio de posición
    ctx.moveTo(450,150)
    //fin de posición
    ctx.lineTo(450,50)
    //ejecución de pintado
    ctx.stroke()
ctx.closePath()
    