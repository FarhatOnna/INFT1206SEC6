const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const image = [`pic1.jpg`,`pic2.jpg`,`pic3.jpg`,`pic4.jpg`,`pic5.jpg`];
const alts = {
    'pic1.jpg' : 'closeup of a blue human eye',
    'pic2.jpg' : 'photo of a rock',
    'pic3.jpg' : 'purple and white flower',
    'pic4.jpg' : 'picture of a tomb',
    'pic5.jpg' : 'Butterfly on a leaf'
}
/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
