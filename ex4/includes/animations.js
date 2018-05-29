/**
 * Pokemon HTML5 canvas game
 * @version 1.0.0
 * @author Panagiotis Vourtsis <vourtsis_pan@hotmail.com>
 */
window.onload = function() {
    "use strict";
    var submit=document.createElement("button");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var w = document.getElementById("canvas").offsetWidth;
    var h = document.getElementById("canvas").offsetHeight;
    var terrainImageLoaded = false,
      houseImageLoaded = false,
      pokeballImageLoaded = false,
      playerImageLoaded = false;
    var objectSizes = 20;
    var speed = 100;
    var modifier = 100;
    var score = 0;
  
    //terrain image
    var terrainImage = new Image();
    terrainImage.onload = function() {
      terrainImageLoaded = true;
      assetsLoaded();
    };
    
    function addForForm(score){
        var newWindow=document.createElement("LABEL");
        var newInput = document.createElement("INPUT");

        switch(score){
            case 1:{
              var newWindow1=document.createElement("LABEL");
              var newInput1 = document.createElement("INPUT");
                newInput1.type="name";
                newInput1.name="fullName";
                newInput1.maxLength="50";
                newWindow1.innerText="Name:";
                newWindow1.appendChild(newInput1);
                document.getElementById("myForm").appendChild(newWindow1);
                break;
            }
            case 2:{
              var newWindow2=document.createElement("LABEL");
              var newInput2 = document.createElement("INPUT");
                newInput2.type="password";
                newInput2.name="pass";
              
                newInput2.title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"; 
                newWindow2.innerText="Password:";
                newWindow2.appendChild(newInput2);
                document.getElementById("myForm").appendChild(newWindow2);
                break;

            }
            case 3:{
              var newWindow3=document.createElement("LABEL");
              var newInput3 = document.createElement("INPUT");
                newInput3.type="email";
                newInput3.name="mail";
                newWindow3.innerText="E-mail:";
                newWindow3.appendChild(newInput3);
                document.getElementById("myForm").appendChild(newWindow3);
                break;
            }
            case 4:{
              var newWindow4=document.createElement("LABEL");
              var newInput4= document.createElement("INPUT");
                newInput4.type="url";
                newInput4.name="website";
                newWindow4.innerText="Website:";
                newWindow4.appendChild(newInput4);
                document.getElementById("myForm").appendChild(newWindow4);

                break;
            }
            case 5:{
              var newWindow5=document.createElement("LABEL");
              var newInput5= document.createElement("INPUT");
                newInput5.type="tel";
                newInput5.name="phone";
                newWindow5.innerText="Phone:";
                newWindow5.appendChild(newInput5);
                document.getElementById("myForm").appendChild(newWindow5);
                break;
            }
            case 6:{
              var newWindow6=document.createElement("LABEL");
              var newInput6= document.createElement("INPUT");
                newInput6.type="number";
                newInput6.name="coffee";
                newWindow6.innerText="Number:";
                newWindow6.appendChild(newInput6);
                document.getElementById("myForm").appendChild(newWindow6);

                break;
            }
            case 7:{
              var newWindow7=document.createElement("LABEL");
              var newInput7= document.createElement("INPUT");
                newInput7.type="range";
                newInput7.name="temper";
                newWindow7.innerText="Tapper:";
                newWindow7.appendChild(newInput7);
                document.getElementById("myForm").appendChild(newWindow7);

                break;
            }
            case 8:{
              var newWindow8=document.createElement("LABEL");
              var newInput8 = document.createElement("INPUT");
              newInput8.type="text";
              newInput8.name="address";
              newWindow8.innerText="Adrress:";
              newWindow8.appendChild(newInput8);
              document.getElementById("myForm").appendChild(newWindow8);
              break;
            }


            case 9:{
              var newWindow9=document.createElement("LABEL");
              var newInput9 =document.createElement("INPUT");
                var H3=document.createElement("H3");
                var newWindow10=document.createElement("LABEL");
                var newInput10=document.createElement("INPUT");
                var newWindow11=document.createElement("LABEL");
                var newInput11=document.createElement("INPUT");
                H3.appendChild(document.createTextNode("Hobbies:"));
                document.getElementById("myForm").appendChild(H3);
                newInput9.type="checkbox";
                newInput9.name="interests[]";
                newInput9.value="Surf";
                newWindow9.innerText="Surf:";
                newWindow9.appendChild(newInput9);
                document.getElementById("myForm").appendChild(newWindow9);
                newInput10.type="checkbox";
                newInput10.name="interests[]";
                newInput10.value="Football";
                newWindow10.innerText="Football:";
                newWindow10.appendChild(newInput10);
                document.getElementById("myForm").appendChild(newWindow10);
                newInput11.type="checkbox";
                newInput11.name="interests[]";
                newInput11.value="Bascketball";
                newWindow11.innerText="Basketball:";
                newWindow11.appendChild(newInput11);
                document.getElementById("myForm").appendChild(newWindow11);
                break;
            }
            case 10:{
              var newWindow12=document.createElement("LABEL");
              var newInput12 = document.createElement("INPUT");
              newInput12.type="radio";
              newInput12.name="gender";
              newWindow12.innerText="Gender:";
              newWindow12.appendChild(newInput12);
              document.getElementById("myForm").appendChild(newWindow12);
              break;
            }
            case 11:{
              var newWindow13=document.createElement("LABEL");
              newWindow13.innerText="Age:";
              var selectList = document.createElement("select");
                selectList.name="age";
              for (var i = 5; i < 60; i++) {
                var option = document.createElement("option");
                option.value =i;
                option.appendChild(document.createTextNode(i));
                selectList.appendChild(option);
              }
            newWindow13.appendChild(selectList);
            document.getElementById("myForm").appendChild(newWindow13);
            break;
          }
          case 12:{
            submit.type="submit";
            submit.value="Submit";
            submit.innerText="Submit";
            document.getElementById("myForm").appendChild(submit);
            break;
          }
        }
        
      }

    terrainImage.src = "https://www.dropbox.com/s/5e38o3e5mwej7gi/pokemon_terrain.jpg?raw=1";
  
    //house image
    var houseImage = new Image();
    houseImage.onload = function() {
      houseImageLoaded = true;
      assetsLoaded();
    };
    houseImage.src = "https://www.dropbox.com/s/uagq684b5jbh5t5/house.png?raw=1";
  
    //main sound
    var mainTheme = new Audio("https://www.dropbox.com/s/uru3oz9mxzpt5gx/main-theme.mp3?raw=1");
    mainTheme.loop = true;
    mainTheme.volume = 0.5;
    mainTheme.play();
  
    //pokeball-selection
    var pokePick = new Audio("https://www.dropbox.com/s/weemcqn1wlxelll/pickup.mp3?raw=1");
    pokePick.volume = 0.8;
  
    //player image
    var playerImage = new Image();
    playerImage.onload = function() {
      pokeballImageLoaded = true;
      assetsLoaded();
    };
    playerImage.src = "https://www.dropbox.com/s/wm91kb7t7j76d0d/player.png?raw=1";
  
    //pokeball image
    var pokeballImage = new Image();
    pokeballImage.onload = function() {
      playerImageLoaded = true;
      assetsLoaded();
    };
    pokeballImage.src = "https://www.dropbox.com/s/biqj124larffqk9/pokeball.png?raw=1";
  
    /**
     * It will hold all the pockeball data like x and y axis position
     * sprite position and item distance is for determine which item is selected from the sprite - @todo future use for knowing on score which one player picked
     * Also hold the generate position function that generates random positions if there is no collision.
     * @Object
     * @name pokeball
     */
    var pokeball = {
      x: 0,
      y: 0,
      spritePosition: 0,
      spriteItemDistance: 33
    };
    pokeball.generatePosition = function() {
      do {
        pokeball.x = Math.floor(Math.random() * 20) + 1;
        pokeball.y = Math.floor(Math.random() * 16) + 4;
      } while (check_collision(pokeball.x, pokeball.y));
  
      pokeball.spritePosition = Math.floor(Math.random() * 4) + 0; // get position from 0-4
    };
  
    /**
     * Holds all the player's info like x and y axis position, his current direction (facing).
     * I have also incuded an object to hold the sprite position of each movement so i can call them
     * I also included the move function in order to move the player - all the functionality for the movement is in there
     * @Object
     * @name pokeball
     */
    var player = {
      x: Math.round((w / 2) / objectSizes),
      y: Math.round((h / 2) / objectSizes),
      currentDirection: "stand",
      direction: {
        "stand": {
          x: 0,
          y: 0
        },
        "down-1": {
          x: 17,
          y: 0
        },
        "down-2": {
          x: 34,
          y: 0
        },
        "up-1": {
          x: 125,
          y: 0
        },
        "up-2": {
          x: 142,
          y: 0
        },
        "left-1": {
          x: 69,
          y: 0
        },
        "left-2": {
          x: 87,
          y: 0
        },
        "right-1": {
          x: 160,
          y: 0
        },
        "right-2": {
          x: 178,
          y: 0
        }
      }
    };
    player.move = function(direction) {
  
      /**
       * A temporary object to hold the current x, y so if there is a collision with the new coordinates to fallback here
       */
      var hold_player = {
        x: player.x,
        y: player.y
      };
  
      /**
       * Decide here the direction of the user and do the neccessary changes on the directions
       */
      switch (direction) {
        case "left":
          player.x -= speed / modifier;
          if (player.currentDirection == "stand") {
            player.currentDirection = "left-1";
          } else if (player.currentDirection == "left-1") {
            player.currentDirection = "left-2";
          } else if (player.currentDirection == "left-2") {
            player.currentDirection = "left-1";
          } else {
            player.currentDirection = "left-1";
          }
          break;
        case "right":
          player.x += speed / modifier;
          if (player.currentDirection == "stand") {
            player.currentDirection = "right-1";
          } else if (player.currentDirection == "right-1") {
            player.currentDirection = "right-2";
          } else if (player.currentDirection == "right-2") {
            player.currentDirection = "right-1";
          } else {
            player.currentDirection = "right-1";
          }
          break;
        case "up":
          player.y -= speed / modifier;
  
          if (player.currentDirection == "stand") {
            player.currentDirection = "up-1";
          } else if (player.currentDirection == "up-1") {
            player.currentDirection = "up-2";
          } else if (player.currentDirection == "up-2") {
            player.currentDirection = "up-1";
          } else {
            player.currentDirection = "up-1";
          }
  
          break;
        case "down":
          player.y += speed / modifier;
  
          if (player.currentDirection == "stand") {
            player.currentDirection = "down-1";
          } else if (player.currentDirection == "down-1") {
            player.currentDirection = "down-2";
          } else if (player.currentDirection == "down-2") {
            player.currentDirection = "down-1";
          } else {
            player.currentDirection = "down-1";
          }
  
          break;
      }
  
      /**
       * if there is a collision just fallback to the temp object i build before while not change back the direction so we can have a movement
       */
      if (check_collision(player.x, player.y)) {
        player.x = hold_player.x;
        player.y = hold_player.y;
      }
  
      /**
       * If player finds the coordinates of pokeball the generate new one, play the sound and update the score
       */
      if (player.x == pokeball.x && player.y == pokeball.y) { // found a pokeball !! create a new one
        console.log("found a pokeball of " + pokeball.spritePosition + "! Bravo! ");
        pokePick.pause();
        pokePick.currentTime = 0;
        pokePick.play();
        score += 1;
        pokeball.generatePosition();
        addForForm(score);
      }
  
      update();
    };
  
    /**
     * Handle all the updates of the canvas and creates the objects
     * @function
     * @name update
     */
    function update() {
      ctx.drawImage(terrainImage, 0, 0);
      ctx.drawImage(houseImage, 80, 60);
  
      //Genboard
      board();
  
      //pokeball
      ctx.drawImage(pokeballImage, pokeball.spritePosition * pokeball.spriteItemDistance, 0, objectSizes, objectSizes, pokeball.x * objectSizes, pokeball.y * objectSizes, objectSizes, objectSizes);
  
      //player
      console.log("y:", (player.y * objectSizes) / objectSizes);
      console.log("x", (player.x * objectSizes) / objectSizes);
      ctx.drawImage(playerImage, player.direction[player.currentDirection].x, player.direction[player.currentDirection].y, objectSizes - 2, objectSizes, player.x * objectSizes, player.y * objectSizes, objectSizes, objectSizes);
    }
  
    /**
     * Our function that decides if there is a collision on the objects or not
     * @function
     * @name check_collision
     * @param {Integer} x - The x axis
     * @param {Integer} y - The y axis
     */
    function check_collision(x, y) {
      var foundCollision = false;
  
      if (((x > 3 && x < 9) && y == 6) || ((x > 4 && x < 9) && (y == 5 || y == 4 || y == 3))) { //collision on house
        console.log("on house");
        foundCollision = true;
      }
  
      if ((x < 1 || x > 20) ||
        (y < 2 || y > 20) ||
        ((y > 0 && y < 4) && (x == 20 || x == 19)) || //right corner
        ((y > 0 && y < 4) && (x == 2 || x == 3)) || //left corner
        ((y > 18) && (x == 2 || x == 3)) || //left corner
        ((x > 17) && (y == 19 || y == 20)) || //left corner
        ((x > 19) && (y == 17 || y == 18)) //left corner 2
      ) {
        console.log("lost on the woods");
        foundCollision = true
      }
  
      return foundCollision;
    }
  
    /**
     * Here we are creating our board on the bottom right with our score
     * @todo maybe some mute button for the future?
     * @function
     * @name board
     */
    function board() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(w - 100, h - 70, 100, 70);
  
      ctx.font = "18px Arial";
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.fillText("You Found", w - 93, h - 45);
  
      ctx.font = "14px Arial";
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.fillText(score + " poketballs", w - 85, h - 25);
    }
  
    /**
     * Decide here if all the assets are ready to start updating
     * @function
     * @name assetsLoaded
     */
    function assetsLoaded() {
      if (terrainImageLoaded == true && houseImageLoaded == true && pokeballImageLoaded == true && playerImageLoaded == true) {
        pokeball.generatePosition();
        update();
      }
    }
  
    /**
     * Assign of the arrow keys to call the player move
     */
    document.onkeydown = function(e) {
      e = e || window.event;
  
      if (e.keyCode == "37") player.move("left");
      else if (e.keyCode == "38") player.move("up");
      else if (e.keyCode == "39") player.move("right");
      else if (e.keyCode == "40") player.move("down");
    };
  };

  
