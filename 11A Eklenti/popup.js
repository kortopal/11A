function go(url) {
    window.open(url, "_blank");
}

document.getElementById("btn1").addEventListener("click", function() {
    go("https://www.google.com/search?q=dolar%2Ftl");
});

document.getElementById("btn2").addEventListener("click", function() {
    go("https://www.google.com/search?q=euro%2Ftl");
});  

document.getElementById("btn3").addEventListener("click", function() {
    go("https://www.google.com/search?q=sterlin%2Ftl");
});

document.getElementById("btn4").addEventListener("click", function() {
    go("http://www.biyolojisitesi.net");
});

document.getElementById("btn5").addEventListener("click", function() {
    go("http://timer.onlinealarmkur.com/" + "#" + document.getElementById("input1").value);
});

document.getElementById("input1").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn5").click();
    }
});
