class Rope{
    constructor(body1,body2,offsetX,offsetY)
}
this.offsetX=offsetX
this.offsetY=offsetY
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}
}
this.rope=constraint.create(options)
World.add(world,this.rope)

rope1=new rope(ball1.body,roof.body,ball1Diameter*2,0)
rope2=new rope(ball2.body,roof.body,ball2Diameter*2,0)
rope3=new rope(ball3.body,roof.body,ball3Diameter*2,0)
rope4=new rope(ball4.body,roof.body,ball4Diameter*2,0)
rope5=new rope(ball5.body,roof.body,ball5Diameter*2,0)
