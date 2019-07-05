function Ball(x,y,appElement){
var that = this;
that.x = x;
that.y = y;
that.newElement = null;
that.parentElement = appElement;
that.dx=1;
that.dy=1;
that.containerWidth = 900;
that.containerHeight =600;
that.ballSize=30;
that.ballRadius= 15;




that.init = function(){
  that.newElement = document.createElement('div');
  that.newElement.className="ball";
  that.parentElement.appendChild(that.newElement);

}

that.generateCordinate= function (){
  that.x = that.getRandomInt(0,that.containerWidth-that.ballSize);
  that.y = that.getRandomInt(0,that.containerHeight-that.ballSize);
}

 that.getRandomInt=function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


that.draw = function(){

that.newElement.style.left = that.x +'px';
that.newElement.style.top = that.y + 'px';

}



that.move = function(){

    if(that.x  >that.containerWidth-that.ballSize || that.x <0 ){
        that.dx *= -1;
    }
    if(that.y > that.containerHeight-that.ballSize || that.y <0 ){
        that.dy *= -1;
    }



    //collision detection
    balls.forEach(function(ball, index) {

      if (that === ball) return;

      var distance = Math.sqrt(Math.pow(that.x - ball.x, 2) + Math.pow(that.y - ball.y, 2));
      if (distance <= (that.ballRadius*2)) {
        that.dx *= -1;
        that.dy *= -1;
      }
    })




    that.x += that.dx;
    that.y += that.dy;
}

}

function animateBall(){
  for(var i=0; i<balls.length; i++){
    balls[i].move();
    balls[i].draw();

  }
}





var appElement = document.getElementById('app');

var balls =[];

var totalBalls= 20;


do {
   var ball = new Ball(10,20,appElement);
   ball.init();
   ball.generateCordinate();
   ball.draw();
   balls.push(ball);
    totalBalls--;
}while (totalBalls>0)



setInterval(animateBall,1000/60);
