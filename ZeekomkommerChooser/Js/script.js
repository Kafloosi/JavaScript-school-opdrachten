pics = document.getElementById("pics");
createPicsHolders();
createZeekomkommerImages();

function createPicsHolders(){
    for (var i = 0; i < 9; i++){
        pictureHolder = document.createElement("div");
        pictureHolder.className = "zeekomkommerpicture";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);
    }

}

function createZeekomkommerImages(){
    pictureHolders = document.getElementsByClassName("zeekomkommerpicture");
    for (var i = 0; i < pictureHolders.length; i++){
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i+1);
        zeekomkommerPic = document.createElement("img");
        zeekomkommerPic.src = "./img/zeekomkommer" + (i+1) + ".jpg";
        zeekomkommerPic.id = (i+1);
        zeekomkommerPic.addEventListener("click", function(){
            makeFavorite(this.id);
        });
        pictureHolders[i].appendChild(favorite);
        pictureHolders[i].appendChild(zeekomkommerPic);
    }
}

function makeFavorite(id){
    console.log("favorite: " + id);

    notSoFavorite = document.getElementsByClassName("favorite");

    for (var i = 0; i < notSoFavorite.length; i++){
        notSoFavorite[i].style.backgroundImage = "none";
    }

    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('./img/like.jpg')";
}