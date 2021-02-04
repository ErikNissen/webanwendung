//Seitenbeschreibungstart
function agreeCookies() {
    alert("Come to the darkside we have cookies!");
}


window.addEventListener('DOMContentLoaded', init);
var elem = document.getElementById("browser");
elem.addEventListener('onclick', browserCheck);

//Browserversionscheck
function browserCheck() {
    var BrowserName = navigator.appName;
    var BrowserVersion = navigator.appVersion;
    text2 = "Sie verwendest den <span>" + BrowserName +
        "<\/span>, in der Version <span>" + BrowserVersion + "<\/span>";
    var browserID = document.getElementById("browserID");
    browserID.innerHTML = text2;
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF6051";
ctx.fillRect(5, 5, 190, 90);

//AJAX
function loadDoc() {
    let jsn = new XMLHttpRequest();
    jsn.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonresp = JSON.parse(this.responseText);
            document.getElementById("iban").innerHTML = jsonresp.IBAN[Math.floor((Math.random() * 6))];
            console.log("Function loadDoc(): Done");
        }
    };
    jsn.open("GET", "http://localhost/script/js/ajax.json", true);
    jsn.send();
}

//Formular leeren
function resetForm(id) {
    document.getElementById(id).reset();
}

//Cookies
function setCookie(name, val, exd){
    if(getCookie(name) >= 1){
        let value = getCookie(name) + 1;
        let d = new Date();
        d.setTime(d.getTime() + (exd*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
        document.getElementById("info").innerHTML = value;

    }else{
        let d = new Date();
        d.setTime(d.getTime() + (exd*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + val + ";" + expires + ";path=/";
        document.getElementById("info").innerHTML = val;
    }
    
}

function getCookie(cnm) {
    let dat = document.cookie.split(";");
    let val = dat[1].split("=")[1];
    return parseInt(val);
}

function checkCookie(cnm) {
    var user=getCookie(cnm);
    if (user != "") {
      return 1;
    } else {
         return 0;
    }
  }