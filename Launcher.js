class Launcher{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.01,
            length:10
        }
        this.elastic=Matter.Constraint.create(options);
        World.add(world,this.elastic);
        this.point2=point2;
    }
    

    fly(){
        this.elastic.bodyA=null;
    }

    display(){
        if(this.elastic.bodyA){
            var p1=this.elastic.bodyA;
            var p2=this.point2;
            stroke("red");
            line(p1.x,p1.y,p2.x,p2.y);
        }
        

    }
}