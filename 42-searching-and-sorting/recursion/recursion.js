// arrayDoubler([1, 2, 3])  -> [2, 4, 6]

//loop and *2 each el arr[i]

function arrayDoubler(arr, result = []) {
    //base case
    if (arr.length === 0) return result;
    result.push(arr[0] * 2);
    return arrayDoubler(arr.slice(1), result);
}

function arrayDoublerPartTwoElectricBoogaloo(arr, result = [], index = 0) {
    // base case
    if (index === arr.length) return result;
    result.push(arr[index] * 2);
    return arrayDoubler(arr, result, index + 1);
}


// Fn = Fn-1 + Fn-2
// 0 1 1 2 3 5 8

function fibonacci(n) {
    if (n <= 1) return n;

    let prev = 0, current = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}

fibonacci(50)


function fibRecursive(n) {
    if (n <= 1) return n
    else return fibRecursive(n - 1) + fibRecursive(n - 2)
}

fibRecursive(50) // 8

// Time Complexity: 

// O(2^ n)
// Space Complexity: 
// O(n)