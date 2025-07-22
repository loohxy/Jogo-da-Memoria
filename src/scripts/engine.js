const somClique = document.getElementById("somClique");
const somReset = document.getElementById("somReset");
const somAcerto = document.getElementById("somAcerto");
const somVitoria = document.getElementById("somVitoria");

somAcerto.volume = 0.5; 

function tocarSom(som) {
    som.currentTime = 0;
    som.play();
}

const emojis = [
    "🐸",
    "🐸",
    "🐱",
    "🐱",
    "🦊",
    "🦊",
    "🐰",
    "🐰",
    "🦄",
    "🦄",
    "🐭",
    "🐭",
    "🐼",
    "🐼",
    "🐹",
    "🐹"
];
let openCards = [];

let suffleEmojis = emojis.sort(() =>(Math.random() > 0.5) ? 2: -1);

for(let i=0; i < emojis.length; i++)
{
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = suffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}


function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        openCards.push(this);
        tocarSom(somClique); 
    }

    if (openCards.length == 2) {
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
            setTimeout(checkMatch, 300); 
        } else {
            setTimeout(checkMatch, 500);

        }
    }
    
    console.log(openCards);
}
function checkMatch() {

    if(openCards[0].innerHTML === 
        openCards[1].innerHTML) {
            openCards[0].classList.add
            ("boxMatch");
            openCards[1].classList.add
            ("boxMatch");
            tocarSom(somAcerto);
        } else {
            openCards[0].classList.remove
            ("boxOpen");
            openCards[1].classList.remove
            ("boxOpen");
        }

        openCards = [];

        if (document.querySelectorAll(".boxMatch").length === emojis.length) {
            setTimeout(() => {
                 tocarSom(somVitoria); 
                 
            }, 200);


     }
}