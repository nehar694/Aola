// Store messages in an array (simulating a chat for now)
let messages = [];

// Function to add new message to the chat
function sendMessage() {
    const messageInput = document.getElementById("chat-input");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        messages.push(messageText);
        updateChatBox();
        messageInput.value = ""; // Clear input field
    }
}

// Function to update the chat box with the latest messages
function updateChatBox() {
    const messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = ''; // Clear current messages

    messages.forEach((msg) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = msg;
        messagesContainer.appendChild(messageElement);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Handle typing event to simulate "send" on Enter key
function handleTyping(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
