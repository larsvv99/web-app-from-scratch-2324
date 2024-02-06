const myP = document.querySelector("p");

const myRequest = new Request("https://larsvv99.github.io/web-app-from-scratch-2324/json/eigenschappen.json");

fetch(myRequest)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.blob();
    })
    .then((response) => {
        myP.innerText = URL.createObjectURL(response);
    });
console.log(myRequest)

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
