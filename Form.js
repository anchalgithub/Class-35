class Form {
    constructor(){
    
    }
    
    display(){
    var title = createElement("h2");
    title.html("Car Racing Game");
    title.position(120,0);
    
    var input = createInput ("Name");
    var button = createButton ("Press");
    input.position(120,160);
    button.position(250,200);
    
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        PlayerCount += 1; 
        Player.update(Name);
        Player.updateCount(PlayerCount);
        var greeting = createElement ("h3");
        greeting.html("Hi"+ Name);
        greeting.position(130,160);
    
    });
    
    
    
    }
    }