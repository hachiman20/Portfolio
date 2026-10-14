"use client";

import { useState } from "react";

type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

const quickReplies = [
  "Tell me about your experience",
  "What is your specialty?",
  "How can I contact you?",
  "What are your research interests?",
];

function buildBotReply(input: string): string {
  const value = input.toLowerCase();

  if (value.includes("experience") || value.includes("work") || value.includes("career")) {
    return "I have worked across emergency medicine, cardiology, trauma surgery, and rotating internship roles in Gujarat, with a strong focus on acute care and patient stabilization.";
  }

  if (value.includes("specialty") || value.includes("department") || value.includes("role")) {
    return "My primary clinical focus is emergency medicine, with additional experience in cardiology, trauma surgery, and acute care management.";
  }

  if (value.includes("contact") || value.includes("email") || value.includes("reach")) {
    return "You can connect through the Contact section or email me directly at vishvapatel233@gmail.com.";
  }

  if (value.includes("research") || value.includes("publication") || value.includes("study")) {
    return "My work is centered on evidence-based acute care, clinical research, and medical education, with a focus on improving patient outcomes in high-acuity settings.";
  }

  if (value.includes("availability") || value.includes("join") || value.includes("hire")) {
    return "I am open to clinical, academic, and research opportunities aligned with emergency medicine, acute care, and medical education.";
  }

  return "Thanks for your message. I can share details about my clinical experience, research interests, or contact information. Please ask a question about my work or background.";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I’m the portfolio assistant. Ask about my experience, specialty, or contact details.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text?: string) => {
    const messageText = (text ?? input).trim();

    if (!messageText) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      sender: "user",
      text: messageText,
    };

    const botReply: ChatMessage = {
      id: `${Date.now()}-bot`,
      sender: "bot",
      text: buildBotReply(messageText),
    };

    setMessages((previous) => [...previous, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-[0_20px_40px_-20px_rgba(15,23,42,0.8)] transition hover:bg-slate-800"
        >
          <span aria-hidden="true">💬</span>
          Chat
        </button>
      ) : (
        <div className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-900 px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Portfolio Assistant</p>
              <p className="text-xs text-slate-300">Online</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="max-h-72 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.sender === "user"
                      ? "bg-accent text-white"
                      : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleSend(reply)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                >
                  {reply}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Type your message..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-accent focus:bg-white"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
