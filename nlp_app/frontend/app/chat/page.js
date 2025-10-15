"use client";
import { useState } from "react";
import ChatBox from "@/components/ChatBox";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
      { sender: "bot", text: data.response },
    ]);
  };

  return <ChatBox messages={messages} onSend={sendMessage} />;
}
