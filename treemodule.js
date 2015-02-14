module.exports = Tree;

function Tree (game) { 
    if (!(this instanceof Tree)) return new Tree(game); 
    this.x = 3; 
    this.y = 2; 
    this.z = 3; 
    this.game = game;
    this.blocks = [[this.x, this.y + 1, this.z]]

} 

Tree.prototype.grow = function () { 
    this.game.setBlock([this.x, this.y, this.z], 3)  
    this.y++ 
    var game = this.game
    this.blocks.forEach(function(entry){ 
        game.setBlock(entry, 0) 
    }) 
    this.blocks.forEach(function(entry){ 
        entry[1]++ 
    }) 
}

