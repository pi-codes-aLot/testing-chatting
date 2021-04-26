class inputBox{
    constructor(x, y, width){
        this.x = x
        this.y = y
        this.width = width;
        
        //Creating text box
        this.box = createInput("Type something here to chat...")
    }
    display(){
        this.box.position(this.x, this.y);
        this.box.size(this.width)
    }
}