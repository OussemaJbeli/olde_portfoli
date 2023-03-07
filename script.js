/****************side_list***************** */
var button = document.getElementById("side_list");
var menu = document.getElementById("list");
var body = document.body;
/**********open****** */
button.onclick = function() {
    if(menu.style.left === "-100vw"){
        menu.style.left = "0";
        button.style.transform= "rotate(-90deg)";
    }
    else{
        menu.style.left = "-100vw";
        button.style.transform= "rotate(0deg)";
    }
};
/***********close******* */
var content = document.getElementById("content");
content.addEventListener('click',list_but);
var side_button = document.getElementById("side_button1");
side_button.addEventListener('click',list_but);
var side_button1 = document.getElementById("side_button2");
side_button1.addEventListener('click',list_but);
var side_button = document.getElementById("side_button3");
side_button.addEventListener('click',list_but);
var side_button1 = document.getElementById("side_button4");
side_button1.addEventListener('click',list_but);
function list_but() {
    menu.style.left = "-100vw";
    button.style.transform= "rotate(0deg)";
};