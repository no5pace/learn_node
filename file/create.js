//folder creation
const FileSystem = require("fs");

FileSystem.mkdir("test", (error) => {
    if (error) {
        console.log(`Folder creation failed: ${error}`);
    } else {
        console.log("Folder creation successful");
    }
});

//file creation
FileSystem.writeFile("./test/test.txt", "Can anyone hear me?", (error) => {
    if (error) {
        console.log(`File creation failed: ${error}`);
    } else {
        console.log(`File creation successful`);
        FileSystem.readFile("./test/test.txt", "utf8", (error, file) => {
            if (error) {
                console.log(`Read failed: ${error}`);
            } else {
                console.log(`Contents: ${file}`);
            }
        });
    }
})

//create second file
FileSystem.writeFile("./test/misc.txt", "misc", (error) => {
    if (error) {
        console.log(`File creation failed: ${error}`);
    } else {
        console.log(`File creation successful`);
    }
})