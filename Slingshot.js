//attach the body to a point 
class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        //only if the body A position is known then display the constraint
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          
        }
       
    }
 //null=nothing
 //detach the body A from the constraint sling i.e attach body A to nothing    
    fly(){
        this.sling.bodyA=null;
    }
}