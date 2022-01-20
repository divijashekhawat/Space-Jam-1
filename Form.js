class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.info = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.info.hide()
  }

  display(){

    //image(backgroundpg1, 0,0,displayWidth, 500);

    this.title.html("SpaceJam!");
    this.title.position(displayWidth/2 - 30, 0);
    this.title.class("spaceJam")
    this.info.html("Enter Name To Proceed");
    this.info.position(displayWidth/2 - 50,400);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.info.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.start.show()
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      database.ref("ball").set({
       
        x: 0,
        y:0
      });
      database.ref("players/player1").set({
       name:"",
        x: 0,
        y:0
      });
      database.ref("players/player2").set({
        name:"",

        x: 0,
        y:0
      });
      database.ref("players/player3").set({
        name:"",

        x: 0,
        y:0
      });
      database.ref("players/player4").set({
        name:"",

        x: 0,
        y:0
      });
    });

  }
}
