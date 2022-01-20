class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player2 = createSprite(400,85,50,50); player2opp = createSprite(880,85,50,50);
    player1 = createSprite(600,270,50,50); player1opp = createSprite(680,270,50,50);

    
    player3=createSprite(380,465,50,50); player3opp=createSprite(880,465,50,50)
    player1.shapeColor="black"
    player2.shapeColor="red"
    player3.shapeColor="green"

    player1opp.shapeColor="pink"
    player2opp.shapeColor="blue"
    player3opp.shapeColor="yellow"
  
    

    
    
    
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    line(displayWidth/2,0, displayWidth/2, displayHeight)
    text(mouseX+"  "+mouseY,mouseX,mouseY)
    drawSprites();
    textSize(25);
    fill("white")
    text("1",player1.x,player1.y)
    text("2",player2.x,player2.y)
    text("3",player3.x,player3.y)
    text("1opp",player1opp.x,player1opp.y)
    text("2opp",player2opp.x,player2opp.y)
    text("3opp",player3opp.x,player3opp.y)
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
