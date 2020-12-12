class Log{
    constructor(x,y,h,angle){
        var opt ={
            restitution: 0.5,
            density:1.0,
            friction:1.2
        }
    
        this.body = Bodies.rectangle(x,y,20,h, opt);
        this.width=20;
        this.height=h;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black");
        stroke("chocolate");
        strokeWeight(6);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}