let userLetter = ['a', 'b', 'c', 'd', "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let cipherLetter = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'a', 'b', 'c', 'd', "e", "f", "g", "h", "i", "j", "k", "l", "m"];


function encode(userInput){
    let pcOutput = "";
    for(let i=0; i<userInput.length; i++){
        if (userLetter.includes(userInput[i])){
            let j = userLetter.indexOf(userInput[i]);
            pcOutput += cipherLetter[j];
        } else{
            pcOutput += userInput[i];
        };
    };
    return pcOutput;
}

function decode(userInput){
    let pcOutput = "";
    for(let i=0; i<userInput.length; i++){
        if (cipherLetter.includes(userInput[i])){
            let j = cipherLetter.indexOf(userInput[i]);
            pcOutput += userLetter[j];
        } else{
            pcOutput += userInput[i];
        };
    };
    return pcOutput;
}

let userInput = prompt("Give me a secret message and I'll encode it: ");

alert(encode(userInput));
alert("and " + encode(userInput) + " decoded is " + decode(encode(userInput)) + ".");
