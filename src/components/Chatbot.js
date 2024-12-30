import React, { useState } from 'react';
import '../style/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim() === '') return;

    const newMessages = [
      ...messages,
      { sender: 'user', text: userInput },
    ];

    setMessages(newMessages);
    setUserInput('');

    // Simulate chatbot reply
    setTimeout(() => {
      const botReply = getBotReply(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botReply },
      ]);
    }, 1000);
  };

  const getBotReply = (input) => {
    // Simple predefined responses
    const responses = {
      hello: 'Hi there! How can I help you?',
      help: 'Sure, what do you need help with?',
      bye: 'Goodbye! Have a great day!',
    };

    const lowerCaseInput = input.toLowerCase();
    return responses[lowerCaseInput] || "I'm not sure how to respond to that.";
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleInputKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
