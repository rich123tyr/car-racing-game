class Game{
    constructor(){

    }

    getstate(){
        var gamestateref = database.ref("gamestate");
        gamestateref.on("value", function(data){
            gamestate = data.val();
            //sketch.js gamestate
        },function(){
            console.log("Error in reading gamestate from databse");
        })
    }
    
    update(state){
        database.ref("/").update({
            gamestate: state,
            //firebase gamestate
        })
    }

    start(){
        if (gamestate === 0){
            player = new Player()
            player.getcount()
            form = new Form()
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        car1.addImage(carimg1);
        car2.addImage(carimg2);
        car3.addImage(carimg3);
        car4.addImage(carimg4);
        cars = [car1,car2,car3,car4];
        
    }

    play(){
        form.hide();
        textSize(30);
        text("GAME START",120,100);
        
        Player.getplayerinfo();
        if(allPlayers != undefined){
            background(198,198,198);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*6);
            //var displayPosition = 130
            var x =175, y;
            var index = 0;

            for(var plr in allPlayers){
                //displayPosition += 20
                x = x+200;
                y = displayHeight - allPlayers[plr].distance

                if (plr === "player" + player.index ){
                    //cars[index].shapeColor = "red"
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index].y;
                }
                /*else{
                    fill("black");
                }*/
               
                cars[index].x = x;
                cars[index].y = y;
                index++
                //textSize(15);
                //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
            }
        }
        if(keyDown(UP_ARROW) && player.index != null){
            player.distance += 50;
            player.update();
            //stroke("white");
            //text("GAME START",120,100);
        }
        if(player.distance>3600){
            gamestate = 2;
        }
        drawSprites();
    }

    end(){
        console.log("Game End");
    }

}