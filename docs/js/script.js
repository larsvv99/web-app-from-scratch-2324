/*Elementen*/
const myPage = document.querySelector("body");
const myInfoTitle = document.querySelector("h2");
const myInfo = document.querySelector("p");
const myInfoField = document.querySelector("figcaption");

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

let infoFieldVisible = false;

// Functie om de tekst van myInfo en myInfoTitle te updaten en de zichtbaarheid van myInfoField te beheren
function toggleInfoText(newTitle, newText) {
    // Als het tekstvakje zichtbaar is en de nieuwe tekst hetzelfde is als de huidige tekst, verberg myInfoField
    if (infoFieldVisible && myInfo.innerText === newText && myInfoTitle.innerText === newTitle) {
        infoFieldVisible = false;
        myPage.classList.toggle("cardAnimation");

    } else {
        // Als het tekstvakje niet zichtbaar is of de nieuwe tekst anders is dan de huidige tekst, update de tekst en maak myInfoField zichtbaar
        myInfo.innerText = newText;
        myInfoTitle.innerText = newTitle;
        infoFieldVisible = true;
        myPage.classList.toggle("cardAnimation");
    }
}


const personalSiteInfo = {
    "eend": {
        "naam": "Lars",
        "leeftijd": 168,
        "eendenNaam": "Moquaak a.k.a. Redouan Kwakkie",
        "karakter": "Baldadig",
        "woonVijver": "Emiclaer vijver",
        "favorieteBrood": "Kwarkbrood",
        "kwikKwekKwak": "Kwik",
        "favorieteDoelwit": [
            {
                "doelwit1": "Gordon",
                "doelwit2": "Donald Duck",
                "doelwit3": "Redouan Kwakkie"
            }
        ]
    }
}