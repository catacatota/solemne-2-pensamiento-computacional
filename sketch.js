let espacio = 40;

// creación del canvas
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  // filas
  for (let y = 0; y < height; y += espacio) {

    // columnas
    for (let x = 0; x < width; x += espacio) {

       // DISTANCIA AL MOUSE
      let d = dist(mouseX, mouseY, x, y);

       // TAMAÑO VARIABLE
      let tamaño = map(d, 0, 300, 40, 5);
  
      // aparecen líneas de diferente color si se presiona el               mouse
    if (mouseIsPressed) {
    stroke(100,0,255);
    strokeWeight(random(1, 10));
  } else 
    stroke(0);{   
    
    }
    
      ellipse(x, y + tamaño, tamaño);
    }
  }
}