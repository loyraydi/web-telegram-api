let tg = window.Telegram.WebApp;
tg.expand();

document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clicker');
    const clickCount = document.getElementById('click-count');
    const currencyCount = document.getElementById('currency-count');

    clickButton.addEventListener('click', function() {
        fetch('/click', {method: 'POST'})
            .then(response => response.json())
            .then(data => {
                clickCount.textContent = data.clicks;
                currencyCount.textContent = data.currency;
                tg.sendData(data.clicks.toString());
            });
    });
});
