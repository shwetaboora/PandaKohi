let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");
let popup = document.getElementById("popup");
function openmenu() {
    menu.style.left = "0";
    open.style.display = "none";
    close.style.display = "block";
}
function closemenu() {
    menu.style.left = "-100%";
    open.style.display = "block";
    close.style.display = "none";
}
function LoginSuccess() {
    alert("Login Successfully");
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";

}
function showThankYou() {
    alert("Thank You");
}
//nav bg color change 
function change() {
    var nav = document.getElementById("navbar");
    var value = window.scrollY;
    if (value > 80) {
        nav.classList.add("nav-change");
    } else {
        nav.classList.remove("nav-change");
    }
}
window.addEventListener("scroll", change);