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

let text_field = document.getElementById('user_input');
let user_input = text_field.value;
let button = document.getElementById('button');
let div1 = document.querySelector('#div1');
div1.innerText = "-Encoded message appears here-";
// let user_encoded = document.createTextNode(encode(user_input));
button.addEventListener('click', function(event){
    user_input = text_field.value;
    let user_encoded = encode(user_input);
    div1.innerText = user_encoded;
});