// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = PIXI.autoDetectRenderer(1200, 900,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container();
stage.width = 800;
stage.height = 600;

// Declare a global variable for our sprite so that the animate function can access it.


