class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
        //stiffness:0.04,
        //length:10,
        pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var point1,point2;
        point1=this.rope.bodyA.position;
        point2=this.rope.bodyB.position;
        push();
        strokeWeight(4);
        stroke("white");
        //line(point1.x,point1.y,point2.x,point2.y);
        //line(point1.x,point1.y,this.pointB.x,this.pointB.y);
        line(point1.x, point1.y, point2.x + this.offsetX, point2.y + this.offsetY);
        pop();
    }
}