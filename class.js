//class extension with eventEmitter
const EventEmitter = require("events");

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

let person = new Person("Isaac");

person.on("rename", (newName) => {person.name = "Sally"});
person.on("declare", () => {console.log(person.name)});

person.emit("declare");
person.emit("rename");
person.emit("declare");