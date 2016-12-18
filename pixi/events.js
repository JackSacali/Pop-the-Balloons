function onButtonDown()
{
    this.alpha = 0.5;
    var balloonIndex = balloons.indexOf(this);
    console.log('Clicked!', balloonIndex);
    balloonsStage.removeChildAt(balloonIndex);
    if (balloonIndex > -1) {
        balloons.splice(balloonIndex, 1);
    }
    if (balloons.length < 1) {
//        setTimeout(function() { alert("Congratulations!"); }, 10);
//        alert('Congratulations!')
        var blurFilter1 = new PIXI.filters.BlurFilter();
        var blurFilter2 = new PIXI.filters.BlurFilter();

        bg.filters = [blurFilter1];
        pointer.filters = [blurFilter2];
        animateFin();
    }
}



function animateFin() {
    requestAnimationFrame(animateFin);
    congrats.position.y += Math.random(congrats.direction) * 7;
    if (congrats.position.y > 50)
        {
            congrats.position.y = 50;
        }
    
    
    // just for fun, let's rotate mr rabbit a little
    fin.position.y -= Math.random(fin.direction) * 11;
    if (fin.position.y < 50)
        {
            fin.position.y = 50;
        }
    // render the container
    renderer.render(stage);
}

