
var landingPageImgs = ["<img class='landing-page__img' src='imgs/IMG_0221.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0222.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0223.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0225.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0226.webp' alt='Team Animated Background'>"];
var counter = 2;
var quotePos;
var quoteYPos
var quoteList;
var windowHeight;

setInterval(switchBackground, 3000);

$(document).on("scroll", showQuote);
table();


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
            if ($(".quote").css("opacity") == "0")
                $(".quote").fadeTo(500, 1);
            break;
        }
        if (i == quoteList.length - 1) {
            if ($(".quote").css("opacity") == "1")
                $(".quote").fadeTo(500, 0);
        }
    }
}

function table() {
    $("#Wall").css("visibility", "hidden");
    $("#WallNum").css("visibility", "hidden");
    $("#WallBtn").css("cursor", "pointer");
    $("#WallBtnText").css("cursor", "pointer");

    $("#Irving").css("visibility", "hidden");
    $("#IrvingText").css("visibility", "hidden");
    $("#IrvingNum").css("visibility", "hidden");
    $("#IrvingBtn").css("visibility", "hidden");
    $("#IrvingBtnText").css("visibility", "hidden");

    $("#Davis").css("visibility", "hidden");
    $("#DavisText").css("visibility", "hidden");
    $("#DavisNum").css("visibility", "hidden");
    $("#DavisBtn").css("visibility", "hidden");
    $("#DavisBtnText").css("visibility", "hidden");

    $("#Wiggins").css("visibility", "hidden");
    $("#WigginsText").css("visibility", "hidden");
    $("#WigginsNum").css("visibility", "hidden");
    $("#WigginsBtn").css("visibility", "hidden");
    $("#WigginsBtnText").css("visibility", "hidden");

    $("#Towns").css("visibility", "hidden");
    $("#TownsText").css("visibility", "hidden");
    $("#TownsNum").css("visibility", "hidden");
    $("#TownsBtn").css("visibility", "hidden");
    $("#TownsBtnText").css("visibility", "hidden");

    $("#WallBtn").on("click", Wall);
    $("#WallBtnText").on("click", Wall);
    

}

function Wall() {
    $("#WallBtn").css("visibility", "hidden");
    $("#WallBtn").css("cursor", "auto");
    $("#WallBtnText").css("visibility", "hidden");

    $("#Wall").addClass("tableAnimation");
};