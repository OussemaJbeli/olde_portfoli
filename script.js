var button = document.getElementById("side_list");
button.onclick = function() {
    var menu = document.getElementById("list");
    var body = document.body;
    if(menu.style.left === "-50vw"){
        menu.style.left = "0";
        body.style.background = "black";
    }
    else{
        menu.style.left = "-50vw";
        body.style.position = "";
    }
};
