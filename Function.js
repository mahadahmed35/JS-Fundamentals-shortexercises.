// Functions.
// function showMessage(from, text) { // parameters: from, text
//   return from + ': ' + text;
// }

// console.log(showMessage('Ann', 'Hello!')); // Ann: Hello! (*)
// console.log(showMessage('Ann', "What's up?"));

// Default parameters.
function showMe(from, text = "no text given"){
    return `${from} : ${text}`;

}

console.log(showMe("Ann"))
console.log(showMe("Ann", null)); // Ann: no text given
