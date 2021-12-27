//events
const EventEmitter = require("events");

//establish an event emitter + miscEvent event
const eventEmitter = new EventEmitter();
eventEmitter.on("addEvent", (num1, num2) => {
    console.log("Add Event Fired: " + num1 + " + " + num2 + " = " + (num1 + num2));
})

//fire miscEvent
eventEmitter.emit("addEvent", 9283401, 32948032);
