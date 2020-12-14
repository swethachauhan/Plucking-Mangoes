class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image=loadImage("images/stone.png");
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
        
    }
    display(){
        ellipseMode(CENTER);
        var pos=this.body.position;
        push()
        rotate(this.body.angle);
        translate(pos.x,pos.y);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}