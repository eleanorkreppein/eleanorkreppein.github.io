const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const carousel = ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png"]
const alt = {
/* Declaring the alternative text for each image file */
    "pic1.png" : "Florence,Italy",
    "pic2.png" : "Rome,Italy",
    "pic3.png" : "Paris,France",
    "pic4.png" : "Venice,Italy",
    "pic5.png" : "Berlin,Germany",
}

/* Looping through images */
for (const image of carousel) {
    const newPicture = document.createElement('img');
    newPicture.setAttribute('src', `img/${image}`);
    newPicture.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newPicture);
    newPicture.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})