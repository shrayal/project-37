class Question {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
      this.title = createElement('h2')
    }
  hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
  }
    display(){
      
      this.title.html("My Quiz Game");
      this.title.position(130, 0);
      TextSize
      Text("question-What is the word that startes and ends with 'e' and has one letter",200,100)
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this. input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.index=playerCount
        player.update()
        player.updateCount(playerCount);
        
        this.greeting.html("Hello " + name )
        this.greeting.position(130, 160)
      });
  
    }
  }
  