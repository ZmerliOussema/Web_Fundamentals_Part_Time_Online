console.log("page loaded...");

function accept(element) {
    console.log(element);
    element.remove();
}

function hover(element) {
    console.log(element);
    element.src = "images/assets/succulents-2.jpg"; 
}

function hoverOut(element) {
    console.log(element);
    element.src = "images/assets/succulents-1.jpg";
}