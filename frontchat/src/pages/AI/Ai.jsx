import React, { useState, useEffect, useRef } from "react";
import "./Ai.css";

const Ai = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const simulateTyping = (text) => {
    let index = -1;
    const typingSpeed = 30;

    text = String(text); // ✅ Fix: ensure it's a string

    setMessages((prev) => [...prev, { sender: "bot", text: "", typing: true }]);

    const interval = setInterval(() => {
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        const updatedText = lastMessage.text + text.charAt(index);

        const updatedMessages = [
          ...prevMessages.slice(0, -1),
          { ...lastMessage, text: updatedText },
        ];

        return updatedMessages;
      });

      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          return [
            ...prevMessages.slice(0, -1),
            { ...lastMessage, typing: false },
          ];
        });
        setIsTyping(false);
      }
    }, typingSpeed);
  };


  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("https://peanutbot.duckdns.org/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      const resultText =
        typeof data.result === "string"
          ? data.result
          : JSON.stringify(data.result);

      simulateTyping(resultText);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, Free AWS tier time has been completed🥲." },
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Peanut!</div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}

        {isTyping && (
          <div className="chat-message bot typing">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <textarea
          className="chat-input"
          rows={1}
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Ai;
