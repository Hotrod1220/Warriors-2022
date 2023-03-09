
var landingPageImgs = ["<img class='landing-page__img' src='imgs/IMG_0221.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0222.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0223.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0225.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0226.webp' alt='Team Animated Background'>"];
var counter = 2;
var quotePos;
var quoteYPos
var quoteList;
var windowHeight;

setInterval(switchBackground, 3000);

$(document).on("scroll", showQuote);



function switchBackground() {
    $('#landing-page__img').html(landingPageImgs[counter]);
    counter++;
    counter %= 5;
}

function showQuote() {
    quoteList = document.getElementsByClassName("quote");
    windowHeight = $(window).height() * 0.4;
    for (let i = 0; i < quoteList.length; i++) {
        quotePos = quoteList[i].getBoundingClientRect();
        quoteYPos = quotePos.bottom;

        if (quoteYPos > -100 && quoteYPos < windowHeight) {
            console.log("Fading in")
            if ($(".quote").css("opacity") == "0")
                $(".quote").fadeTo(500, 1);
            break;
        }
        if (i == quoteList.length - 1) {
            console.log("Fading out")
            if ($(".quote").css("opacity") == "1")
                $(".quote").fadeTo(500, 0);
        }
    }
}