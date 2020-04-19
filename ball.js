class Ball{

constructor(x,y,diameter){

    var options ={
        'restitution': 0.5,
        'friction': 0.5,
        'density': 0.5
    }

    this.body = Bodies.circle(x,y,diameter,options);
    this.d = diameter;

    World.add(world,this.body)
}

display(){

    var pos = this.body.position;
    //var angle = this.body.angle;

    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    push();

    

    
    fill("red");
    circle(pos.x,pos.y,this.d);

    pop();
}

}