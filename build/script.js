document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatHistory = document.getElementById('chat-history');

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
            event.preventDefault(); // Prevent default Enter behavior (newline)
        }
    });

    function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText !== '') {
            displayUserMessage(messageText);
            userInput.value = ''; // Clear input box

            // Simulate Gemini response (replace with actual AI call later)
            getGeminiResponse(messageText).then(response => {
                displayGeminiResponse(response);
            });
        }
    }

    function displayUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('user-message');
        messageDiv.textContent = message;
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
    }

    function displayGeminiResponse(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('gemini-response');
        messageDiv.textContent = message;
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
    }

    async function getGeminiResponse(userMessage) {
        // In a real application, this is where you would call an AI API.
        // For this example, we'll use a simple, hardcoded response.
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
        return "Hello! I'm Gemini, your psychological companion. How can I help you further?";
    }
});