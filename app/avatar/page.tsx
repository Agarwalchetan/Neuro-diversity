"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send, Brain, Sparkles, Palette, Maximize } from "lucide-react";

export default function AvatarPage() {
  const [selectedColor, setSelectedColor] = useState("#6366f1");
  const [avatarSize, setAvatarSize] = useState([50]);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "ai"; message: string }[]>([
    { type: "ai", message: "Hi! I'm your NeuroGuide AI companion --> Nio. I'm here to help you understand neurodiversity better and provide support on your journey. What would you like to know?" }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { type: "user", message }]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(message);
      setChatHistory(prev => [...prev, { type: "ai", message: aiResponse }]);
    }, 1000);

    setMessage("");
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-10">
        <motion.h1 
          className="text-4xl font-bold mb-8 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your NeuroGuide AI Companion
        </motion.h1>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Compact Avatar Customization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4"
          >
            <Card className="p-4">
              <div 
                className="aspect-square rounded-full mx-auto flex items-center justify-center mb-4"
                style={{
                  backgroundColor: selectedColor,
                  width: `${avatarSize}%`,
                  transition: "all 0.2s ease-in-out"
                }}
              >
                <Brain className="w-1/2 h-1/2 text-white/80" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full h-8 rounded"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Maximize className="h-4 w-4 text-muted-foreground" />
                  <Slider
                    value={avatarSize}
                    onValueChange={setAvatarSize}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                </div>

                <Button size="sm" className="w-full">Save Avatar</Button>
              </div>
            </Card>
          </motion.div>

          {/* AI Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8"
          >
            <Card className="p-6 h-[600px] flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-4">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        chat.type === "user"
                          ? "bg-accent text-white"
                          : "bg-muted"
                      }`}
                    >
                      {chat.type === "ai" && (
                        <div className="flex items-center gap-2 mb-2">
                          <div 
                            className="h-8 w-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: selectedColor }}
                          >
                            <Brain className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-semibold">NeuroGuide AI</span>
                        </div>
                      )}
                      <p className="leading-relaxed">{chat.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about neurodiversity..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-accent hover:bg-accent/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function getAIResponse(message: string): string {
  // This is a simplified response system. In a production environment, 
  // you would integrate with an AI service like OpenAI's GPT or similar.
  const responses = [
    "Hello Khushagra, What can I do for you today?",
    "I understand your interest in this topic. Neurodiversity is about recognizing and respecting these natural variations in human cognition.",
    "Let me help explain that. In the context of neurodiversity, it's important to focus on individual strengths and unique perspectives.",
    "That's an interesting point! Many neurodivergent individuals have unique abilities and ways of thinking that can be incredibly valuable.",
    "I appreciate you asking about this. Understanding neurodiversity helps create more inclusive and supportive environments for everyone.",
    "From a neurodiversity perspective, what you're describing is a common experience. Let's explore some strategies that might help.",
    "That's a thoughtful observation. The neurodiversity movement emphasizes the importance of accepting and celebrating these differences.",
    "Your question touches on an important aspect of neurodiversity. Would you like to explore this topic further?",
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}
