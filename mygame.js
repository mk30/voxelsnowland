var createGame = require('voxel-hello-world')
var texturePath = require('programmerart-textures')('');
var game = createGame({
    generate: function(x, y, z) {
      return y === 1 ? 1 : 0
    },
    materials: [
        'blocks/snow.png',
        'blocks/portal.png',
        'blocks/log_birch.png'
    ],
    texturePath: texturePath,
    materialFlatColor: false,
})
//game.createBlock([2, 2, 2], 3),
/*
var x = 2
var y = 2
var z = 2
var count = 0

var clearInterval = game.setInterval(function() {
    if (count < 3){
        game.setBlock([2, y, 2], 2) 
        y++
        count++
    }
    else {
        game.setBlock([3, y, 2], 3)
        game.setBlock([3, y, 3], 3)
        game.setBlock([2, y, 3], 3)
        y++
        count++
    }
}, 2000)
*/

var deck = require('deck')
var count = 0
game.setBlock([3, 3, 3], 3)
var blocks = [[3, 3, 3]]
var y = 2

var clearInterval = game.setInterval(function() {
    if (count < 3){
        game.setBlock([3, y, 3], 3) 
        y++
        count++
    }
    else {
        var dy = deck.pick({
            '-1' : 1,
            0 : 3,
            1 : 4, 
        })
        var n = blocks.length 
        var ran = n - Math.floor(Math.random() * Math.min(n, 9)) - 1
        var prevblockx = blocks[ran][0]
        var prevblocky = blocks[ran][1]
        var prevblockz = blocks[ran][2]
        var nextblockx = prevblockx + Math.floor(Math.random() *3) - 1
        var nextblocky = prevblocky + parseInt(dy)
        console.log(prevblocky)
        var nextblockz = prevblockz + Math.floor(Math.random() *3) - 1
        blocks.push([nextblockx, nextblocky, nextblockz])
        game.setBlock(blocks[count + 1], 2)
        count++
    }
}, 1000)



window.game = game
var snow = require('voxel-snow')({
  game: game,
  count: 2000,
  size: 10
});



var critterCreator = require('voxel-critter')(game)
critterCreator('./snowman.png', function(err, critter) {
  // Start the critter near the player
  critter.position.clone(game.controls.target().avatar.position);
  critter.position.z += 10;
  critter.position.y += 10;

window.addEventListener("keydown", snowmanoppmove, false);

function snowmanoppmove(j) {
        if (j.keyCode == "74") {
                console.log("the 'j' key is pressed.");
                  // Move forward
                  critter.move(0, 0, -0.02);
        }
}
window.addEventListener("keydown", snowmanmove, false);

function snowmanmove(k) {
        if (k.keyCode == "75") {
                console.log("the 'k' key is pressed.");
                  // Move forward
                  critter.move(0, 0, 0.02);
        }
}

window.addEventListener("keydown", snowmanjump, false);

function snowmanjump(l) {
        if (l.keyCode == "76") {
                console.log("the 'l' key is pressed.");
                          // Jump!
                critter.jump();
        }
}
});

critterCreator('./voxelcat.png', function(err, critter) {
  // Start the critter near the player
  critter.position.clone(game.controls.target().avatar.position);
  critter.position.z += 15;
  critter.position.y += 15;
});

game.on('tick', function() {
  snow.tick();
});