function checkForm(form)
{
  if(form.fullName.value == "") {
    err=document.createElement("H3");
    err.innerText="Error: Username cannot be blank!";
    form.appendChild(err);
    form.fullName.focus();
    return false;
  }
  re = /\s/;
  if(re.test(form.fullName.value)) {
    err=document.createElement("H3");
    err.innerText="Error: Username cnnot contain space";
    form.appendChild(err);
    return false;
  }
  re = /a/;
  re1= /d/;
  if((!re.test(form.fullName.value))||(!re1.test(form.fullName.value))) {
    err=document.createElement("H3");
    err.innerText="Error: Username must contain a and d";
    form.appendChild(err);
    return false;
  }
  if(form.pass.value != "" ) {
    if(form.pass.value.length < 6) {
      err=document.createElement("H3");
    err.innerText="Error: Password must contain at least six characters!";
    form.appendChild(err);
      return false;
    }
    if(form.pass.value == form.fullName.value) {
      err=document.createElement("H3");
    err.innerText="Error: Password must be different from Username!";
    form.appendChild(err);
      return false;
    }
    re = /[0-9]/;
    if(!re.test(form.pass.value)) {
      err=document.createElement("H3");
      err.innerText="Error: password must contain at least one number (0-9)!";
      form.appendChild(err);
      return false;
    }
    re = /[a-z]/;
    if(!re.test(form.pass.value)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      err=document.createElement("H3");
      err.innerText="Error: password must contain at least one lowercase letter (a-z)!"
      form.appendChild(err);
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(form.pass.value)) {
      err=document.createElement("H3");
      err.innerText="Error: password must contain at least one uppercase letter (A-Z)!";
      form.appendChild(err);
     return false;
    }
  } else {
    err=document.createElement("H3");
    err.innerText="Error: Please check that you've entered and confirmed your password!";
    form.appendChild(err);   
    return false;
  }
  window.open("../pokemon-battle/index.html");
  return true;
}

