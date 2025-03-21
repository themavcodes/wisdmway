// src/components/Chatbox.jsx
import { useState } from "react";

const Chatbox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { user: "You", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-xl bg-gray-100 shadow-md rounded-lg p-4 mt-8 opacity-70">
      <div className="h-64 overflow-y-scroll border-b-2 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2">
            <span className="font-bold">{msg.user}: </span>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
