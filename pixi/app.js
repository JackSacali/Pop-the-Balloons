// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var canvas = document.getElementById('content');
var renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor : 0x00FFFF});
var elem = document.getElementById("content");
elem.appendChild(renderer.view);

// The renderer will create a canvas element for you that you can then insert into the DOM.
elem.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container();
stage.width = 800;
stage.height = 600;

