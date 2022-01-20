class Form {

    constructor() {
     
        this.buttonA = createButton('Character A');
        this.buttonB = createButton('Character B');
        this.buttonC = createButton('Character C');
        this.buttonB = createButton('Character D');
      
      this.title = createElement('h2');
      this.info = createElement('Select character');
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
  
      image(backgroundpg1, 0,-displayHeight*4,displayWidth, displayHeight*5);
  
      this.title.html("SPACE JAM !");
      this.title.position(displayWidth/2 - 50, 0);
  
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
        
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        
        game.update(0);
      });
  
    }
  }
  