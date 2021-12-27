//declaraton and association of module functions with variables
const genArr = (xMax, yMax, indNumMax) => {
    let arr = []
    let arrX = Math.ceil(Math.random() * xMax);
    for (let i = 0; i < arrX; i++) {
        let arrY = Math.ceil(Math.random() * yMax);
        arr.push([])
        for (let v = 0; v < arrY; v++) {
            let arrZ = Math.ceil(Math.random() * indNumMax);
            arr[i].push(arrZ) 
        }
    }
    return arr;
}

const addArr = (arr) => {
    let output = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let v = 0; v < arr[i].length; v++) {
            output += arr[i][v];
        }
    }
    return output;
}

//exporting functions as variables in an object literal
module.exports = {genArr, addArr};