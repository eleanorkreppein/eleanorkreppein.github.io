window.addEventListener('load', getQuote)

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://www.boredapi.com/api/activity';

async function getQuote () {
    let text = await fetch(endpoint);
    let response = await text.text()

    let json_response = JSON.parse(response);
    console.log(json_response['activity']);
    displayQuote(json_response['activity']);
}

// window.onload = choosePic;
var myPix = ["download.jpg", "happyPerson1.jpg","happyPerson2.webp","happyPerson3.jpg", "happyPerson4.webp", "happyPerson5.jpg"];

function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPix").src = myPix[randomNum];
}



