//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
var dogString = "Hello Max, my name is Dog, and I have purple eyes!"
var dogNames = ["Max","HAS","PuRple","dog"]

function findWords(str1,str2){
    //Your code goes here
    for (const name of dogNames) {
      if (dogString.includes(name)) {
        return `Matched ${name}`;
      } else {
        console.log("No Matches");
      }
    }
}
//Call method here with parameters
console.log(findWords(dogString, dogNames));
// Using arrow functions
var findWords = (str1, str2) => {
    for (const name of dogNames) {
      if (dogString.includes(name)) {
        return `Matched ${name}`;
      } else {
        console.log("No Matches");
      }
    }
}
console.log(findWords(dogString, dogNames));

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
// Using splice
var arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr1){
    //code goes here
    for (var i=0; i < arr1.length; i++) {
        if (i % 2 != 0) {
            continue
        }
        else {
            arr1.splice(i, 1, "even index");
        }
    }
    return arr1
};
console.log(replaceEvens(arr));

// Using the arrow function
var replaceEvens = arr1 => {
    for (var i = 0; i < arr1.length; i++) {
      if (i % 2 == 0) {
        arr1[i] = "even index";
      } else {
        continue;
      }
    }
    return arr1
};
console.log(replaceEvens(arr));
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]