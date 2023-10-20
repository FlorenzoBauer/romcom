// provided random index function
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// create a random cover
function createRandomCover() {
  var randomCoverIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var descriptorIndex1 = getRandomIndex(descriptors);
  var descriptorIndex2 = getRandomIndex(descriptors);

  var randomCover = {
    coverImg: covers[randomCoverIndex],
    title: titles[randomTitleIndex],
    tagline: `An adventure full of ${descriptors[descriptorIndex1]} and harrowing ${descriptors[descriptorIndex2]}`,
  };

  return randomCover;
}

// this should generate a tagline, but idk where to put it
function generateRandomTagline(){
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  return `An adventure full of ${descriptor1} and harrowing ${descriptor2}!`
}

//display the random cover
function displayRandomCover(){
  var randomCover = createRandomCover();
  var coverImage = document.querySelector('.cover-image');
  var coverTitle = document.querySelector('.cover-title');
  //var idkWhereTaglineIs = document.querySelector('.');

  coverImage.src = randomCover.coverImg;
  coverTitle.innerText = randomCover.title;
//  idkWhereTaglineIs.innerText = randomCover.tagline;
}

// Create variables targetting the relevant DOM elements here 👇

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view')

var randomCover = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveVButton = document.querySelector('.save-cover-button');
var viewSButton = document.querySelector('.view-saved-button');
var makeOwnButton = document.querySelector('.make-new-button');
// var randomButton = document.querySelector('random-cover-button');
// var makeOwnButton = document.querySelector('make-new-button');

// We've provided a few variables below


var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// Add your event listeners here 👇

homeButton.addEventListener('click', homeF);
saveVButton.addEventListener('click', savedF);
makeOwnButton.addEventListener('click', makeF);
randomCover.addEventListener('click', randomButton);
// Create your event handlers and other functions here 👇
function homeF(){
  homeButton.classList.add("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");

  homeView.classList.remove("hidden");
  
  makeOwnButton.classList.remove("hidden");
  viewSButton.classList.remove("hidden");
  saveVButton.classList.remove("hidden");
  randomCover.classList.remove("hidden");
}
function makeF(){

  homeView.classList.add("hidden");
  savedView.classList.add("hidden");

  makeOwnButton.classList.add("hidden");
  saveVButton.classList.add("hidden");
  viewSButton.classList.add("hidden");
  randomCover.classList.add("hidden");

  formView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
}
function savedF(){
  homeView.classList.add("hidden");
  formView.classList.add("hidden");

  randomCover.classList.add("hidden");
  makeOwnButton.classList.add("hidden");
  viewSButton.classList.add("hidden");
  saveVButton.classList.add("hidden");
  
  savedView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  
}

// random cover with random image, title, and tagline with 2 descriptors
// shuffle and generate a random cover each press

// provided random index function
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// create a random cover
function createRandomCover() {
  var randomCoverIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var descriptorIndex1 = getRandomIndex(descriptors);
  var descriptorIndex2 = getRandomIndex(descriptors);

  var randomCover = {
    coverImg: covers[randomCoverIndex],
    title: titles[randomTitleIndex],
    tagline: `An adventure full of ${descriptors[descriptorIndex1]} and harrowing ${descriptors[descriptorIndex2]}`,
  };

  return randomCover;
}

// this should generate a tagline, but idk where to put it
function generateRandomTagline(){
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  return `An adventure full of ${descriptor1} and harrowing ${descriptor2}!`
}

//display the random cover
function displayRandomCover(){
  var randomCover = createRandomCover();
  var coverImage = document.querySelector('.cover-image');
  var coverTitle = document.querySelector('.cover-title');
  //var idkWhereTaglineIs = document.querySelector('.');

  coverImage.src = randomCover.coverImg;
  coverTitle.innerText = randomCover.title;
//  idkWhereTaglineIs.innerText = randomCover.tagline;
}

// Create variables targetting the relevant DOM elements here 👇

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view')

var randomCover = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveVButton = document.querySelector('.save-cover-button');
var viewSButton = document.querySelector('.view-saved-button');
var makeOwnButton = document.querySelector('.make-new-button');
// var randomButton = document.querySelector('random-cover-button');
// var makeOwnButton = document.querySelector('make-new-button');

// We've provided a few variables below


var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// Add your event listeners here 👇

homeButton.addEventListener('click', homeF);
saveVButton.addEventListener('click', savedF);
makeOwnButton.addEventListener('click', makeF);
randomCover.addEventListener('click', randomButton);
// Create your event handlers and other functions here 👇
function homeF(){
  homeButton.classList.add("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");

  homeView.classList.remove("hidden");
  
  makeOwnButton.classList.remove("hidden");
  viewSButton.classList.remove("hidden");
  saveVButton.classList.remove("hidden");
  randomCover.classList.remove("hidden");
}
function makeF(){

  homeView.classList.add("hidden");
  savedView.classList.add("hidden");

  makeOwnButton.classList.add("hidden");
  saveVButton.classList.add("hidden");
  viewSButton.classList.add("hidden");
  randomCover.classList.add("hidden");

  formView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
}
function savedF(){
  homeView.classList.add("hidden");
  formView.classList.add("hidden");

  randomCover.classList.add("hidden");
  makeOwnButton.classList.add("hidden");
  viewSButton.classList.add("hidden");
  saveVButton.classList.add("hidden");
  
  savedView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  
}

// shuffle and generate a random cover each press

function randomButton(){
  var cove = getRandomIndex(covers);
  var title = getRandomIndex(titles)
  var descriptors1 = getRandomIndex(descriptors)
  var descriptors2 = getRandomIndex(descriptors)
  var newCover = createCover(cove, title, descriptors1, descriptors2);
  coverImage = newCover;
  displayRandomCover(newCover)
}









// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

