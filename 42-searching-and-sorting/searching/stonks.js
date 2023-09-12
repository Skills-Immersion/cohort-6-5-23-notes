// Problem: You are given a list of daily share prices for a stock. What is the
// maximum profit you could have made by buying a stock on one day, and selling
// on another?

// [7,1,5,3,6] ---> 5  ... 1 - 6
// each el is a day M - F
// cant calc profit backwards
// if there is no max profit --> 0

function stonks(stonksArr) {
    // maxPrice set to 0
    // brute force every possible combo
    // for loop to start at first el
    // for loop to get the rest of the arr
    //  ask is the difference the biggest profit
    // return  maxPrice
}

// [7,1,5,3,6] ---> 5  ... 1 - 6
function maxProfit(prices) {
    let buy = -1;
    let sell = -1;
    let profit = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[i] - prices[j];
            if (currentProfit > profit) {
                buy = i;
                sell = j;
                profit = currentProfit;
            }
        }
    }
    return currentProfit;
}
// [7,1,5,3,6] ---> 5  ... 1 - 6
function stonk(stonksArr) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < stonksArr.length; i++) {
        if (stonksArr[i] < minPrice) {
            minPrice = stonksArr[i];
        } else if (stonksArr[i] - minPrice > maxProfit) {
            maxProfit = stonksArr[i] - minPrice;
        }
    }
    return maxProfit;
}