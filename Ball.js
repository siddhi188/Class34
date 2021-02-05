class Ball{
    constructor(x,y,r){
        var options={
        restitution : 1.2,
        density : 1.0,
        
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r
        World.add(world,this.body)

    }
    display(){
        push()
        fill("green")
        strokeWeight(3)
        stroke("black")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r)
        pop()
    }
}