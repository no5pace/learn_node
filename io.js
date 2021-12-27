//IO stream
const ReadLine = require("readline");
const readLine = ReadLine.createInterface({input: process.stdin, output: process.stdout});

//setup
let runTotal = 0;
let arr = [null, null, null, null];
for (let i = 0; i < 3; i++) {
    arr[i] = Math.ceil(Math.random() * 10);
    runTotal += arr[i];
}
arr[3] = runTotal;

//alternative to what was shown in the tutorial, does the same without the question prompt
console.log(`Hey! What's ${arr[0]} + ${arr[1]} + ${arr[2]}?`);
readLine.on("line", (input) => {
    readLine.setPrompt(`With all due respect, ${input} is wrong, and you're stupid.  Try again.\n`);
    if (input.trim() == arr[3]) {
        console.log("Correct!");
        readLine.close();
    } else {
        readLine.prompt();
    }
});

//the below is what was shown in the tutorial, but to me it seems really braindead

/*
readLine.question(`Hey! What's ${arr[0]} + ${arr[1]} + ${arr[2]}?\n`, (input) => {
    if (input.trim() == arr[3]) {
        console.log("Correct!");
        readLine.close();
    }
    else {
        readLine.setPrompt(`With all due respect, ${input} is wrong, and you're stupid.  Try again`);
        readLine.prompt();
        readLine.on("line", (input) => {
            if (input.trim() == arr[3]) {
                console.log("Correct!");
                readLine.close;
            } else {
                readLine.prompt();
            }
        });
    }
});
*/
