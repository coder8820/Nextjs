import { useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatBox({ messages, onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto space-y-2 p-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="flex items-center border-t p-4">
        <input
          type="text"
          className="flex-1 border rounded-lg px-4 py-2 mr-2"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
