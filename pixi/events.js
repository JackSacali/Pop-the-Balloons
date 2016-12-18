function onButtonDown()
{
    this.alpha = 0.5;
    var balloonIndex = balloons.indexOf(this);
    console.log('Clicked!', balloonIndex);
    stage.removeChildAt(balloonIndex);

}