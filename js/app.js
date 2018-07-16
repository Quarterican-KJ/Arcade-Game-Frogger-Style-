// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y + 55;
    this.speed = speed;
};
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
this.x = this.x + this.speed * dt;
    //if enemy has not passed boundary
    if(this.x >= 555) {
      //reset pos to start
      this.randomSpeed();
      this.x = -100;
        console.log('reset', this);
    }
    //collision detection and responce
    let enemyLMax = this.x - 70;
    let enemyRMax = this.x + 70;
    let enemyBMax = this.y + 60;
    let enemyTMax = this.y - 60;

    if (player.x > enemyLMax && player.x < enemyRMax && player.y < enemyBMax && player.y > enemyTMax) {
      player.resetPos();
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.randomSpeed = function() {
 var someSpeed = Math.floor(Math.random() * 4 + 1);
 this.speed = 60 * someSpeed;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//Hero class

class Hero {
  constructor() {
    this.sprite = 'images/char-horn-girl.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 5) - 20;
    this.x = this.startX;
    this.y = this.startY;
  }
    //methods
    resetPos() {
      this.step = 101;
      this.jump = 83;
      this.x = this.startX;
      this.y = this.startY;
    }
      //render
      //    draw player sprite on x and y coords
        render() {
          ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
      }
      /**  input handler
        *  update player x and y according to input
        *  @param {string} input - Direction to travel
        */
      handleInput(input) {
          switch(input) {
              case 'left':
                if (this.x > 0) {
                  this.x -= this.step;
                }
                  break;
              case 'right':
                if (this.x < this.step * 4) {
                  this.x += this.step;
                }
                  break;
              case 'up':
                if (this.y > this.jump) {
                  this.y -= this.jump;
                }
                else{
                  this.resetPos();
                  alert('YOU WIN DA GAME!');
                }
                  break;
              case 'down':
                if (this.y < this.jump * 4) {
                  this.y += this.jump;
                }
                  break;
          }
      }
}

//newHero objects
//init allEnemies Array
//for each enemy create and push new enemy object into above Array
const player = new Hero();
const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 250);
const bug3 = new Enemy((-101*2.5), 83, 275);
const bug4 = new Enemy(-101, 166, 300)
const allEnemies = [];
allEnemies.push(bug1,bug2,bug3,bug4);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
