
let current = document.getElementById("main");
let frame = document.createElement("div");
frame.style.display = "flex";
frame.style.width = "100%"
frame.style.flexDirection = "column"
frame.style.justifyContent = "center"
frame.style.alignItems = "center";
current.appendChild(frame);
let img = document.createElement("img");
img.src = "./Images/1.png"
img.style.width = "600px"
img.style.alignItems = "center;"
frame.appendChild(img);
let divSpan = document.createElement("div");
divSpan.style.display = "flex";
divSpan.style.flexDirection = "row"
divSpan.style.marginTop = "2%"
frame.appendChild(divSpan)

let mysteryWord = randomWord(words);
console.log(mysteryWord);

let letterSpans = [];

let errorCompt = 0;

let point = 0;

let win;



for (let i = 0; i < mysteryWord.length; i++){
    let span = document.createElement("span");
    switch (mysteryWord[i]) {
        case " ":
            span.innerText = "  ";
            break;
        default:
            span.innerText = "?";
            break; 
    }
    divSpan.appendChild(span);
    letterSpans.push(span)
    span.style.fontSize = "50px"
    span.style.border = "1px solid black"
    span.style.padding = "15px" 
    
}



let input = document.createElement("input")
input.maxLength = "1"
input.minLength = "1"
input.style.fontSize = "55px"
frame.appendChild(input)


let tryBtn = document.createElement("button")
tryBtn.innerText = "TRY"
frame.appendChild(tryBtn);

let retrybtn = document.createElement("button")
retrybtn.innerText ="Retry";


tryBtn.addEventListener("click", () => { 
    let guessedLetter = input.value.toLowerCase();
    checkValue(guessedLetter, mysteryWord, letterSpans);
    checkWin(win);
    input.value = ""
});

retrybtn.addEventListener("click", () => {
    location.reload();
})


console.log(input.value)
console.log(errorCompt.value);