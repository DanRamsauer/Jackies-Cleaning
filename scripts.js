const cleaningSite = {};

cleaningSite.init = () => {
    // call functions in here
    cleaningSite.puttingHtmlOnPage();
}

const reviews = document.querySelector('.reviews');
const arrowRight = document.querySelector('#arrowRight');
const arrowLeft = document.querySelector('#arrowLeft');
let slideIndex = 0;

// creating our reviews data
cleaningSite.reviews = [
    {
        "id" : 1,
        "name": 'John Wick',
        "stars" : 5,
        "body" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi eligendi assumenda nihil nesciunt voluptate sunt porro facere accusantium et pariatur'
    },
    {
        "id" : 2,
        "name": 'Jason Bourne',
        "stars" : 4,
        "body" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi eligendi assumenda nihil nesciunt voluptate sunt porro facere accusantium et pariatur'
    },
    {
        "id" : 3,
        "name": 'Aquaman',
        "stars" : 4.5,
        "body" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi eligendi assumenda nihil nesciunt voluptate sunt porro facere accusantium et pariatur'
    },
];

// 1. ceating a function that loops through our reviews array above and for each object were pushing that onto the page
cleaningSite.addingReviews = (review) => {
    return `
        <div class="review">
            <h4>${review.name}</h4>
            <div className="reviewStars">
                ${cleaningSite.loadStars(review.stars)}
            </div>
            <p>${review.body}</p>
        </div>
    `;
}

// just putting appending the html into a function
cleaningSite.puttingHtmlOnPage = () => {
    reviews.innerHTML = cleaningSite.reviews.map(cleaningSite.addingReviews).join('');
}

// 2. created a function to load the right stars for the reviews if its empty or hald a star
cleaningSite.loadStars = (stars) => {
    const calculatedStars = [];
    // looping through the stars and pushing the appropriate amount into the calculatedStars array
    for (let i = 0; i < Math.floor(stars); i++) {
        calculatedStars.push(`<i class="fa-solid fa-star"></i>`);
    }
    // if theres 5 stars its going to be all full stars
    if(stars === 5) {
        return calculatedStars.map((item) => item).join('');
    }
    // if theres empty stars so less than 5 push empty stars into the array
    else if(Number.isInteger(stars)){
        for (let i = 0; i < 5 - stars; i++) {
            calculatedStars.push(`<i class="fa-regular fa-star"></i>`);
        }
    }
    // if theres a .5 push the half star into the array
    else{
        calculatedStars.push(`<i class="fa-solid fa-star-half-stroke"></i>`)
        for (let i = 0; i < 4 - Math.floor(stars); i++) {
            calculatedStars.push(`<i class="fa-solid fa-star-half-stroke"></i>`);
        }
    }
    // returning all the stars and pushing the all into an empty array and joining them into a string with no spaces
    return calculatedStars.map((item) => item).join('');
}

// 3. creating a function for the arrow event listeners
cleaningSite.moveSlider = (e) => {
    // when you click the right arrow have adding reviews filter up an id
    if(e.currentTarget.id.includes('Right')){
        // if your clicking the right arrow shift the div to the right
        slideIndex === cleaningSite.reviews.length - 1 ? (slideIndex = 0) : slideIndex++;
    } else {
        // if your clicking the left arrow shift the div to the left
        slideIndex === 0 ? (slideIndex = cleaningSite.reviews.length - 1) : slideIndex--;
    }
    // once its clicked its shifting the whole reviews div all the way to the side its clicked
    reviews.style.transform = `translate(${-100 * slideIndex}%)`;
}


// adding event listeners on the arrows and passing along moveSlider fuinction
arrowRight.addEventListener('click', cleaningSite.moveSlider);
arrowLeft.addEventListener('click', cleaningSite.moveSlider);

cleaningSite.init();