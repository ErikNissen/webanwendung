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