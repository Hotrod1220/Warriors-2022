var landingPageImgs = ["<img class='landing-page__img' src='imgs/IMG_0221.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0222.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0223.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0225.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0226.webp' alt='Team Animated Background'>"];
var counter = 2;
var disCounter = 0;
var idName;
var seriesNum;
var quotePos;
var quoteYPos
var quoteList;
var windowHeight;
var nextName;
var pos;
var posY;
var contentGold;
var contentOpp;
var pointsCounter = 0;
var seriesOver = false;
var seriesCounterGold = 0;
var seriesCounterOpp = 0;
var goldPoints1 = [123, 126, 118, 121, 102];
var oppPoints1 = [107, 106, 113, 126, 88];
var goldPoints2 = [117, 101, 142, 101, 95, 110];
var oppPoints2 = [116, 106, 112, 98, 134, 96];
var goldPoints3 = [112, 126, 109, 109, 120];
var oppPoints3 = [87, 117, 100, 119, 110];
var goldPoints4 = [108, 107, 100, 107, 104, 103];
var oppPoints4 = [120, 88, 116, 97, 94, 90];
var seriesComplete = [false, false, false, false];
var scrollDown = "<span class='material-symbols-outlined'>keyboard_double_arrow_down</span>";

setInterval(switchBackground, 3000);
setInterval(count, 1000);

$(document).on("scroll", showQuote);
$(document).on("scroll", improvedWiggins);
$(document).on("scroll", count);
$(document).on("scroll", stopScroll);
$(".button").on("click", showScore)
table();
$(".popop__link--PIE").on("click", function () {
    $("#popup--PIE").css("visibility", "visible");
    $("#popup--PIE").css("opacity", 1);
})
$(".close").on("click", function () {
    $(".overlay").css("visibility", "hidden");
    $(".overlay").css("opacity", "0");
});
$(".popop__link--BPI").on("click", function () {
    $("#popup--BPI").css("visibility", "visible");
    $("#popup--BPI").css("opacity", 1);
})
$("#popup1__link").on("click", function () {
    $("#popup1").css("visibility", "visible");
    $("#popup1").css("opacity", 1);
})
$("#popup2__link").on("click", function () {
    $("#popup2").css("visibility", "visible");
    $("#popup2").css("opacity", 1);
})


function switchBackground() {
    $('#landing-page__img').html(landingPageImgs[counter]);
    counter++;
    counter %= 5;
}

function showQuote() {
    quoteList = document.getElementsByClassName("quote");
    windowHeight = $(window).height() * 0.6;
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
    if (idName == "WallBtn" || idName == "WallBtnText") {
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

    if (posY < $(window).height() && posY > 0) {
        $(".improvedWiggins__text").css("animation-name", "textAni");
        $(".improvedWiggins__text").css("visibility", "visible");
        $(".improvedWiggins__text2").css("animation-name", "textAni");
        $(".improvedWiggins__text2").css("visibility", "visible");
        $(".arrow").css("animation-name", "arrowAni");
        $(".arrow").css("visibility", "visible");
    }
}

function count() {
    let temp = document.getElementById("klayReturn");
    pos = temp.getBoundingClientRect();
    posY = pos.top;

    if (posY < $(window).height() && posY > 0) {
        $("#klayReturn").css("animation", "counter 5s linear");
    }
}

$("#round2").css("display", "none");
$("#round3").css("display", "none");
$("#round4").css("display", "none");
$("#champs").css("display", "none");
$(".footer").css("display", "none");

function stopScroll() {
    for (let i = 1; i < 5; i++) {
        let temp = document.getElementById("series" + i);
        pos = temp.getBoundingClientRect();
        posY = pos.top;

        if (posY == 0)
            break;

        if (posY < $(window).height() * 0.95 && !seriesComplete[i - 1]) {
            $("html, body").css("overflow", "hidden");
        }
    }
}

function showScore() {
    idName = "#" + this.id;
    seriesNum = parseInt(idName[idName.length - 1]);

    if (seriesNum == 1) {
        contentGold = goldPoints1[pointsCounter];
        contentOpp = oppPoints1[pointsCounter];
        pointsCounter++;
        if (pointsCounter == 5) {
            seriesOver = true;
        }
    }
    else if (seriesNum == 2) {
        contentGold = goldPoints2[pointsCounter];
        contentOpp = oppPoints2[pointsCounter];
        pointsCounter++;
        if (pointsCounter == 6) {
            seriesOver = true;
        }
    }
    else if (seriesNum == 3) {
        contentGold = goldPoints3[pointsCounter];
        contentOpp = oppPoints3[pointsCounter];
        pointsCounter++;
        if (pointsCounter == 5) {
            seriesOver = true;
        }
    }
    else if (seriesNum == 4) {
        contentGold = goldPoints3[pointsCounter];
        contentOpp = oppPoints3[pointsCounter];
        pointsCounter++;
        if (pointsCounter == 6) {
            seriesOver = true;
        }
    }

    $("#gameCount" + seriesNum).html("Game " + pointsCounter);
    $("#button" + seriesNum).html("Game " + (pointsCounter + 1) + " Result");

    if (contentGold > contentOpp) {
        seriesCounterGold++;
        $("#gold__series--" + seriesNum).html(seriesCounterGold);
        $("#gold__series--" + seriesNum).css("opacity", "0");
        $("#gold__series--" + seriesNum).fadeTo(500, 1);
    } else {
        seriesCounterOpp++;
        $("#opp__series--" + seriesNum).html(seriesCounterOpp);
        $("#opp__series--" + seriesNum).css("opacity", "0");
        $("#opp__series--" + seriesNum).fadeTo(500, 1);
    }

    if (seriesOver) {
        pointsCounter = 0;
        $(idName).removeClass("button");
        $(idName).html(scrollDown);
        $(idName).unbind("click");
        seriesComplete[seriesNum - 1] = true;
        if (seriesNum == 4) {
            $("#champs").css("display", "block");
            $(".footer").css("display", "block");
            $("#quoteFinal").addClass("quote");
        } else {
            $("#round" + (seriesNum + 1)).css("display", "block");
        }
        $("html, body").css("overflow", "visible");

        seriesOver = false;
        seriesCounterGold = 0;
        seriesCounterOpp = 0;
    }

    $("#gold__points--" + seriesNum).html(contentGold);
    $("#gold__points--" + seriesNum).css("opacity", "0");
    $("#gold__points--" + seriesNum).fadeTo(500, 1);

    $("#opp__points--" + seriesNum).html(contentOpp);
    $("#opp__points--" + seriesNum).css("opacity", "0");
    $("#opp__points--" + seriesNum).fadeTo(500, 1);
}