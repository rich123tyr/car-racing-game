class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        this.reset = createButton("Reset");

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 50,0);
        

        this.input.position(displayWidth/2 - 40,displayHeight/2 - 40);
        this.button.position(displayWidth/2 +30,displayHeight/2);
        this.greeting.position(displayWidth/2,displayHeight/4);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount++
            player.updatecount(playercount);
            player.index = playercount;
            player.update();
            this.greeting.html("Hello"+ player.name);

            
        })

        this.reset.mousePressed(()=>{

            game.update(0);
            player.updatecount(0);
            Player.removeplayers();

        })

    }
}