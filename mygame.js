var createGame = require('voxel-hello-world')
var texturePath = require('programmerart-textures')('');
var game = createGame({
    generate: function(x, y, z) {
      return y === 1 ? 1 : 0
    },
    materials: [
        'blocks/snow.png',
        'blocks/water_flow.png',
        'blocks/water_still.png',
        'blocks/reeds.png',
        'blocks/quartz_block_chiseled.png',
        'blocks/portal.png',
        'blocks/obsidian.png',
        'blocks/diamond_block.png',
        'blocks/log_birch.png'
    ],
    texturePath: texturePath,
    materialFlatColor: false,
})
game.createBlock([2, 2, 2], 3),


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

