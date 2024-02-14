/*Elementen*/
const myPage = document.querySelector("body");
const checkbox = document.querySelector("input[type='checkbox']");
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

const myRequest = new Request("https://larsvv99.github.io/web-app-from-scratch-2324/json/eigenschappen.json");

fetch(myRequest)
    .then((data) => {
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }

        return data.json();
    })
    .then((data) => {
        myNameButton.addEventListener("click", function () {
            if (checkbox.checked) {
                toggleInfoText(myNameButton.innerText, data.eend2.eendenNaam);
            } else {
                toggleInfoText(myNameButton.innerText, data.eend.eendenNaam);
            }
        });

        myAgeButton.addEventListener("click", function () {
            if (checkbox.checked) {
                toggleInfoText(myAgeButton.innerText, data.eend2.leeftijd.toString());
            } else {
                toggleInfoText(myAgeButton.innerText, data.eend.leeftijd.toString());
            }
        });

        myLakeButton.addEventListener("click", function () {
            if (checkbox.checked) {
                toggleInfoText(myLakeButton.innerText, data.eend2.woonVijver);
            } else {
                toggleInfoText(myLakeButton.innerText, data.eend.woonVijver);
            }
        });

        myCharacterButton.addEventListener("click", function () {
            if (checkbox.checked) {
                toggleInfoText(myCharacterButton.innerText, data.eend2.karakter);
            } else {
                toggleInfoText(myCharacterButton.innerText, data.eend.karakter);
            }
        });

        myBreadButton.addEventListener("click", function () {
            if (checkbox.checked) {
                toggleInfoText(myBreadButton.innerText, data.eend2.favorieteBrood);
            } else {
                toggleInfoText(myBreadButton.innerText, data.eend.favorieteBrood);
            }
        });

        myKwekButton.addEventListener("click", function () {
            if (checkbox.checked) {
                toggleInfoText(myKwekButton.innerText, data.eend2.kwikKwekKwak);
            } else {
                toggleInfoText(myKwekButton.innerText, data.eend.kwikKwekKwak);
            }
        });

        myTargetButton.addEventListener("click", function () {
            if (checkbox.checked) {
                toggleInfoText(myTargetButton.innerText, data.eend2.favorieteDoelwit[0].doelwit1);
            } else {
                toggleInfoText(myTargetButton.innerText, data.eend.favorieteDoelwit[0].doelwit1);
            }
        });
    });





// -----Unsplash API Target Images----- //
document.addEventListener('DOMContentLoaded', function () {
    getRandomTarget();
});
const accessKey = 'ONdhqjmgA1HbTqfRJzMzoA1AKmlO-gUalqVelRwlfBM'
function getRandomTarget() {

    // Make a request to the Unsplash API
    fetch(`https://api.unsplash.com/photos/random?query=portrait&client_id=${accessKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const backgroundUrl = data.urls.regular;
            document.querySelector("section:nth-of-type(4) article:nth-of-type(1) img").src = backgroundUrl;
            console.log(data)
        })
        .catch(error => console.error('Error fetching background image:', error));
}





// -----Kaartje met informatie----- //
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





// ------Thema wijziging----- //
function toggleAnimationClass() {
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


