function crackCookie() {
    const cookie = document.getElementById('cookie');
    const cracked = document.getElementById('cracked');
    const fortuneText = document.getElementById('fortune-text');
    const returnBtn = document.getElementById('return-btn');

    // Add a shake effect
    cookie.style.transform = 'rotate(20deg)';
    setTimeout(() => {
        cookie.style.transform = 'rotate(0deg)';
    }, 200);

    // Swap cookie image and fetch fortune
    setTimeout(() => {
        cookie.style.display = 'none';
        cracked.style.display = 'block';
        fetchFortune(fortuneText);
        returnBtn.style.display = 'block';
    }, 400);
}

function fetchFortune(fortuneText) {
    fetch('/get_fortune')
    .then(response => response.text())
    .then(quote => {
        const fortuneText = document.getElementById('fortune-text');
        fortuneText.textContent = quote;
        fortuneText.style.display = 'block';
    })
    .catch(error => {
        console.error('Error fetching fortune:', error);
        const fortuneText = document.getElementById('fortune-text');
        fortuneText.textContent = "Oops! Something went wrong.";
        fortuneText.style.display = 'block';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('return-btn').addEventListener('click', () => {
        window.location.reload();
    });
});