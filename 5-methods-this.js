// how to build methods
// how to use ` $this` 

// .push() .pop() .toUpperCase() .unshift() .splice()

const myFavoriteMovie ={
    title: 'Strange',
    duration: 125,
    didWellInBoxOffice: true, 
    sayItAlready: function () {
        console.log(" Bea's favorite movie is ", this.title)
    }
}

const leastFavoriteMovie = { 
    title: ' Strange 2',
    duration: 160,
    didWellInBoxOffice: false,
    sayItAlready: function () {
        console.log(" Bea's least favorite movie is Strange 2")
    }
}

//myFavoriteMovie.sayItAlready()
// leastFavoriteMovie.sayItAlready()

myFavoriteMovie.title = 'Fast And Furious'
// console.log('new Favorite Movie', myFavoriteMovie)
myFavoriteMovie.sayItAlready()
