var plaatjes = [1,2,3,4,5,6,7,8,9];
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('./img/chin/chin1.png')";

slideholder3.addEventListener("click", function () {

    slideholder3.style.backgroundImage = "url('./img/chin/chin" + getChin() +".png')";
});

var counter = 0;

function getChin(){
    if (counter >= plaatjes.length){
        counter = 1;
    }
    else {
        counter++;

    }
    return counter;

}
