var plaatjes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('./img/zeekomkommer1.jpg')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('./img/zeekomkommer" + getZeekomkommer() + ".jpg')";
});

var counter = 0;

function getZeekomkommer() {
    if (counter >= plaatjes.length) {
        counter = 1;

    }
    else {
        counter++;

    }
    return counter;
}
