var plaatjes = [1,2,3,4,5,6,7,8,9];
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('./img/face/face1.png')";

slideholder2.addEventListener("click", function () {

    slideholder2.style.backgroundImage = "url('./img/face/face" + getFace() +".png')";
});

var counter = 0;

function getFace(){
    if (counter >= plaatjes.length){
        counter = 1;
    }
    else {
        counter++;

    }
    return counter;
}
