var likes = null;
var myString = document.querySelector("#likes");

function addLike(){
    likes += 1;
    console.log(likes);
    if(likes == 1){
        myString.innerHTML = likes.toString() + " like"
    }
    else{
        myString.innerHTML = likes.toString() + " likes";
    }
}