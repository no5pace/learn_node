//deletion
const FileSystem = require("fs");

//file deletion
FileSystem.readdir("./test", (error, files) => {
    if (error) {
        console.log(`Folder read failed: [ ${error} ]`);
    } else {
        console.log(`Folder read successful: ${files}`);
        for (let file of files) {
            FileSystem.unlink(`./test/${file}`, (error) => {
                if (error) {
                    console.log(`File deletion failed: ${error}`);
                } else {
                    console.log("File deletion successful");
                }
            });
        }
    }
});

//folder deletion (this runs before the files are deleted for some reason, dunno why)
FileSystem.rmdir("./test", (error) => {
    if (error) {
        console.log(`Folder deletion failed: ${error}`);
    } else {
        console.log("Folder deletion successful");
    }
});