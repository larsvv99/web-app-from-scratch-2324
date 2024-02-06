const myImage = document.querySelector("img");

const myRequest = new Request("https://larsvv99.github.io/web-app-from-scratch-2324/json/eigenschappen.json");
console.log(myRequest)
fetch(myRequest)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.blob();
    })
    .then((response) => {
        myImage.src = URL.createObjectURL(response);
    });

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