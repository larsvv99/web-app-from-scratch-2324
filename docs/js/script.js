/*Elementen*/
const myPage = document.querySelector("body");
const myInfoTitle = document.querySelector("h2");
const myInfo = document.querySelector("p");
const myInfoField = document.querySelector("figcaption");
const myDuck = document.querySelector("img");

/*Buttons*/
const myNameButton = document.querySelector("section:nth-of-type(1) ul li:nth-of-type(1) button");
const myAgeButton = document.querySelector("section:nth-of-type(1) ul li:nth-of-type(2) button");
const myLakeButton = document.querySelector("section:nth-of-type(1) ul li:nth-of-type(3) button");
const myCharacterButton = document.querySelector("section:nth-of-type(3) ul li:nth-of-type(1) button");
const myBreadButton = document.querySelector("section:nth-of-type(3) ul li:nth-of-type(2) button");
const myKwekButton = document.querySelector("section:nth-of-type(3) ul li:nth-of-type(3) button");
const myTargetButton = document.querySelector("section:nth-of-type(3) ul li:nth-of-type(4) button");

console.log(myPage)

const myRequest = new Request("https://larsvv99.github.io/web-app-from-scratch-2324/json/eigenschappen.json");

fetch(myRequest)
    .then((data) => {
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }

        return data.json();
    })
    .then((data) => {
        console.log(data)
        console.log(data.eend.naam)


        myNameButton.addEventListener("click", function () {
            toggleInfoText(myNameButton.innerText, data.eend.eendenNaam);
        });

        myAgeButton.addEventListener("click", function () {
            toggleInfoText(myAgeButton.innerText, data.eend.leeftijd.toString());
        });

        myLakeButton.addEventListener("click", function () {
            toggleInfoText(myLakeButton.innerText, data.eend.woonVijver);
        });

        myCharacterButton.addEventListener("click", function () {
            toggleInfoText(myCharacterButton.innerText, data.eend.karakter);
        });

        myBreadButton.addEventListener("click", function () {
            toggleInfoText(myBreadButton.innerText, data.eend.favorieteBrood);
        });

        myKwekButton.addEventListener("click", function () {
            toggleInfoText(myKwekButton.innerText, data.eend.kwikKwekKwak);
        });

        myTargetButton.addEventListener("click", function () {
            toggleInfoText(myTargetButton.innerText, data.eend.favorieteDoelwit[0].doelwit1);
        });
    });

// // API background images //
// document.addEventListener('DOMContentLoaded', function () {
//     getRandomBackground();
// });
// const accessKey = 'ONdhqjmgA1HbTqfRJzMzoA1AKmlO-gUalqVelRwlfBM'
// function getRandomBackground() {

//     // Make a request to the Unsplash API
//     fetch(`https://api.unsplash.com/photos/random?query=background&client_id=${accessKey}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Network response was not ok: ${response.statusText}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             const backgroundUrl = data.urls.regular;
//             document.querySelector("section:nth-of-type(2)").style.backgroundImage = `url(${backgroundUrl})`;
//         })
//         .catch(error => console.error('Error fetching background image:', error));
// }

window.addEventListener("scroll", () => {
    const img = document.getElementsByClassName("animated-img");
    const imgRect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (imgRect.top >= 0 && imgRect.bottom <= windowHeight) {
        const scrollPercent = (window.pageYOffset + windowHeight - imgRect.top) / imgRect.height;
        img.style.setProperty("--scroll", scrollPercent);
    }
});




let infoFieldVisible = false;

// Functie om de tekst van myInfo en myInfoTitle te updaten en de zichtbaarheid van myInfoField te beheren
function toggleInfoText(newTitle, newText) {
    // Als het tekstvakje zichtbaar is en de nieuwe tekst hetzelfde is als de huidige tekst, verberg myInfoField
    if (infoFieldVisible && myInfo.innerText === newText && myInfoTitle.innerText === newTitle) {
        infoFieldVisible = false;
        myPage.classList.remove("cardAnimation");

    } else {
        // Als het tekstvakje niet zichtbaar is of de nieuwe tekst anders is dan de huidige tekst, update de tekst en maak myInfoField zichtbaar
        myInfo.innerText = newText;
        myInfoTitle.innerText = newTitle;
        infoFieldVisible = true;
        myPage.classList.add("cardAnimation");
    }
}


/*Thema wijziging*/
function toggleAnimationClass() {
    const checkbox = document.querySelector("input[type='checkbox']");

    console.log(checkbox)
    if (checkbox.checked) {
        myPage.classList.add("checked");
        myPage.classList.remove("cardAnimation");
        myDuck.src = "./images/badeendje_horror3.png"

    } else {
        myPage.classList.remove("checked");
        myPage.classList.remove("cardAnimation");
        myDuck.src = "./images/badeendje.png"


    }
}

document.querySelector("input[type='checkbox']").addEventListener("change", toggleAnimationClass);