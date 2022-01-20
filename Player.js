class Player {
  constructor(){
    this.index = null;    
    this.name = null;
    this.x = 0;
    this.y = 0;
    this.ballX=500;
    this.ballY=500;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      x:this.x,
      y:this.y
      
    });
  }

  updateBall(){
    
    database.ref("ball").set({
      
      x:this.ballX,
      y:this.ballY
      
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  static getBallInfo(){
    var playerInfoRef = database.ref('ball');
    playerInfoRef.on("value",(data)=>{
      ballInfo = data.val();
    })
  }

  getCarsAtEnd() {
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      CarsAtEnd:rank
    })
  }
}
