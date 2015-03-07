module.exports = Tree;
var deck = require('deck')

function Tree (game) { 
    if (!(this instanceof Tree)) return new Tree(game); 
    this.x = 3; 
    this.y = 2; 
    this.z = 3; 
    this.game = game;
    this.blocks = [[this.x, this.y + 1, this.z]]
    this.count = 0;

} 


Tree.prototype.up = function () { 
    var game = this.game
    game.setBlock([this.x, this.y, this.z], 3)  
    this.y++ 
    this.blocks.forEach(function(entry){ 
        game.setBlock(entry, 0) 
        entry[1]++ 
    }) 
}

Tree.prototype.grow = function () {
    if (this.count % 5 == 0 && this.count <= 25){
        this.up()
    }
    else if (this.count % 40 == 0 && this.count >= 25){
        this.up()
    }
    this.bunch()
}

Tree.prototype.bunch = function () {
    var game = this.game
    var blocks = this.blocks
    var n = blocks.length 
    var ran = n - Math.floor(Math.random() * Math.min(n, 9)) - 1
    var dy = deck.pick({
        '-1' : 1,
        0 : 4,
        1 : 2, 
    })
    var prevblockx = blocks[ran][0]
    var prevblocky = blocks[ran][1]
    var prevblockz = blocks[ran][2]
    var nextblockx = prevblockx + Math.floor(Math.random() *3) - 1
    var nextblocky = prevblocky + parseInt(dy)
    var nextblockz = prevblockz + Math.floor(Math.random() *3) - 1
    blocks.push([nextblockx, nextblocky, nextblockz])
    blocks.forEach(function(entry){
        game.setBlock(entry, 2)
    })
    this.count++
}
