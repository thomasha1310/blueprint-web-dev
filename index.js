function showPopup() {
    alert("Hello!");
}

function getImageByBreed() {
    let breed = document.getElementById("search").value;
    breed.replace(" ", "-");
    breed.toLowerCase();

    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    let response = fetch(url);
    response.then((response) => response.json()).then(function(response) {
        if (response.code == 404) {
            alert("Breed not found!");
            return;
        }
        let img = document.getElementById("dog-image");
        img.src = response.message;
    });
}

function getImageRandom() {
    let url = "https://dog.ceo/api/breeds/image/random";
    let response = fetch(url);
    response.then((response) => response.json()).then(function(response) {
        let img = document.getElementById("dog-image");
        img.src = response.message;
    });
}