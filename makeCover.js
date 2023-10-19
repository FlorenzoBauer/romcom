var makeNewButton = document.querySelector(".make-new-button");
var viewSaveButton = document.querySelector(".view-saved-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");



var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");

//- The *Show New Random Cover* and *Save Cover* buttons should be hidden.

makeNewButton.addEventListener("click", function() {
    saveCoverButton.classList.add("hidden");
    homeButton.classList.remove("hidden");
    randomCoverButton.classList.add("hidden");

    homeView.classList.add("hidden");
    savedView.classList.add("hidden");
    formView.classList.remove("hidden")
})
