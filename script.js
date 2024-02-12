let lettersGuessed = [];

function removeAccents(str) {
    return str.replace(/[àáâãäåçèéêëìíîïñòóôõöùúûüýÿ]/g, function(matched){
      return accentMap[matched];
    });
  }

function randomWord(arr){
    return removeAccents(arr[Math.floor(Math.random() * arr.length)]);
}


function checkValue(value, mysteryWord, letterSpans) {
    value = removeAccents(value.toLowerCase());

    let foundIndexes = [];
    for (let i = 0; i < mysteryWord.length; i++) {
        let letterWithoutAccent = removeAccents(mysteryWord[i].toLowerCase());
        if (letterWithoutAccent === value) {
            foundIndexes.push(i);
        }
    }
   
    if (lettersGuessed.includes(value)) {
        errorCompt += 1; 
    } else {
        if (foundIndexes.length > 0) {
            foundIndexes.forEach(index => {
                letterSpans[index].innerText = value;
                point += 1;
               
            });
        } else {
            
            errorCompt += 1;
            
        }
        
        lettersGuessed.push(value);
    }

    
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
        let stat = document.createElement("h2");
        stat.innerHTML = "😨💀 HANGED ! 💀😨"
        stat.style.fontFamily = "Protest Riot"
        stat.style.fontSize = "2em";
        retrybtn.style.backgroundColor = "#F4E029"      
        row.appendChild(stat)
        row.appendChild(retrybtn)
            break;
        default:
            img.src = "./Images/default.png";
            break;
    }

    if (point === mysteryWord.length) {
        win = true
        img.src = "./Images/11.png"
       
    }
}

  
function checkWin(win){
    if(win){
        divSpan.style.display = "none";
        tryBtn.style.display = "none";
        input.style.display = "none";
        let stat = document.createElement("h2");
        stat.innerHTML = "🫵 You've beat the rope ! 🫵"
        stat.style.fontFamily = "Protest Riot"
        stat.style.fontSize = "1.5em";      
        row.appendChild(stat)
        row.appendChild(retrybtn)
        retrybtn.style.backgroundColor = "#405F7C"
        header.style.backgroundColor = "#405F7C";
        footer.style.backgroundColor = "#405F7C"
       
    }

    
}

