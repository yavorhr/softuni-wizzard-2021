function gameStateFactory() {
    let state = {
        gameOver: false,
        wizard: {
            x: 100,
            y: 200,
            width: 82,
            height: 100,
            speed: 7,
        },
        // currently pressed keys from user
        keys: {},
    };

    return function () {
        return state;
    };
}