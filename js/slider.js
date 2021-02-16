
let arrowLeft = document.getElementById('scroll-left');
let arrowRight = document.getElementById('scroll-right');

arrowLeft.addEventListener('click', scrollToLeft);
arrowRight.addEventListener('click', scrollToRight);

let thumbList = document.getElementById('gallery-thumb-list');

const slideImages = [
    {
        id: 0,
        src: './img/pink-sky-sm.jpg',
        alt: 'pink sky'
    },
    {
        id: 1,
        src: './img/blue-sky-sm.jpg',
        alt: 'blue sky'
    },
    {
        id: 2,
        src: './img/starry-sky-sm.jpg',
        alt: 'starry sky'
    },
]

function createThumbs() {
    for (i = 0; i < slideImages.length; i++) {
        let li = document.createElement('li');
        li.classList.add('thumblist-item');
        li.addEventListener('click', showEnlarged);

        let img = document.createElement('img');
    img.src =  slideImages[i].src;
        img.alt = slideImages[i].alt;
        img.id =  slideImages[i].id; 

        img.classList.add('slide-thumb');
        li.appendChild(img);
        thumbList.appendChild(li);
    }
}

createThumbs();

function scrollToRight() {
    let image = document.getElementsByClassName('slide-image')[0];
    let newId = 0;

    image.id == slideImages[slideImages.length - 1].id ?  newId = 0 : newId = parseInt(image.id) + 1;
    let newImage = slideImages.find(el => el.id === newId);
    image.src = newImage.src;
    image.id = newImage.id;
    image.alt = newImage.alt;
}

function scrollToLeft() {
    let image = document.getElementsByClassName('slide-image')[0];
    let newId = 0;
    
    image.id == 0 ?  newId = slideImages[slideImages.length - 1].id :  newId =  parseInt(image.id) - 1;
    let newImage = slideImages.find(el => el.id === newId);

    image.src = newImage.src;
    image.id = newImage.id;
    image.alt = newImage.alt;
}

function showEnlarged() {
    let image = document.getElementsByClassName('slide-image')[0];

    image.src = event.target.src;
    image.id = event.target.id;
    image.alt = event.target.alt;
}
