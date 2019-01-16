function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
let images = [1,2,3,4,5,6,7,8,9];
let out = '';
shuffleArray(images);
for (let i = 0; i < images.length; i++){
    out=out+'<img src="img/zeekomkommer'+images[i]+'.jpg">' ;
}
document.getElementById("komkommerplaatjes").innerHTML=out;