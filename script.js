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

  // Lowercase user input for consistency
  const userInputLower = userInput.toLowerCase();

  // Bullish response
  if (userInputLower.includes('moon') || userInputLower.includes('pump') || userInputLower.includes('to the moon')) {
    response = "Hell yeah, we're already on the rocket! Hold on tight 🚀💥";
  }
  // Bearish response
  else if (userInputLower.includes('scam') || userInputLower.includes('dump') || userInputLower.includes('selling')) {
    response = "Oh no, not the FUD! Get ready to eat dust when we hit 1B market cap 🤑💩";
  }
  // Neutral or random responses
  else {
    response = "You better believe this is the meme coin of the century. Pump it, baby!";
  }

  return response;
}

// Function to handle user message and get Aola's response
function handleUserMessage() {
  const userMessage = userMessageInput.value.trim();
  
  if (userMessage) {
    // Display the user's message
    displayMessage(userMessage, 'user');
    
    // Clear the input field
    userMessageInput.value = '';
    
    // Get Aola's response
    const aolaResponse = getAolaResponse(userMessage);

    // Display Aola's response after a short delay
    setTimeout(() => {
      displayMessage(aolaResponse, 'aola');
    }, 500);
  }
}

// Event listener for the "Send" button
sendButton.addEventListener('click', handleUserMessage);

// Allow the user to press "Enter" to send a message
userMessageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleUserMessage();
  }
});
