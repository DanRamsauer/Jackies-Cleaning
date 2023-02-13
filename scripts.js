const cleaningSite = {};

cleaningSite.init = () => {
    // call functions in here
}

cleaningSite.reviews = [
    {
        "id" : 1,
        "name": 'Daniel Ramsauer',
        "stars" : 5,
        "body" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi eligendi assumenda nihil nesciunt voluptate sunt porro facere accusantium et pariatur'
    },
    {
        "id" : 2,
        "name": 'Random name',
        "stars" : 5,
        "body" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi eligendi assumenda nihil nesciunt voluptate sunt porro facere accusantium et pariatur'
    },
    {
        "id" : 3,
        "name": 'lindsay lane',
        "stars" : 5,
        "body" : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi eligendi assumenda nihil nesciunt voluptate sunt porro facere accusantium et pariatur'
    },
];

cleaningSite.addingReviews = () => {
    cleaningSite.reviews.forEach(review => {
        return`
            <div class="review">
                <p>${review.name}</p>
                <div class="reviewStars">
                    ${cleaningSite.loadStars(review.stars)}
                </div>
                <p>${review.body}</p>
            </div>
        `;
    });
}

{/* <img src="./assets/star-regular.svg" alt="empty star svg"></img> */}
{/* <img src="./assets/star-half-stroke-regular.svg" alt="half star svg"></img> */}

cleaningSite.loadStars = (stars) => {
    const calculatedStars = [];
    for (let i = 0; i < Math.floor(stars); i++) {
        calculatedStars.push(`<img src="./assets/star-solid.svg" alt="a full star svg">`);
    }
    if(stars === 5) {
        return calculatedStars.map((item) => item).join('');
    }
    else if(Number.isInteger(stars)){
        for (let i = 0; i < 5 - stars; i++) {
            calculatedStars.push(`<img src="./assets/star-regular.svg" alt="empty star svg"></img>`);
        }
    }
    else{
        calculatedStars.push(`<img src="./assets/star-half-stroke-regular.svg" alt="half star svg"></img>`)
        for (let i = 0; i < 4 - Math.floor(stars); i++) {
            calculatedStars.push(`<img src="./assets/star-half-stroke-regular.svg" alt="half star svg"></img>`);
        }
    }
    return calculatedStars.map((item) => item).join('');
}

// create objects with the reviews in them
// create review divs with those objects
// add event listeners to moce the slider left and right
cleaningSite.test = () => {
    
}


cleaningSite.init();