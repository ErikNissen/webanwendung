function agreeCookies() {
        alert("Come to the darkside we have cookies!");
}

function checkCookies() {
    var text = "darkside";
    if (navigator.cookieEnabled == true) {
        text = "Now you are on the darkside and you have cookies.";
    } else {
        text = "Come to the darkside we have cookies.";
    }
    document.getElementById("cookies").innerHTML = text;
}

function Jump() {
    var elmnt = document.getElementById("jump");
    elmnt.scrollIntoView();
    alert("Page is loaded");
}

//AJAX
function loadDoc() {
    let jsn = new XMLHttpRequest();
    jsn.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("rechnung").innerHTML = this.responseText;
        }
    };
    jsn.open("GET", "ajax.json", true);
    jsn.send();
}
