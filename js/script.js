function responsiveMenu() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("img-logo");
    if (x.className === "header-topnav") {
        x.className += " responsive";
        y.style.display = "none";
    } else {
        x.className = "header-topnav"
        y.style.display = "block";
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


$(function() {

  $(window).scroll(function() {
    var x = $(window).responsiveMenu();

    if (x > 42) {
      $(".logo-title").hide();
    } else {
      $(".logo-title").show();
    }

  });

});


