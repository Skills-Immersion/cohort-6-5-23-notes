/*time complexity  
                 p   
                [5,2,1,8,4,7,6,3]
                       5              5 is in the right spot idx of 4
              p                       do the same on the left side
              3,2,1,4      7,6,8
                3                     3 is in the right spot idx of 2
            p      
            1,2   4
            1                         1 is in the right spot idx of 0  
              2 
                          p
                          7,6,8      time for the right side
                          7          7 is in the right spot idx of 6
                        6   8 
            1 , 2 ,3 ,4 ,5 ,6 ,7 ,8
*/ 

function compare(a, b) {
    return a - b
}
// + a is greater
// - a is less
// 0 both equal

function quickSort(compare, arr, lowerIndex = 0, upperIndex = arr.length - 1) {
    // base case
    if ( lowerIndex < upperIndex ) {
        // recursive case
        // call partition to get pivot index
        const index = partition(compare, arr, lowerIndex, upperIndex);
        // sort to the left
        quickSort(compare, arr, lowerIndex, index - 1);
        // sort to the right
        quickSort(compare, arr, index + 1, upperIndex)
    }
    return arr;
}

//  p i
// [6,9,1,2,5,7,6,8]


// 3,2,1,4   5  7,6,8
function partition(compare, arr, lowerIndex = 0, upperIndex = arr.length - 1) {
    // choose the pivot value (does affect the time complexity)
    let pivotValue = arr[lowerIndex];
    // keep track of how many things are less than the pivot value
    let partitionIndex = lowerIndex + 1;
    // search thru the subsection of the arr
    for (let index = lowerIndex + 1; index <= upperIndex; index++) {
        const comparison = compare(arr[index], pivotValue);
        if ( comparison < 0 ) { //element must be left of the pivotValue
            // swap what we are looking at with the partitionIndex, and then increment partionIndex
            [arr[index], arr[partitionIndex]] = [arr[partitionIndex], arr[index]]; // swap
            partitionIndex++;
        }
    }
    // at the end we will swap our pivot value with the partition index - 1
    [arr[lowerIndex], arr[partitionIndex - 1]] = [arr[partitionIndex - 1], arr[lowerIndex]];
    return partitionIndex - 1;
}

console.log(quickSort(compare, [5,2,1,8,4,7,6,3]))


