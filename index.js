var btn = document.getElementsByClassName("submit");
var sentiment_select = document.getElementsByName("rating");
var sentiment_text = document.getElementById("sentiment_text");

var emotion_text = ["I am angry at work!", 
"Feeling a little irritable",
"Just So So",
"It's Okay",
"I'm satisfied with today's work!"
];

var audio = document.getElementById("myAudio"); 
var images = document.querySelectorAll(".sentiment_img");

images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        audio.play();
    });

    image.addEventListener('mouseout', function() {
        sound.pause();
        sound.currentTime = 0; // reset audio
    });
});

document.getElementById("myButton").addEventListener("click", handleButtonClick);

function submit() {
    for(var i = 0; i < sentiment_select.length; i++) {
        var img = sentiment_select[i].nextElementSibling;
        if(sentiment_select[i].checked) {
            sentiment_select[i].style.display = "none";
            img.style.display = "block";
            img.style.margin = "0 auto";
            sentiment_text.textContent = emotion_text[i];
        } else {
            sentiment_select[i].style.display = "none";
            sentiment_select[i].parentNode.style.display = "none";
            img.style.display = "none";
        }
    }
    sentiment_text.style.display = "inline";
    sentiment_text.margin = "0 auto";
    audio.muted = true;
}

function handleButtonClick() {
    var button = document.getElementById("myButton");
    if (button.innerText == "Submit") {
        submit();
        button.innerText = "Go Back";
        button.onclick = function() {
            goBack();
        };
    }
}

function goBack() {
    window.location.reload();
}