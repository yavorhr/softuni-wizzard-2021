function gameStateFactory() {
    let state = {
        gameOver: false,
        wizard: {
            x: 100,
            y: 200,
            speed: 5,
        },
        // currently pressed keys from user
        keys: {},
        config: {

        }
    };

    return function () {
        return state;
    };
}