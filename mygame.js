var createGame = require('voxel-hello-world')
var texturePath = require('programmerart-textures')('');
var deck = require('deck')
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
var Tree = require('./treemodule.js')

var tree = Tree(game)


function bunch () {
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
    count++
}

var count = 0

var clearInterval = game.setInterval(function() {
/*
    if (count % 5 == 0 && count <= 25){
        tree.grow
    }
    else if (count % 40 == 0 && count >= 25){
        tree.grow
    }

    bunch()
*/
    tree.grow()
}, 1000)


window.addEventListener("keydown", pausetree, false);

function pausetree(p) {
        if (p.keyCode == "80") {
                console.log("eXistenZ IS PAUSED!");
                clearInterval()          
        }
}

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

