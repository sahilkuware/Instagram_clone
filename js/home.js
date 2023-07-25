

// follow or following
function toggleFollow() {
    const followButtons = document.querySelectorAll(".follow");

    followButtons.forEach(button => {
        if (button.textContent === "Follow") {
            button.textContent = "Following";
        } else if (button.textContent === "Following") {
            button.textContent = "Follow";
        }
    });
}
// like button

function toggleLike(button) {
    button.classList.toggle("active");
}

// save button
function toggleLike(button){
    button.classList.toggle("active");
}



// pause play reel
const videoElements = document.querySelectorAll(".autoplay");

videoElements.forEach(videoElement => {
  videoElement.addEventListener("click", togglePlay);
});

function togglePlay() {
  if (this.paused || this.ended) {
    this.play();
  } else {
    this.pause();
  }
}

// purva
function onIconClick(iconType) {
    // Your code to handle the icon click
    console.log('Icon clicked:', iconType);
}

function onUserClick(username) {
    // Your code to handle the user click
    console.log('User clicked:', username);
}

$(function(){
    $("#header").load("header.html");
})