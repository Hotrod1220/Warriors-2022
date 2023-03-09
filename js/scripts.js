
var landingPageImgs = ["<img class='landing-page__img' src='imgs/IMG_0221.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0222.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0223.webp' alt='Team Animated Background'>", "<img class='landing-page__img' src='imgs/IMG_0225.webp' alt='Team Animated Background'>"];
var counter = 2;

setInterval(switchBackground, 3500);

function switchBackground() {
    console.log("Called background");
    console.log(counter);

    $('#landing-page__img').html(landingPageImgs[counter]);
    counter++;
    counter %= 4;
}