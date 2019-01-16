var plaatjes = [1,2,3,4,5,6,7,8,9];
var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.backgroundImage = "url('./img/hair/hair1.png')";

slideholder1.addEventListener("click", function () {

    slideholder1.style.backgroundImage = "url('./img/hair/hair" + getHair() +".png')";
});

var counter = 0;

function getHair(){
    if (counter >= plaatjes.length){
        counter = 1;
    }
    else {
        counter++;

    }
    return counter;
}
