
//how to access properties in an object
// tips on dealing with complex objects
// objects VS arrays

const myFavoriteMovie ={
    title: 'Strange',
    duration: 125,
    didWellInBoxOffice: true
}

const leastFavoriteMovie = { 
    title: ' Strange 2',
    duration: 160,
    didWellInBoxOffice: false
}

//console.log(" Bea's favorite Marvel movie", myFavoriteMovie)

// dot notation
const infoUserWantsToSee = 'duration'
// console.log('Info user wants to see: ', myFavoriteMovie.infoUserWantsToSee)
// console.log(" Bea's favorite Marvel Movie Title:", myFavoriteMovie.title)

// bracket notation
const infoUserWantsToSee2 = 'duration'
// console.log('Info user wants to see: ', myFavoriteMovie[infoUserWantsToSee])
// console.log(" Bea's favorite Marvel Movie Title:", myFavoriteMovie["title"])


myFavoriteMovie.title = ' Forest Gump '
myFavoriteMovie['title'] = ' Space Jam '
console.log(' favorite movie:', myFavoriteMovie)


const leastFavoriteMovieCopy= { 
    title: ' Strange 2',
    duration: 160,
    didWellInBoxOffice: false,
    screenWriters: [{
        name: ' John',
        previous: {
            1: "A", 
            2: "B"
        }
    },{
        name: ' Cristopher',
        previous: {
            1: "A", 
            2: "B"
        }
    }, {
        name: ' Frank',
        previous: {
            1: "A", 
            2: "B"
        }
    }]
}

const screenWriters = leastFavoriteMovieCopy.screenWriters
