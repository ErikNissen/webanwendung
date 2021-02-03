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

//var elem = document.getElementById("browser");
//elem.addEventListener('click', browserCheck);

function browserCheck() {
    var BrowserName = navigator.appName;
    var BrowserVersion = navigator.appVersion;
    text = 'Sie verwendest den <span>' + BrowserName +
        '<\/span>, in der Version <span>' + BrowserVersion + '<\/span>';
    var ausgabe = document.getElementById('browserID');
    ausgabe.innerHTML = text;
}

//AJAX
function loadDoc() {
    let jsn = new XMLHttpRequest();
    jsn.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let jsonresp = JSON.parse(this.responseText);
            document.getElementById("iban").innerHTML = jsonresp.IBAN[Math.floor((Math.random() * 6))];
            console.log("Function loadDoc(): Done");
        }else{
            console.log("Function loadDoc(): Error.");
        }
    };
    jsn.open("GET", "http://localhost/script/js/ajax.json", true);
    jsn.send();
}
