function flipCard() {
  document.querySelector('.flip-card').classList.toggle('flipped');
}

const quotesByCharacter = {
  naruto: "Believe it! Hard work and determination can overcome anything.",
  sasuke: "I walk my own path, no matter the cost.",
  kakashi: "In the ninja world, those who break the rules are scum, but those who abandon their friends are worse than scum.",
  sakura: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn’t."
};

function showQuoteByBodyClass() {
  const bodyClass = document.body.className;
  const quoteText = quotesByCharacter[bodyClass] || "No quote available.";

  const alertDiv = document.createElement('div');
  alertDiv.textContent = quoteText;
  alertDiv.classList.add('alert-message');

  alertDiv.style.background = 'transparent';
  alertDiv.style.border = '3px solid black';
  alertDiv.style.color = 'black';

  if (bodyClass === 'sasuke') {
    alertDiv.style.border = '3px solid black';
    alertDiv.style.color = 'white';
  }

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.classList.add('show');
  }, 50);

  setTimeout(() => {
    alertDiv.style.opacity = '0';
    setTimeout(() => alertDiv.remove(), 500);
  }, 5000);

  const quoteElement = document.getElementById("quote");
  if (quoteElement) {
    quoteElement.textContent = quoteText;
  }
}

window.onload = showQuoteByBodyClass;
