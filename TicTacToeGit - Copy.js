var playerTurn = 0;
var NUM_COLS = 3;
var NUM_ROWS = 3;
var SYMBOLS = ["X","O"];
var tiles = [];

var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.size = width/NUM_COLS;
    this.label = "";
};
Tile.prototype.draw = function() {
    //background(255, 255, 255);
    fill(214, 247, 202,0);
    noStroke();
    rect(this.x, this.y, this.size, this.size, 10);
    textSize(100);
    textAlign(CENTER, CENTER);
    if(this.label !== SYMBOLS[playerTurn]){
    fill(random(255), 0, 0);
    } else {   
    fill(0,random(255),0);
    }
    text(this.label, this.x+this.size/2, this.y+this.size/2);
   //tiles.add(this);
};

Tile.prototype.empty = function() {
    return this.label === "";
};

Tile.prototype.onClick = function() {
    // If the tile is not empty, exit the function

    if(!this.empty()) {
        return;
    }
        // Put the player's symbol on the tile
    this.label = SYMBOLS[playerTurn];
    
    // Change the turn
            playerTurn++;

    if(playerTurn>= SYMBOLS.length) {
        playerTurn=0;
    }
};

Tile.prototype.handleMouseClick = function(x, y) {
    
    if( x >= this.x && x <= this.x + this.size &&
        y >= this.y && y <= this.y + this.size)
        
    {
        this.onClick();
    }    
};

for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * (width/NUM_COLS-1), j * (height/NUM_ROWS-1)));
    }
}

var drawTiles = function() {
    for (var i in tiles) {
        tiles[i].draw();
    }
};

mouseReleased = function() {
    for (var i in tiles) {
        tiles[i].handleMouseClick(mouseX, mouseY);
    }
};

draw = function() {
    background(255, 255, 255);
    stroke(0,0,random(255),random(200,255));
    strokeWeight(10);
    line(25,height/NUM_COLS,width - 25,height/NUM_COLS);
    line(25,height/NUM_COLS*2,width - 25,height/NUM_COLS*2);
    line(width/NUM_ROWS,25,width/NUM_ROWS,height-25);
    line(width/NUM_ROWS*2,25,width/NUM_ROWS*2,height-25);
    
    drawTiles();
};
