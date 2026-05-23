# solemne 2 Sistema visual dinámico e interactivo en p5.js 

https://editor.p5js.org/Cataaa/sketches/hRbbXcK-S

https://editor.p5js.org/Cataaa/full/hRbbXcK-S
___

## - **diagrama de flujo**


[link](https://www.figma.com/board/ZycdZK4dMfR1TwcQoyx9b5/User-Flow-Diagram-Template-for-FigJam--Community-?node-id=0-1&t=nqrKY56fxGHt3ALg-1)

<img width="1092" height="2468" alt="User Flow Diagram Template for FigJam (Community)" src="https://github.com/user-attachments/assets/93d7fc42-8b72-494a-b017-039b1ce85a2a" />



## *nombre del proyecto*: distorción radial

## *Autora*: Catalina San Martín

## *¿Qué es el proyecto?*:
Hay que hacer un programa en p5.js en el cual el usuario pueda interactuar con el sistema visual de diferentes maneras (e.j: mover el mouse, apretar un botón, hacer "click" en la pantalla, etc.).

## *Qué se ve en pantalla*
Al fondo se ve un fondo negro, ensima se ve un patrón de círculos blancos de diferentes tamaños que pertenecen a una cuadrícula. Hay un patrón de círculos central que da el efecto de que sigue al mouse. también hay un segundo patrón el cual da el efecto contrario, como si se alejara del mouse. Cuando mantienes apretado el click derecho del mouse en la pantalla se puede observar cómo los círculos reaccionan dando una ilusión de vibración con bordes morados.

## *Elementos visuales* 
Fondo negro, círculos blancos, trazos circulares morados.

## *Inputs y Outputs*
**Inputs**
* createCanvas(600,600);  *es lo que define el tamaño del canvas*
*  mouseX, mouseY  *es para calcular la distancia entre el mouse y cada círculo.*
* let d = dist(mouseX, mouseY, x, y);  *hace que los círculos cambien de tamaño.*
* if (mouseIsPressed)  *da la variante de que pase algo cuando apretes el mouse*
* strokeWeight(random(1,10));  *genera un número aleatorio del 1 a 10, Para variar el grosor de las líneas.*
* let espacio = 40;  *Define la distancia entre los círculos.*

**Outputs**
* background(0);  *Genera un fondo negro.*
* ellipse(x, y + tamaño, tamaño);  *Se dibujan múltiples círculos organizados en filas y columnas.*
* let tamaño = map(d, 0, 300, 40, 5);  *es lo que hace que los círculos cambien de tamaño o como reacciona al mouse*
* stroke(100,0,255);  *produce el color de el trazo morado*
* strokeWeight(random(1,10));  *cambia aleatoriamente el grosor del trazo*

## *Idea central del proyecto*
Quería que se produciera un tipo de onda que se viera armónico, para que cuando el usuario apretara "click" en la pantalla, se interrumpa lo armónico y se creara una especie de "vibración".

Quize hacer algo relacionado al arte cinético, ya que me llamó la atención y quize experimentar por ese lado. Me inspiré de variados videos de creadores que suben su registro a youtube.

## Referentes
no tuve un referente específico ya que me inspiré de varios creadores en youtube, asi que adjuntaré algunos videos de los que vi.

[link](https://youtube.com/shorts/ZYuYEPhjGK0?si=1_rvzqWeFq_KcLHa)

[link](https://youtube.com/shorts/EK1HEdnudfY?si=K-tUOBxi-AUzQtut)

[link](https://youtube.com/shorts/LHotI2nCC_o?feature=shared)

[link](https://youtube.com/shorts/EOafgU-JLbI?si=iLqFhaPSCLtSWwxM)
