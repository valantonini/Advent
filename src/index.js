import {GameLoop, init, Sprite, initKeys, keyPressed} from 'kontra';

const {canvas} = init();

initKeys();

const sprite = Sprite({
    x: 100,        // starting x,y position of the sprite
    y: 80,
    color: 'red',  // fill color of the sprite rectangle
    width: 20,     // width and height of the sprite rectangle
    height: 40,
    //dx: 2          // move the sprite 2px to the right every frame
});

let loop = GameLoop({  // create the main game loop
    update: function () { // update the game state


        const playerMovementSpeed = 4;
        if (keyPressed('a')) {
            if (sprite.x - playerMovementSpeed >= 0) {
                sprite.x -= playerMovementSpeed;
            }
        }

        if (keyPressed('d')) {
            if ((sprite.x + sprite.width) + playerMovementSpeed <= canvas.width) {
                sprite.x += playerMovementSpeed;
            }
        }

        if (keyPressed('w')) {
            if (sprite.y - playerMovementSpeed >= 0) {
                sprite.y -= playerMovementSpeed;
            }
        }

        if (keyPressed('s')) {
            if ((sprite.y + sprite.height) + playerMovementSpeed <= canvas.height + 2) {
                sprite.y += playerMovementSpeed;
            }
        }

        sprite.update();
    },
    render: function () { // render the game state
        sprite.render();
    }
});

loop.start();    // start the game
