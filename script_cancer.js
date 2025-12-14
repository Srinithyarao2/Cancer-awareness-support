const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

function loadQuote() {
    fetch("https://api.quotable.io/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quoteElement.innerText = '"' + data.content + '"';
            authorElement.innerText = "— " + data.author;
        })
        .catch(function () {
            quoteElement.innerText = "Hope gives strength to fight every battle.";
            authorElement.innerText = "";
        });
}

loadQuote();