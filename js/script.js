function responsiveMenu() {
    var x = document.getElementById("header-left-topnav");
    if (x.className === "header-left") {
        x.className += " responsive";
    } else {
        x.className = "header-left"
    }
}

function toOrder() {
    document.getElementById("toCommandChoice").scrollIntoView({behavior: "smooth"});
}

function unBao() {
    document.getElementById("hiddenBao").style.display = 'block';
    document.getElementById("hiddenImage").style.display = 'block';
    document.getElementById("hiddenImage").scrollIntoView({behavior: "smooth"});
}

function backToTop() {
    document.getElementById("header-top").scrollIntoView({behavior: "smooth"});
}

function toContact() {
    document.getElementById("contact-block").scrollIntoView({behavior: "smooth"});
}

