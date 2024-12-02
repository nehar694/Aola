// DOM elements
const chatbox = document.getElementById('chatbox');
const userMessageInput = document.getElementById('userMessage');
const sendButton = document.getElementById('sendButton');

// Function to display user or Aola's message in the chatbox
function displayMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'aola-message');
  messageDiv.classList.add('fadeIn');
  messageDiv.innerHTML = `${sender === 'user' ? 'You' : 'Aola'}: ${message}`;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to get a response from Aola based on the user input
function getAolaResponse(userInput) {
  let response = '';
  const userInputLower = userInput.toLowerCase();

  // Bullish response
  if (userInputLower.includes('moon') || userInputLower.includes('pump') || userInputLower.includes('to the moon')) {
    response = "Hell yeah, we're already on the rocket! Hold on tight 🚀💥";
  }
  // Bearish response
  else if (userInputLower.includes('scam') || userInputLower.includes('dump') || userInputLower.includes('selling')) {
    response = "Oh no, not the FUD! Get ready to eat dust when we hit 1B market cap 🤑💩";
  }
  // Price/coin-related response
  else if (userInputLower.includes('price') || userInputLower.includes('how much') || userInputLower.includes('value')) {
    response = "The price? We don't care about that. We're here for the memes, baby. 🚀💰";
  }
  // General hype response
  else if (userInputLower.includes('hype') || userInputLower.includes('bullish')) {
    response = "Get on board, the hype train is leaving! 🚂💨";
  }
  // FOMO response
  else if (userInputLower.includes('fomo') || userInputLower.includes('missed out')) {
    response = "Missed out? No way. You better believe we're just getting started! 🔥";
 
