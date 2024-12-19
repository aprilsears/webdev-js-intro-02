"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.

const resolutionElement = document.getElementById("resolution");
const willMeetResolutionElement = document.getElementById("will-meet-resolution");
const yearElement = document.getElementById("year");
const submissionBtn = document.getElementById("submission-btn");

// Declare your variables here.
const resolution = "I don't set resolutions for the New Year"; 
const currentYear = 2025;
let willMeetResolution = false;
function updateYear() {
    // Update this function
    yearElement.textContent = currentYear;

}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution;

}

function updateWillMeetResolution() {
    // Update this function
    willMeetResolutionElement.textContent = willMeetResolution;
}

function render() {
    // Update this function
    updateResolution();
    updateYear();
    updateWillMeetResolution();

}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
})
