var likesArray = [0, 0, 0];
var span1 = document.querySelector("#span-1");
var span2 = document.querySelector("#span-2");
var span3 = document.querySelector("#span-3");

function addLike(id){
    if (id == 1){
        likesArray[0] += 1;
        span1.innerHTML = likesArray[0].toString() + " likes";
    }
    else if (id == 2){
        likesArray[1] += 1;
        span2.innerHTML = likesArray[1].toString() + " likes";
    }
    else{
        likesArray[2] += 1;
        span3.innerHTML = likesArray[2].toString() + " likes";
    }
}