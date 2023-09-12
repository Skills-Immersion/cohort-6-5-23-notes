function indexOf(array, isMatch) {
    for (let i = 0; i < array.length; i++) {
        if (isMatch(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

function findNumTwo(element, index, arr) {
    return element.hobby === "drawing, and being num#2"
}

let x = [
    {name: "Alex", hobby: "drawing, and being num#2"},
    {name: "Joseph", hobby: "snowboarding"},
    {name: "Mohammad", hobby: "gaming on g fuel"}
]

console.log(indexOf(x, findNumTwo))
console.log(indexOf(x, (element, index, arr)=> element.name === "Mohammad"))

