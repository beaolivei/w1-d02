// loops that we know
// loops that works with objects

//(forEach(), map()) c-style, for of, for in 

const myFavoriteMovies = [' Strange ', 'Iron Man',' Jurrassic Park', ' Spiderman']


const leastFavoriteMovie= { 
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
const objectValues = Object.values(leastFavoriteMovie)
// console.log(' values' , Object.values(leastFavoriteMovie)) 
//c-style
// for (let i=0; i < myFavoriteMovies.length; i++){
//     console.log('movie with c-style', myFavoriteMovies[i])
// }

for (let i=0; i < objectValues.length; i++){
    console.log('values loop with c-style', objectValues[i])
}

// for of

// for (let movie of myFavoriteMovies){
//     console.log(' movie with for ...of', movie)
// }

// for in 

// for( let movieIndex in leastFavoriteMovie){
//     console.log('object values: ', leastFavoriteMovie[movieIndex])
// }

