// Add this in a new file called chat.js and link it in your HTML
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const messageContainer = document.getElementById('messageContainer');

    // Auto-resize textarea as user types
    userInput.addEventListener('input', () => {
        userInput.style.height = 'auto';
        userInput.style.height = userInput.scrollHeight + 'px';
    });

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const message = userInput.value.trim();
        if (!message) return;

        // Add user message to chat
        addMessage(message, 'user');
        
        // Clear input
        userInput.value = '';
        userInput.style.height = 'auto';

        // Here you would typically make an API call to your backend
        // For now, we'll just simulate a response
        const response = "This is a sample response. Connect to your backend API to get real responses.";
        
        // Add bot response to chat
        setTimeout(() => {
            addMessage(response, 'bot');
        }, 1000);
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = text;
        messageContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
});
