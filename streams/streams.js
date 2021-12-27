//establishing a read stream for sample.txt
const FileSystem = require("fs");
const readStream = FileSystem.createReadStream("./sample.txt", "utf8");

//creating the sample2.txt file and establishing a write stream for it
FileSystem.unlink("./sample2.txt", (error) => {
	if (error) {
		console.log(`sample2.txt not detected, deletion failed: ${error}`);
	} else {
		console.log(`sample2.txt deleted`);		
	}
});
FileSystem.writeFile("./sample2.txt", "", (error) => {
	if (error) {
		console.log(`sample2.txt creation failed: ${error}`);
	} else {
		console.log(`sample2.txt successfully created`);
	}
});
const writeStream = FileSystem.createWriteStream("./sample2.txt");

//reading the 1 MB sample.txt and copying it to sample2.txt
//using pipes (shortcut)
readStream.pipe(writeStream);

//using event emitters (longer way)
//readStream.on("data", (chunk) => {
//	console.log(chunk);
//	writeStream.write(chunk);
//});
