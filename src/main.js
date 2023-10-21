// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view')

var randomCover = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveVButton = document.querySelector('.save-cover-button');
var viewSButton = document.querySelector('.view-saved-button');
var makeOwnButton = document.querySelector('.make-new-button');
var createBookButton = document.querySelector('.create-new-book-button');
// var deleteButton = document.querySelectorAll('.mini-cover');
// We've provided a few variables below

var savedCovers = [];
var currentCover;
// Add your event listeners here 👇

homeButton.addEventListener('click', homeF);
makeOwnButton.addEventListener('click', makeF);
randomCover.addEventListener('click', randomButton);
createBookButton.addEventListener('click', makeMybook);
saveVButton.addEventListener('click', savedF);
viewSButton.addEventListener('click', viewSavedCovers);
// deleteButton.addEventListener('dblclick', deleteSavedCover);
// Create your event handlers and other functions here 👇

function viewSavedCovers(){
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  
  randomCover.classList.add("hidden");
  makeOwnButton.classList.add("hidden");
  viewSButton.classList.add("hidden");
  saveVButton.classList.add("hidden");
  
  savedView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  showSavedCovers();
}
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
  viewSavedCovers();
  saveCover();
  showSavedCovers();
 }
function showSavedCovers(){
  currentCover = createCover(coverImage.src, coverTitle.innerText, coverTagline1.innerText, coverTagline2.innerText);
  
  var savedCoversSection = document.querySelector('.saved-covers-section');
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
    <section class="mini-cover">
      <img class="cover-image" src=${savedCovers[i].coverImg}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>
    `
  }
}
function randomButton() {
  var cove = covers[getRandomIndex(covers)];
  var title = titles[getRandomIndex(titles)];
  var descriptors1 = descriptors[getRandomIndex(descriptors)];
  var descriptors2 = descriptors[getRandomIndex(descriptors)];
  coverImage.src = cove;
  coverTitle.innerText = title;
  coverTagline1.innerText = descriptors1;
  coverTagline2.innerText = descriptors2;
 
}
function makeMybook(event) {
  event.preventDefault();
  var userCover = document.querySelector('.user-cover').value;
  var userTitle = document.querySelector('.user-title').value;
  var userTagline1 = document.querySelector('.user-desc1').value;
  var userTagline2 = document.querySelector('.user-desc2').value;
    
    coverImage.src = userCover;
    coverTitle.innerText = userTitle;
    coverTagline1.innerText = userTagline1;
    coverTagline2.innerText = userTagline2;

      covers.push(userCover);
      titles.push(userTitle);
      descriptors.push(userTagline1, userTagline2);
  homeF();
}
// function makeBookInfo(event){
//   event.preventDefault();
//   covers.push(userCover);
//   titles.push(userTitle);
//   descriptors.push(userTagline1, userTagline2);
//   return makeMybook(),homeF()
// }
function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}
// function deleteSavedCover(event) {
//   var coverId = event.target.closest('.mini-cover').id;
//   for (var i = 0; i < savedCovers.length; i++) {
//     if (coverId === savedCovers[i].id) {
//       savedCovers.splice(i, 1);
//     }
//   }
//   showSavedCovers();
// }
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
  return cover;
}
