// function hello(){
//     return "Hello world!"
// }

// Multiple Functions.

// function a(){
//     return 'Hello a!';
// }

// function b(){
//     return 'Hello b!'
// }

// Function calls.
// function greet(){
//     return 'Haydo!'
// }

// let salutation = greet();
// console.log(salutation)

//  Reverse Number.
// function reverseNumber(num){
//     num = num + "";
//   return num.split("").reverse()
// }

// console.log(reverseNumber(32243))

// Check Palindrome.
// function isPalindrome(str){
// return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome("madan"));

// String Combinations.

// String Combinations.
function combinations(str){
    const result = []
    for(let i = 0; i<str.length; i++){
        for(let j = i+ 1; j<=str.length; j++){
            result.push(str.slice(i, j))
        }
    }
    return result;
}

console.log(combinations("dog"));