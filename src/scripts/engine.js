const emojis = [
    "🍕","🍕",
    "🍔","🍔",
    "🍟","🍟",
    "🌭","🌭",
    "🍿","🍿",
    "🥓","🥓",
    "🥐","🥐",
    "🧀","🧀"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ) ? 2 : -1);

for(i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
   if(openCards.length < 2 && !this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')){
    this.classList.add("boxOpen");
    openCards.push(this);
   }

   if(openCards.length == 2){
    setTimeout(checkMath, 500)
   }
}

function checkMath() {
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        showModal();
    }
}

function showModal() {
    const modal = document.getElementById("vitoriaModal");
    modal.style.display = "block";
}

document.getElementById("fecharModal").onclick = function() {
    document.getElementById("vitoriaModal").style.display = "none";
};

window.onclick = function(event) {
    const modal = document.getElementById("vitoriaModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};