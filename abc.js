function keyPressed() {
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:300,y:-295});
    }
}