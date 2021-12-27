//file editing
const FileSystem = require("fs");

//rename
FileSystem.rename("./test/test.txt", "./test/temp.txt", (error) => {
    if (error) {
        console.log(`File rename failed: ${error}`);
    } else {
        console.log("File rename successful");
    }
});

FileSystem.appendFile("./test/temp.txt", "... It seems that I'm all alone", (error) => {
    if (error) {
        console.log(`Append failed: ${error}`);
    } else {
        console.log("Append successful");
        FileSystem.readFile("./test/temp.txt", "utf8", (error, file) => {
            if (error) {
                console.log(`Read failed: ${error}`);
            } else {
                console.log(`Contents: ${file}`);
            }
        });
    }
});