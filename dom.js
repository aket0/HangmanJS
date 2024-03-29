let current = document.getElementById("main");

current.style.backgroundPosition = "top"
current.style.backgroundSize = "cover"
current.style.padding = "0"
current.style.margin = "0"

let frame = document.createElement("div");
frame.className = "container";
frame.style.display = "flex";
frame.style.width = "100%";

frame.style.flexDirection = "column";
frame.style.justifyContent = "center";
frame.style.alignItems = "center";
current.appendChild(frame);


let header = document.createElement("header");
header.style.width = '100%';
header.style.textAlign = "center"
header.style.backgroundColor = "#CFA06C"
frame.appendChild(header);

let title = document.createElement("h1");
title.style.fontSize = "3em"
title.style.fontFamily = "Protest Riot"
let first = document.createElement("span");
let second = document.createElement("span");
first.innerText = "Hangman"
second.innerText = "JS"
second.style.color = "#F4E029"
title.appendChild(first);
title.appendChild(second);
header.appendChild(title)

let row = document.createElement("div");
row.className = "row";
row.style.width = "100%"
row.style.height = "55vmax"
row.style.display = "flex";
row.style.flexDirection = "column";
row.style.justifyContent = "center"
row.style.alignItems = "center";
row.style.marginTop = "5%"
row.style.marginBottom ="2%"
frame.appendChild(row)




let img = document.createElement("img");
img.src = "./Images/1.png"
if (window.matchMedia("(min-width: 416px)").matches) {

    row.style.marginTop ="10%"
    img.style.width = "35vw"
    row.appendChild(img);
}else{
img.style.width = "80vw"
img.style.alignItems = "center"
row.appendChild(img);
}

let divSpan = document.createElement("div");
divSpan.style.display = "flex";
divSpan.width = "100vh"
divSpan.style.flexDirection = "row"
divSpan.style.marginTop = "1%"
divSpan.style.justifyContent = "space-around"
divSpan.style.background= "#CFA06C"
divSpan.style.borderRadius = "5px";

row.appendChild(divSpan)

let mysteryWord = randomWord(words);


let letterSpans = [];

let errorCompt = 0;

let point = 0;

let win;



for (let i = 0; i < mysteryWord.length; i++){
    let span = document.createElement("span");
    switch (mysteryWord[i]) {
        case " ":
            span.innerText = "-";
            break;
        default:
            span.innerText = "?";
            break; 
    }
    divSpan.appendChild(span);
    letterSpans.push(span)
    span.style.fontFamily = "Protest Riot"
    span.style.fontSize = "2em"
   
    span.style.justifyContent = "space-around";
   
    span.style.padding = "1vw"
     
    
}


let inputDiv = document.createElement("div");
inputDiv.style.width = "15%";
inputDiv.style.padding = "2%"
inputDiv.style.display = "flex"
inputDiv.style.justifyContent = "space-around"
inputDiv.style.alignItems = "center"
inputDiv.marginBottom = "100%"
row.appendChild(inputDiv);


let input = document.createElement("input")
input.maxLength = "1"
input.minLength = "1"
input.style.fontSize = "2em"
input.style.width = "1em"
input.style.textAlign = "center"
input.style.backgroundColor = "#CFA06C"
input.style.padding = "1vw"
input.style.borderRadius = "5px"
input.style.border = "none"
input.style.color = "white"
inputDiv.appendChild(input)


let tryBtn = document.createElement("button")
tryBtn.innerText = "►"
tryBtn.style.fontSize ="2em"
tryBtn.style.backgroundColor = "#F4E029"
tryBtn.style.borderRadius = "5px";
tryBtn.style.border = "none";
tryBtn.style.padding = "1vw"
tryBtn.style.textAlign = "center"
tryBtn.style.color = "white"
inputDiv.appendChild(tryBtn);

let stat = document.createElement("h2");
stat.innerHTML = "You've Beat The Rope !"

let retrybtn = document.createElement("button")
retrybtn.innerText ="Retry ?";
retrybtn.style.fontSize ="2em"
retrybtn.style.borderRadius = "5px";
retrybtn.style.border = "none";
retrybtn.style.padding = "1vw"
retrybtn.style.textAlign = "center"
retrybtn.style.color = "white"

let footer = document.createElement("div");
footer.style.backgroundColor = "#CFA06C"
footer.style.textDecoration = "none";
footer.style.width = '100%';
footer.style.height = "10vw"
footer.style.bottom = "0";
footer.style.display = "flex"
footer.style.flexDirection = "column"
footer.style.justifyContent = "center"
footer.style.textAlign = "center"
footer.style.marginTop = "20vh"
frame.appendChild(footer)

let footerText = document.createElement("p")
footerText.innerText = "Made by Hubert Moyne"
footerText.style.fontFamily = "Protest Riot"
footer.appendChild(footerText);






tryBtn.addEventListener("click", () => { 
    let guessedLetter = input.value.toLowerCase();
    checkValue(guessedLetter, mysteryWord, letterSpans);
    checkWin(win);
    input.value = ""
});

retrybtn.addEventListener("click", () => {
    location.reload();
})



