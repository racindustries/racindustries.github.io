
// Add a hamburger menu at the top of the mobile version and hide logo title 'mon bao' when called
function responsiveMenu() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("img-logo");
    if (x.className === "header-topnav") {
        x.className += " responsive";
        y.style.display = "none";
        $('#mainContainer').css({
        'padding-top': '100px',
    });
    } else {
        x.className = "header-topnav"
        y.style.display = "block";
        $('#mainContainer').css({
        'padding-top': '0px',
    });
    }
}

// NOT WORKING : extend menu width on mobile version
$(document).ready(function() {
  $(".header-topnav.responsive").css({
    'width': ($(".header").width() + 'px')
  });
});


function toOrder() {
    document.getElementById("toCommandChoice").scrollIntoView({behavior: "smooth"});
}

function unBao() {
    document.getElementById("hiddenBao").style.display = 'block';
    document.getElementById("hiddenImage").style.display = 'block';
    document.getElementById("hiddenBao2").style.display = 'block';
    document.getElementById("hiddenImage").scrollIntoView({behavior: "smooth"});
}

function backToTop() {
    document.getElementById("header-top").scrollIntoView({behavior: "smooth"});
}

function toContact() {
    document.getElementById("contact-block").scrollIntoView({behavior: "smooth"});
}


// $(function() {

//   $(window).scroll(function() {
//     var x = $(window).responsiveMenu();

//     if (x > 42) {
//       $(".logo-title").hide();
//     } else {
//       $(".logo-title").show();
//     }

//   });

// });

  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1xPdmTaHxi_ivJmsh_-zJqQLsa0lTPNRQ73-1VMswlaM/edit#gid=0';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  // function showInfo(data, tabletop) {
  //   alert('Database sucessfully connected!')
  //   console.log(data);
  // }

  // window.addEventListener('DOMContentLoaded', init)



