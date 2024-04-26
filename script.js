// Create trumpet audio to play on button push
//const trumpet = new Audio('audio/trumpet-e4-14829.mp3');

document.addEventListener('DOMContentLoaded', function() {
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
        '1': { text: 'Oh no, that sounds tough 😢', audio: '/audio/hoes-mad.mp3', animation: 'shake' },
        '2': { text: 'Cheer up, tomorrow is another day! 😟', audio: '/audio/trumpet-e4-14829.mp3', animation: 'jiggle' },
        '3': { text: 'Sounds like a regular day! 😐', audio: '/audio/alright-button-mash.mp3',animation: 'pulse' },
        '4': { text: 'Glad you had a good day! 😄', audio: '/audio/ui.mp3', animation: 'bounce' },
        '5': { text: 'Wow, that’s amazing! 🤩', audio: '/audio/anime-wow-sound-effect.mp3', animation: 'tada' }
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
            /*trumpet.play();*/
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
