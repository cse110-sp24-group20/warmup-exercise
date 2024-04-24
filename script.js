// Buttons
document.addEventListener('DOMContentLoaded', function() {
    const sentimentWidget = document.querySelector('.sentiment-widget');
    const sentimentOutput = document.createElement('p');
    sentimentOutput.id = 'sentiment-output';
    sentimentWidget.appendChild(sentimentOutput); // Appends the sentiment display below the widget

    // Texts corresponding to each sentiment rating
    const sentiments = {
        '1': 'Extremely Sad',
        '2': 'Kind of Sad',
        '3': 'Neutral',
        '4': 'Happy',
        '5': 'Really Happy'
    };

    sentimentWidget.addEventListener('change', function(event) {
        if (event.target.type === 'radio') {
            const ratingValue = event.target.value;
            const sentimentText = sentiments[ratingValue] || 'Unselected';
            sentimentOutput.textContent = `Selected Sentiment: ${sentimentText}`; // Updates the text below the widget
        }
    });
});
