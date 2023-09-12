// R - Repeat problem
// E - Example input/output
// A - Approach
// C - Coding
// T - Testing / Code review
// O - Optimization / Follow-up questions


// Given an array of numbers, find the largest product formed by two of the numbers. For example, 
// if the input array is [1, 5, 3, 4, 2,], the largest product that can be formed by two of the numbers is 20, 
// which is the product of 5 and 4. Can you write code to solve this problem?

// just return me the largest product
// always valid, has 2 or more whole nums
// write me some error handling

export function counter(array=[]){
    if(array.length <2){
        return console.log("You need more numbers!")}
    let newArray = array.sort((num1,num2)=>num2-num1)
    return newArray[0]*newArray[1]
    // multiply back and front if check which is better
    // use abs 
} 

// built in methods
// sort has a time complexity of O(n log n)

function largest(array = []) {
    if (array.length < 2) {
      return (`Array must have at least two valid numbers.`)
    }
    let maxOne = -Infinity;
    let maxTwo = -Infinity;
    // two mins variables
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxOne) {
        maxOne = array[i];
      } else {
        maxTwo = array[i];
      }
      //ask to fill in smallest
    }
    // check if two big or small have the largest prod and return
    return (maxOne * maxTwo);
  }


  // //O(n^2)
// // brute force
// // set a max prod that will be the first two el multiplied
// // for loop to go thru the arr
//     // another for loop to start at i + 1
//         // if this prod is bigger replace og answer


// //O(n)
//  s2  s2      l1 l2
// [-,6,-6,1,5] [5,1,-6,-6]
// we are going to look for the two smallest nums & two biggest nums
// scan the array and fill in those four values
// multiply 2 smallest and 2 largest
// return the biggest prod

function largestProduct(arr) {
  if (arr.length < 2) {
    return undefined;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    } else if (value > secondLargest) {
      secondLargest = value;
    }
    if (value < smallest) {
      secondSmallest = smallest;
      smallest = value;
    } else if (value < secondSmallest) {
      secondSmallest = value;
    }
  }

  const largestProduct = largest * secondLargest;
  const smallestProduct = smallest * secondSmallest;

  if (largestProduct > smallestProduct) {
    return largestProduct;
  }
  else {
    return smallestProduct;
  }
}