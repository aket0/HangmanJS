function randomWord(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function checkValue(value, mysteryWord, letterSpans) {
    if (letterSpans[i].innerText === value) {
        alreadyGuessed = true;
        
    }
}

// Si la lettre a déjà été devinée, incrémenter le compteur d'erreurs
if (alreadyGuessed) {
    console.log("Letter already guessed!");
    errorCompt++;
    console.log("Errors:", errorCompt);
} else {
    let foundIndexes = [];
    for (let i = 0; i < mysteryWord.length; i++) {
        if (mysteryWord[i] === value) {
            foundIndexes.push(i);
        }
    }

    if (foundIndexes.length > 0) {
        
        foundIndexes.forEach(index => {
            letterSpans[index].innerText = value;
            point += 1;
            console.log("Points:", point);
        });
    } else {
        console.log("WRONG");
        errorCompt += 1;
        console.log("Errors:", errorCompt);
        switch (errorCompt) {
            case 1:
                img.src = "./Images/2.png"
                break;
            case 2:
                img.src = "./Images/3.png"
                break;
            case 3:
                img.src = "./Images/4.png"
                break;
            case 4:
                img.src = "./Images/5.png"
                break;
            case 5:
                img.src = "./Images/6.png"
                break;
            case 6:
                img.src = "./Images/7.png"
                break; 
            case 7:
                img.src = "./Images/8.png"
                break;
            case 8:
                img.src = "./Images/9.png"
                break;
            case 9:
                img.src = "./Images/10.png"
                divSpan.style.display = "none";
                tryBtn.style.display = "none";
                input.style.display = "none";
                let status = document.createElement("h2");
                status.innerHTML = "you are hanged !"
                retrybtn.style.backgroundColor = "#F4E029"
                row.appendChild(status)
                row.appendChild(retrybtn)
                break;
                   
    }
}

    if (point === mysteryWord.length) {
        win = true
        img.src = "./Images/11.png"
        console.log("you Win !")
    }
}

function checkWin(win){
    if(win){
        divSpan.style.display = "none";
        tryBtn.style.display = "none";
        input.style.display = "none";      
        row.appendChild(stat)
        row.appendChild(retrybtn)
        retrybtn.style.backgroundColor = "#405F7C"
        header.style.backgroundColor = "#405F7C";
        footer.style.backgroundColor = "#405F7C"
       
    }

    
}