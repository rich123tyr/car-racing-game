class Player{
    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;

    }

    getcount(){
        var playercountref = database.ref("playercount");
        playercountref.on("value",function(data){
            playercount = data.val()
            // sketch.js playercount
            
        }, function(){
            console.log("Error in reading playercount from databse");
        })
    }

    updatecount(count){
        database.ref("/").update({
            playercount: count,
            //firebase playercount
        })
     }

     update(){
         var playerindex = "players/player"+this.index;
         database.ref(playerindex).set({name:this.name , distance:this.distance});
     }

     static getplayerinfo(){
        var playerInfoRef = database.ref("players")
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
     }

     static removeplayers(){
         var removePlayers = database.ref("players")
        removePlayers.set({});
     }
}