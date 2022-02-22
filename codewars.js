// Question 1: Will you make it? 8 Kyu
// Using arrow function
var zeroFuel = (distance,mpg,fuelLeft) => {
    if (distance > mpg*fuelLeft) {
        return false
    }
    else {
        return true
    }
}
console.log(zeroFuel(100, 50, 1));
console.log(zeroFuel(50, 25, 2));

// Question 2: Reduce but Grow. 8 Kyu
// Using arrow function
var grow = (arr) => {
    let product = 1
    for (i of arr) {
        product *= i;
    }
    return product;
}
console.log(grow([1, 2, 3, 4]));

// Question 3: Sum of Positive. 8 Kyu
// Using arrow function
var positiveSum = (arr) => {
    let sum = 0
    for(num of arr) {
        if(num < 0) {
            continue
        }
        else {
            sum += num
        }
    }
    if(sum > 0) {
        return sum
    }
    else {
        return 0;
    }
}
console.log(positiveSum([1, -4, 7, 99, -78, 12]));