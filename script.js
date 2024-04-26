/**
 * JavaScript functionality for sentiment rating system.
 * 
 * This script enhances a sentiment rating system by providing audio feedback and animation based on user selections
 * It dynamically creates elements to display sentiment messages and applies animations to sentiment images
 * 
 * @file This file contains the following functionality:
 * - Event listener for a button click to hangle submission and navigation
 * - Event listener for changes in the sentiment widget to display sentiment messages, play audio, and apply animations
 * - Dynamically creates elements to display sentiment essages
 * - Defines configuration for each sentiment including text, audio and animation
 * - Defines keyframe animations for different sentiments
 * - Event listeners for mouseover and mouseout events on sentiment images to play audio
 * - Functions to handle submission of sentiment ratings and navigation actions
 */
//Get references to HTML elements
var btn = document.getElementsByClassName("submit"); //Button element
var sentiment_select = document.getElementsByName("rating");//Radio buttons for sentiment rating
var sentiment_text = document.getElementById("sentiment_text");//Text element to display sentiment
var emotion_text = ["Oh no, that sounds tough 😢", 
"Cheer up, tomorrow is another day! 😟",
"Sounds like a regular day! 😐",
"Glad you had a good day! 😄",
"Wow, that’s amazing! 🤩"
]; // Array of emotion texts corresponding to sentiment ratings
var audio = document.getElementById("myAudio");//Audio element for playing sound on mouseover
var images = document.querySelectorAll(".sentiment_img");//Collection of sentiment images

//Event listener for button click
document.getElementById("myButton").addEventListener("click", handleButtonClick);

//Event listener for DOMContentLoaded to create sentiment output element 
document.addEventListener('DOMContentLoaded', function() {
    //Create sentiment output element
    const sentimentWidget = document.querySelector('.sentiment-widget');
    const sentimentOutput = document.createElement('div');
    sentimentOutput.id = 'sentiment-output';
    sentimentOutput.style.position = 'fixed';
    sentimentOutput.style.top = '20%';
    sentimentOutput.style.left = '50%';
    sentimentOutput.style.transform = 'translateX(-50%)';
    sentimentOutput.style.padding = '10px 20px';
    sentimentOutput.style.background = 'rgba(0, 0, 0, 0.7)';
    sentimentOutput.style.color = 'white';
    sentimentOutput.style.borderRadius = '10px';
    sentimentOutput.style.display = 'none';
    document.body.appendChild(sentimentOutput);

    // Configuration for each sentiment
    //To each sentiment, a text is added, as well as audio and an animation
    //When the image is pressed this these are the audios and texts that will be displayed
    const sentiments = {
        '1': { text: 'Oh no, that sounds tough 😢', audio: './audio/hoes-mad.mp3', animation: 'shake' },
        '2': { text: 'Cheer up, tomorrow is another day! 😟', audio: './audio/trumpet-e4-14829.mp3', animation: 'jiggle' },
        '3': { text: 'Sounds like a regular day! 😐', audio: './audio/alright-button-mash.mp3',animation: 'pulse' },
        '4': { text: 'Glad you had a good day! 😄', audio: './audio/ui.mp3', animation: 'bounce' },
        '5': { text: 'Wow, that’s amazing! 🤩', audio: './audio/anime-wow-sound-effect.mp3', animation: 'tada' }
    };

    // Listen for changes in the sentiment widget
    sentimentWidget.addEventListener('change', function(event) {
        if (event.target.type === 'radio') {
            const ratingValue = event.target.value;
            const sentimentInfo = sentiments[ratingValue];
            const selectedImage = event.target.nextElementSibling;
            
            // Show sentiment message
            sentimentOutput.textContent = sentimentInfo.text;
            sentimentOutput.style.display = 'block';

            // Play Audio
            const audio = new Audio(sentimentInfo.audio);
            audio.play();
            
            // Play animation
            selectedImage.style.animation = `${sentimentInfo.animation} 1s ease`;
            setTimeout(() => {
                selectedImage.style.animation = '';
                sentimentOutput.style.display = 'none';
            }, 1000);
        }
    });
});

// Keyframe animations for different sentiments
document.styleSheets[0].insertRule(`@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
}`, 0);

document.styleSheets[0].insertRule(`@keyframes jiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(3deg); }
    75% { transform: rotate(-3deg); }
}`, 0);

document.styleSheets[0].insertRule(`@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}`, 0);

document.styleSheets[0].insertRule(`@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}`, 0);

document.styleSheets[0].insertRule(`@keyframes tada {
    0% { transform: scale(1) rotate(0deg); }
    10%, 20% { transform: scale(0.9) rotate(-3deg); }
    30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
    40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
    100% { transform: scale(1) rotate(0deg); }
}`, 0);

//Event listeners for mouseover and mouseout events on sentiment images to play audio
images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        audio.play();//play audio
    });

    image.addEventListener('mouseout', function() {
        audio.pause();//Pause audio
        audio.currentTime = 0; // reset audio
    });
});

//Function to handle submission of sentiment ratings
function submit() {
    sentiment_text.textContent = "You have to select one of the sentiment!";
    for(var i = 0; i < sentiment_select.length; i++) {
        if(sentiment_select[i].checked) {
            //Hide radio button and display corresponding image and text
            var img = sentiment_select[i].nextElementSibling;
            sentiment_select[i].style.display = "none";
            img.style.display = "block";
            img.style.margin = "0 auto";
            sentiment_text.textContent = emotion_text[i];
        } else {
            //Hide radio button and its parent container
            var img = sentiment_select[i].nextElementSibling;
            sentiment_select[i].style.display = "none";
            sentiment_select[i].parentNode.style.display = "none";
            img.style.display = "none";
        }
    }
    // Display sentiment text
    sentiment_text.style.display = "inline";
    sentiment_text.margin = "0 auto";
    audio.muted = true;//mute audio
}

//Function to handle button click events
function handleButtonClick() {
    var button = document.getElementById("myButton");
    if (button.innerText == "Submit") {
        //Handle submission and change button text
        submit();
        button.innerText = "Go Back";
        button.onclick = function() {
            goBack();// Change button action to go back
        };
    }
}

//Function to reload page
function goBack() {
    window.location.reload();
}