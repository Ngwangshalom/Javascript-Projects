const rooms = {
    start: { description: "You are in a dark room. There is a door to the north.", north: "hallway" },
    hallway: { description: "You are in a hallway. There are doors to the south and east.", south: "start", east: "treasureRoom" },
    treasureRoom: { description: "You found the treasure room! You win!", north: "hallway" }
};

let currentRoom = "start";


function play() {
    while (true) {
        console.log(rooms[currentRoom].description);
        const action = prompt("What do you want to do?");
        if (action === "quit") {
            console.log("Thanks for playing!");
            break;
        } else if (rooms[currentRoom][action]) {
            currentRoom = rooms[currentRoom][action];
        } else {
            console.log("You can't do that.");
        }
    }
}

play();
