var state = {
    gameOver: false,
    score: 0,
    wizard: {
        x: 100,
        y: 200,
        width: 82,
        height: 100,
        speed: 7,
        gravity: 2,
    },
    // currently pressed keys from user
    keys: {},
    bugStats: {
        nextBugCreation: 0,
        maxBugCreationInterval: 1500,
        speed: 3,
        width: 50,
        height: 50
    },
    fireballStats: {
        height: 40,
        width: 40,
    }
};
