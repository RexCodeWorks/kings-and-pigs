window.addEventListener('keydown', (event) => {
    if (player.preventInput) return
    switch (event.key) {
        case 'ArrowUp':

            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];

                if (player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width &&
                    player.hitbox.position.x >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <= door.position.y + door.height) {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    player.preventInput = true;
                    player.switchSprite('enterDoor');
                    door.play();
                    return;
                }
            }
            if (player.velocity.y === 0) {
                player.velocity.y = -23;
            }
            break;
        case 'ArrowLeft':
            // move player to the left
            keys.a.pressed = true;
            break;
        case 'ArrowRight':
            // move player to the right
            keys.d.pressed = true;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowLeft':
            keys.a.pressed = false;
            break;
        case 'ArrowRight':
            keys.d.pressed = false;
            break;

    }
});