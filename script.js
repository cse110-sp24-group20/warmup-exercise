// Buttons
document.addEventListener('DOMContentLoaded', function() {
    const sentimentWidget = document.querySelector('.sentiment-widget');
    const sentimentOutput = document.createElement('p');
    sentimentOutput.id = 'sentiment-output';
    sentimentWidget.appendChild(sentimentOutput);

    // Sentiments and sound effects
    const sentiments = {
        '1': { text: 'Extremely Sad', sound: 'sounds/sad.mp3' },
        '2': { text: 'Kind of Sad', sound: 'sounds/slightly_sad.mp3' },
        '3': { text: 'Neutral', sound: 'sounds/neutral.mp3' },
        '4': { text: 'Happy', sound: 'sounds/happy.mp3' },
        '5': { text: 'Really Happy', sound: 'sounds/very_happy.mp3' }
    };

    sentimentWidget.addEventListener('change', function(event) {
        if (event.target.type === 'radio') {
            const ratingValue = event.target.value;
            const sentimentInfo = sentiments[ratingValue];
            sentimentOutput.textContent = `Selected Sentiment: ${sentimentInfo.text}`;

            // Play the sound
            const audio = new Audio(sentimentInfo.sound);
            audio.play();

            // Animation for the image
            const selectedImage = event.target.nextElementSibling;
            selectedImage.classList.add('pop');
            setTimeout(() => selectedImage.classList.remove('pop'), 300); // remove class after 300ms
        }
    });
});
