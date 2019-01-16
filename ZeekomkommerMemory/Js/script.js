cardArray=[
    {text: "A", image: "./img/zeekomkommer1.jpg"},
    {text: "A", image: "./img/zeekomkommer1.jpg"},
    {text: "B", image: "./img/zeekomkommer2.jpg"},
    {text: "B", image: "./img/zeekomkommer2.jpg"},
    {text: "C", image: "./img/zeekomkommer3.jpg"},
    {text: "C", image: "./img/zeekomkommer3.jpg"},
    {text: "D", image: "./img/zeekomkommer4.jpg"},
    {text: "D", image: "./img/zeekomkommer4.jpg"},
    {text: "E", image: "./img/zeekomkommer5.jpg"},
    {text: "E", image: "./img/zeekomkommer5.jpg"},
    {text: "F", image: "./img/zeekomkommer6.jpg"},
    {text: "F", image: "./img/zeekomkommer6.jpg"},
    {text: "F", image: "./img/zeekomkommer7.jpg"},
    {text: "F", image: "./img/zeekomkommer7.jpg"},
    {text: "F", image: "./img/zeekomkommer8.jpg"},
    {text: "F", image: "./img/zeekomkommer8.jpg"},
    {text: "F", image: "./img/zeekomkommer9.jpg"},
    {text: "F", image: "./img/zeekomkommer9.jpg"},

];

clickedCard=[];

matchedCard=[];

clicks=40;

var shuffleDeck=function(){
    var currentIndex = cardArray.length
        , temporaryValue
        , randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
    }
}
shuffleDeck();
console.log(cardArray);
var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){

    var cardsBack=document.createElement("div");
    cardsBack.classList.add("card");
    board.appendChild(cardsBack);

    var images=document.createElement("img");
    images.src = cardArray[i].image;
    images.className="image";
    cardsBack.appendChild(images);

    cardsBack.addEventListener("click",function(){
        if (clicks>0){
            clicks--;
            console.log(clicks);
            document.getElementById('counter').innerHTML=clicks.toString();
            var card = this;
            if (clickedCard.length < 2){
                card.classList.add("image");
                card.classList.add("match");
                clickedCard.push(card.innerHTML);
                matchedCard.push(card);
                console.log("this is card" + card);

                console.log("this is clickedCard" + clickedCard);
                if (clickedCard.length === 2){
                    if (clickedCard[0] === clickedCard[1]){

                        console.log("It's a match!");
                        clickedCard=[];
                        matchedCard=[];
                    } else {
                        console.log("It's not a match!")
                        setTimeout(turnOffAllCards, 1000);
                        for (i=0; i<matchedCard.length; i++){
                            matchedCard[i].classList.remove("match");
                        }
                        matchedCard=[];
                    }
                }
            }
        }
    })
}

function turnOffAllCards(){
    var frontCards = document.querySelectorAll("div.image:not(.match)");
    for(var i = 0; i < frontCards.length; i++){
        frontCards[i].classList.remove("image");
        clickedCard=[];

    }

}