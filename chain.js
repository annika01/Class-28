class Chain {
constructor(x,y){
    var options= {
        bodyA: x, 
        pointB: y,
        length: 10,
 stiffness: 0.04
    }
    this.chain= Constraint.create (options)
    World.add(world, this.chain)
}
fly(){
    this.chain.bodyA= null
}

display(){
    if (this.chain.bodyA){

    
    var pointA= this.chain.bodyA.position
    var pointB= this.chain.pointB
    push ();
    strokeWeight(5)
    stroke("blue")
    line (pointA.x, pointA.y, pointB.x, pointB.y)}
    pop ();
    
}

}