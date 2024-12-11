class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
    console.log(`This item is now ${this._isCheckedOut ? 'checked out' : 'available'}`)}
  addRating(rate) {
    if (rate >= 1 && rate <= 5) {
      this._ratings.push(rate);
    } else {
      console.log("Rates must be 1 - 5");
    }
    
  }
  get averageRating(){
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
  let average = ratingsSum / this._ratinglength || 0;
   console.log(`Average Rating: ${average}.`)
   return average }
  checkOut() {
    if (!this.isCheckedOut) {
      this.toggleCheckOutStatus();
      console.log("You have checked out");
    } else {
      console.log("Sorry this is checked out");
    }
  }
  totalRatings() {
    return this._ratings.length;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title, author, pages);
    this._title = title
    if(typeof author === 'string'){
    this._author = author;}else{
      console.log('Author not found')
    }
   if(typeof pages === 'number'){
    this._pages = pages;
  }else{
    console.log("invalid page")
  }
  }
  get author() {
    return this._author
  }
  get pages() {
    return this._pages
}
get title(){
  return this._title
}
}
class Movie extends Media {
  constructor(director, runTime) {
    super(director, runTime);
     if(typeof director === 'string'){
this._director = director;
}else{
  console.log('Invalid selection')
}
    if(typeof runTime === 'number'){
    this._runTime = runTime;
  }
  }
  get director() {
    return this._director
  }
  get runTime() {
    return this._runTime
}
}
class Cd extends Media {
  constructor(artist, songs) {
    super(artist, songs);
        if(typeof artist === 'string'){
this._artist = artist ;
}else{
  console.log('Invalid artist')
}
  if(Array.isArray(songs)){
    this._songs = songs;
  }
  else{
    console.log('Invalid song')
  }
  }
  get artist() {
    return this._artist
  }
  get songs() {
    return this._songs
}
}
const harry = new Book('Harry', 'HarryPotter', 543)
console.log(harry)
let historyOfEveryThing = harry;
historyOfEveryThing.toggleCheckOutStatus() 
console.log(historyOfEveryThing);
historyOfEveryThing.addRating(4)
historyOfEveryThing.addRating(5)
historyOfEveryThing.addRating(5)
console.log(historyOfEveryThing)

console.log(historyOfEveryThing.averageRating)
