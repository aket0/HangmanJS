function randomWord(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function checkValue(value, mysteryWord, letterSpans) {
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
                let title = document.createElement("h2");
                title.innerHTML = "you loose !"
                frame.appendChild(title)
                frame.appendChild(retrybtn)
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
        let title = document.createElement("h2");
        title.innerHTML = "You have Beat The Rope !"
        frame.appendChild(title)
        frame.appendChild(retrybtn)
    }

    
}