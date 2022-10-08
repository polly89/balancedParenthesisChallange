// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function isBalanced(phrase){
    let openParenthesis = 0
    let closedParenthesis = 0
    for (let i = 0; i < phrase.length; i ++){
        if (phrase[i] === "(" ){
            openParenthesis += 1
        }else if (phrase[i] === ")"){
            closedParenthesis += 1
        }
    }
    return openParenthesis === closedParenthesis
}

console.log(isBalanced("(This (is (a) balanced) string.)"))
console.log(isBalanced("This ( is unbalanced."))
console.log(isBalanced("This is () also ) unbalanced."))
console.log(isBalanced("Balanced."))

// This function will check the letters in a string to see if there's a closing parenthesis for every open one. 
// Start by creating two variables, one for open parenthesis and another for closed parenthesis. Set them to 0. 
// Then, loop through the string using a for loop. 
// If the index value of the string is equal to an open parenthesis, it will add it to the "openParenthesis" variale. 
// If it's a closed parenthesis, it will add it to the "closedParenthesis" variable. 
// Then, it will look at the next iteration. 
// Finally, it will check to see if the openParenthesis and closedParenthesis variables are equal. 
// If they are, it will return true. If they aren't it will return false. 

