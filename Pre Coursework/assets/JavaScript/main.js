function refreshPage(){
    document.getElementById("usertext").innerHTML = '';
}
function surprise(){
    if (document.getElementById("mybutton").innerHTML == "Secret Message")
        document.getElementById("mybutton").innerHTML = "Have a great day!";
    else
        document.getElementById("mybutton").innerHTML = "Secret Message";
}
