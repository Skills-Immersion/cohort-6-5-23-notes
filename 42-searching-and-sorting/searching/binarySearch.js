function compare(leftElement, rightElement, arr) {
    return leftElement - rightElement
}
// + greater
// - less
// 0 equal


//        s           m            e  
let x = [ 12, 15, 18, 23, 45, 56, 89];

// function binarySearch(arr, value, compare) {
//     // declare our start and end points
//     let start = 0;
//     let end = arr.length - 1;

//     //play the guessing game
//     while (start <= end) { // in bounds
//         // guess the middle point
//         let midpoint = Math.floor((start + end) / 2);
//         let compareValue = compare(arr[midpoint], value); // - 
//         // when our guess is right
//         if (compareValue === 0) return midpoint;
//         //[o,o,o,o,mid,x,x,x,x]
//         //             ^----- want to be the new start
//         else if (compareValue < 0) start = midpoint + 1;
//         //[o,o,o,o,mid,x,x,x,x]
//         //       ^----- want to be the new end
//         else end = midpoint - 1;
//     }
//     // value was not found
//     return -1;
// }

function binarySearch(arr, cb, value, lowerBound = 0, upperBound = arr.length - 1) {
    if (lowerBound > upperBound) {
        return -1; // value not found
    }

    let midpoint = Math.floor((lowerBound + upperBound) / 2);
    let compareValue = cb(arr[midpoint], value);

    if (compareValue === 0) {
        return midpoint; // value found
    } else if (compareValue > 0) {
        return binarySearch(arr, cb, value, lowerBound, midpoint - 1);
    } else {
        return binarySearch(arr, cb, value, midpoint + 1, upperBound);
    }
}

console.log(binarySearch(x, compare,18));