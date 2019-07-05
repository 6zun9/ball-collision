function Ball(x,y,appElement){
this.x = x;
this.y = y;
this.newElement = null;
this.parentElement = appElement;
this.dx=1;
this.dy=1;
this.containerWidth = 900;
this.containerHeight =600;
this.ballSize=30;
this.ballRadius= 15;




this.init = function(){
  this.newElement = document.createElement('div');
  this.newElement.className="ball";
  this.parentElement.appendChild(this.newElement);

}

this.generateCordinate= function (){
  this.x = this.getRandomInt(0,this.containerWidth-this.ballSize);
  this.y = this.getRandomInt(0,this.containerHeight-this.ballSize);
}

 this.getRandomInt=function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


this.draw = function(){

this.newElement.style.left = this.x +'px';
this.newElement.style.top = this.y + 'px';

}



this.move = function(){

    if(this.x  >this.containerWidth-this.ballSize || this.x <0 ){
        this.dx *= -1;
    }
    if(this.y > this.containerHeight-this.ballSize || this.y <0 ){
        this.dy *= -1;
    }



    //collision detection 
    balls.forEach(function(ball, index) {
      var distance = Math.sqrt(Math.pow(this.x - ball.x, 2) + Math.pow(this.y - ball.y, 2));
      if (distance <= (this.ballRadius*2)) {
        this.dx *= -1;
        this.dy *= -1;
      }
    })




    this.x += this.dx;
    this.y += this.dy;
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
