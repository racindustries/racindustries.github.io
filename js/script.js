function unBao() {
    document.getElementById("hiddenBao").style.display = 'block';
    document.getElementById("hiddenImage").style.display = 'block';
    document.getElementById("hiddenImage").scrollIntoView({behavior: "smooth"});
}

function backToTop() {
    document.getElementById("header-top").scrollIntoView({behavior: "smooth"});
}
