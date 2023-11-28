/*
splitting array in HALF until we get a single sorted array 
                    [8,3,5,4,7,6,1,2]
            [8,3,5,4]              [7,6,1,2]
          [8,3]   [5,4]           [7,6]   [1,2]
       [8] [3]    [5] [4]       [7] [6]  [1]  [2]
*/

/*
merge the sorted halves, and put the small ones in first  O(N)
        [8]    [3]     [5]     [4]     [7]     [6]     [1]      [2]
                    [3,8]    [4,5]    [6,7]    [1,2]
                        [3,4,5,8]           [1,2,6,7]
                            [1,2,3,4,5,6,7,8]                    
*/ 

function compare(a, b) {
    return a - b
}
// + a is greater
// - a is less
// 0 both equal

// [8,3,5,4,7,6,1,2]
function mergeSort(arr,compare) {
    //base case
    if ( arr.length <= 1 ) return arr;
    //recursive case
    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0,mid), compare);
    const rightArr = mergeSort(arr.slice(mid), compare);
    return merge(leftArr, rightArr, compare);
}

function merge(leftArr, rightArr, compare) {
    const sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while ( leftIndex < leftArr.length && rightIndex < rightArr.length ) {
        const comparison = compare(leftArr[leftIndex], rightArr[rightIndex]);
        // negative means right number is bigger
        if (comparison < 0 ) {
            sortedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            sortedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    } 
    // deal with left over nums
    return sortedArr.concat(
        leftIndex < leftArr.length ? leftArr.slice(leftIndex) : rightArr.slice(rightIndex)
    );
}

console.log(mergeSort([10,73,24,76], compare))