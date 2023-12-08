console.log("page loaded...");

var _name = document.querySelector("#userName");

var stringArray = ["Adrien-s","Alayne-s","Anne-s","Arry-s"];

var requests = document.querySelector("#connectionRequests");

var connections = document.querySelector("#yourConnections");

function changeName(){ 
    var randomNumber = Math.floor(Math.random()*stringArray.length);
    console.log(stringArray[randomNumber]);
    
    _name.innerText =  stringArray[randomNumber];
}

function removeRequest(id){
    var element = document.querySelector(id);
    element.remove();
    requests.innerText --;
}

function acceptRequest(id){
    var element = document.querySelector(id);
    element.remove();
    requests.innerText --;
    connections.innerText ++;
}
