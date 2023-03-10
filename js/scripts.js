var landingPageImgs = ["<img class='landing-page__img' src='imgs/IMG_0221.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0222.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0223.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0225.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0226.webp' alt='Team Animated Background'>"];
var counter = 2;
var quotePos;
var quoteYPos
var quoteList;
var windowHeight;
var nextName;
var pos;
var posY;
var goldPoints1 = [123, 126, 118, 121, 102]; 
var oppPoints1 = [107, 106, 113, 126, 88]; 
var goldPoints2 = [117, 101, 142, 101, 95, 110]; 
var oppPoints2 = [116, 106, 112, 98, 134, 96]; 
var goldPoints3 = [112, 126, 109, 109, 120]; 
var oppPoints3 = [87, 117, 100, 119, 110]; 
var goldPoints4 = [108, 107, 100, 107, 104, 103]; 
var oppPoints4 = [120, 88, 116, 97, 94, 90]; 

setInterval(switchBackground, 3000);

$(document).on("scroll", showQuote);
$(document).on("scroll", improvedWiggins);
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

    $("#WallBtn").on("click", animate);
    $("#WallBtnText").on("click", animate);
    
    $("#WallBtnText").on("mouseover", function () {
        $("#WallBtn").css("fill", "#26282A");
    });
    $("#WallBtnText").on("mouseout", function () {
        $("#WallBtn").css("fill", "#006BB6");
    });


    $("#IrvingBtn").on("click", animate);
    $("#IrvingBtnText").on("click", animate);

    $("#IrvingBtnText").on("mouseover", function () {
        $("#IrvingBtn").css("fill", "#26282A");
    });
    $("#IrvingBtnText").on("mouseout", function () {
        $("#IrvingBtn").css("fill", "#006BB6");
    });

    $("#DavisBtn").on("click", animate);
    $("#DavisBtnText").on("click", animate);

    $("#DavisBtnText").on("mouseover", function () {
        $("#DavisBtn").css("fill", "#26282A");
    });
    $("#DavisBtnText").on("mouseout", function () {
        $("#DavisBtn").css("fill", "#006BB6");
    });

    $("#TownsBtn").on("click", animate);
    $("#TownsBtnText").on("click", animate);
    
    $("#TownsBtnText").on("mouseover", function () {
        $("#TownsBtn").css("fill", "#26282A");
    });
    $("#TownsBtnText").on("mouseout", function () {
        $("#TownsBtn").css("fill", "#006BB6");
    });

    $("#WigginsBtn").on("click", animate);
    $("#WigginsBtnText").on("click", animate);

    $("#WigginsBtnText").on("mouseover", function () {
        $("#WigginsBtn").css("fill", "#26282A");
    });
    $("#WigginsBtnText").on("mouseout", function () {
        $("#WigginsBtn").css("fill", "#006BB6");
    });
}

function animate() {
    idName = this.id;
    console.log(idName);
    if(idName == "WallBtn" || idName == "WallBtnText") {
        idName = "Wall"
        nextName = "Irving";
    } else if (idName == "IrvingBtn" || idName == "IrvingBtnText") {
        idName = "Irving"
        nextName = "Davis";
    } else if (idName == "DavisBtn" || idName == "DavisBtnText") {
        idName = "Davis"
        nextName = "Towns";
    } else if (idName == "TownsBtn" || idName == "TownsBtnText") {
        idName = "Towns"
        nextName = "Wiggins";
    } else {
        idName = "Wiggins"
        nextName = "End";
    }
    
    $("#" + idName + "Btn").css("visibility", "hidden");
    $("#" + idName + "Btn").css("cursor", "auto");
    $("#" + idName + "BtnText").css("visibility", "hidden");
    
    $("#" + idName).css("visibility", "visible");
    $("#" + idName).addClass("tableAnimation");

    $("#" + idName + "Num").css("visibility", "visible");

    if (nextName != "End") {
        $("#" + nextName + "Text").css("visibility", "visible");
        $("#" + nextName + "Btn").css("visibility", "visible");
        $("#" + nextName + "BtnText").css("visibility", "visible");
        $("#" + nextName + "Btn").css("cursor", "pointer");
        $("#" + nextName + "BtnText").css("cursor", "pointer");
    }
};

function improvedWiggins() {
    let temp = document.getElementById("improvedWigginsStart");
    pos = temp.getBoundingClientRect();
    posY = pos.top;

    if(posY < $(window).height() && posY > 0) {
        $(".improvedWiggins__text").css("animation-name", "textAni");
        $(".improvedWiggins__text").css("visibility", "visible");
        $(".improvedWiggins__text2").css("animation-name", "textAni");
        $(".improvedWiggins__text2").css("visibility", "visible");
        $(".arrow").css("animation-name", "arrowAni");
        $(".arrow").css("visibility", "visible");
    }
}
