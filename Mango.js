class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.image=loadImage("images/mango.png");
        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        this.r=30;
        
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