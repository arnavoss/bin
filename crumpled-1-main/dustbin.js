class Dustbin{
    constructo(rx, y, width, height, angle) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;   
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
      }
      display(){
       rectMode("center");
       fill("cyan")
       rect(this.x,this.y,this.width,this.height);
      }
}
