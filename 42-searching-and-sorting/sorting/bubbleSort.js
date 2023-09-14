function compare(leftElement, rightElement) {
    return leftElement - rightElement;
} 

// + its greater
// - its less than
// 0 its equal

function bubbleSort(arr, compare) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            // compare left el and right el 
            if ( compare(arr[i], arr[i + 1]) > 0 ) {
                // swapping 
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true
            }
        }
    } while (swapped);
    return arr
}

console.log(bubbleSort([8,1,4,3,2,7,6], compare));