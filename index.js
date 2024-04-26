/**
 * JavaScript functionality for sentiment rating system.
 * 
 * This script handles the functionality of rating sentiments and displaying correpsonding emotions.
 * It utilizes HTML elements with specific IDs and classes for interaction
 * 
 * @file This file contains the following functionality:
 * - Event listeners for mouseover and mouseout events on sentiment images to play audio
 * - Event listener for a button click to hangle submission and navigation
 * - Functions to handle submission of sentiment ratings and navigation actions
 * - Arrays to store sentiment texts and references to HTML elements
 */

//Get references to HTML elements
var btn = document.getElementsByClassName("submit"); // Button element
var sentiment_select = document.getElementsByName("rating"); //Radio buttons for sentiment rating
var sentiment_text = document.getElementById("sentiment_text"); //Text element to display sentiment

//Array of emotion texts corresponding to sentiment ratings
var emotion_text = ["I am angry at work!", 
"Feeling a little irritable",
"Just So So",
"It's Okay",
"I'm satisfied with today's work!"
];

//Audio element for playing sound on mouseover
var audio = document.getElementById("myAudio"); 
//Collection of sentiment images
var images = document.querySelectorAll(".sentiment_img");

//Event listeners for mouseover and mouseout events on sentimentimages
images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        audio.play(); //play audio
    });

    image.addEventListener('mouseout', function() {
        audio.pause(); //Pause audio
        audio.currentTime = 0; // reset audio to the beginning
    });
});

//Event listener for button click
document.getElementById("myButton").addEventListener("click", handleButtonClick);

//Function to handle submission of sentiment ratings
function submit() {
    for(var i = 0; i < sentiment_select.length; i++) {
        var img = sentiment_select[i].nextElementSibling;
        if(sentiment_select[i].checked) {
            //Hide radio button and display corresponding image and text
            sentiment_select[i].style.display = "none";
            img.style.display = "block";
            img.style.margin = "0 auto";
            sentiment_text.textContent = emotion_text[i];
        } else {
            //Hide radio button and its parent container
            sentiment_select[i].style.display = "none";
            sentiment_select[i].parentNode.style.display = "none";
            img.style.display = "none";
        }
    }
    // Display sentiment text
    sentiment_text.style.display = "inline";
    sentiment_text.margin = "0 auto";
    audio.muted = true; //mute audio
}

//Function to handle button click events
function handleButtonClick() {
    var button = document.getElementById("myButton");
    if (button.innerText == "Submit") {
        //Handle submission and change button text
        submit();
        button.innerText = "Go Back";
        button.onclick = function() {
            goBack(); // Change button action to go back
        };
    }
}
 
//Function to reload page
function goBack() {
    window.location.reload();
}