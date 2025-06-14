
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Heart, Smile, Meh, Frown, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  mood?: string;
}

const RebootBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! 😊 I'm your Reboot Bot. I'm here to support you through your study journey. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentMood, setCurrentMood] = useState<string>('');
  const { toast } = useToast();

  const moodOptions = [
    { icon: '😄', label: 'Great', value: 'great' },
    { icon: '😊', label: 'Good', value: 'good' },
    { icon: '😐', label: 'Okay', value: 'okay' },
    { icon: '😟', label: 'Stressed', value: 'stressed' },
    { icon: '😫', label: 'Overwhelmed', value: 'overwhelmed' }
  ];

  const getBotResponse = (userMessage: string, mood: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (mood === 'overwhelmed' || mood === 'stressed') {
      return "I hear that you're feeling overwhelmed right now, and that's completely okay. 💙 Let's take this one step at a time. Would you like to try a quick breathing exercise, or shall we talk about what's making you feel this way?";
    }
    
    if (lowerMessage.includes('exam') || lowerMessage.includes('test')) {
      return "Exams can feel intense, but remember - you've prepared for this moment. 🌟 What specific part of the exam is worrying you most? Sometimes breaking it down helps make it feel more manageable.";
    }
    
    if (lowerMessage.includes('tired') || lowerMessage.includes('exhausted')) {
      return "It sounds like you might need to recharge. 💚 Your mind and body work better when they're rested. Have you considered taking a short break or getting some fresh air?";
    }
    
    if (lowerMessage.includes('motivation') || lowerMessage.includes('unmotivated')) {
      return "Those motivation dips are totally normal - you're human! 🌈 What's one small thing you could do right now that would make you feel accomplished? Sometimes starting tiny builds momentum.";
    }
    
    if (mood === 'great' || mood === 'good') {
      return "That's wonderful to hear! 🎉 When we're feeling good, it's a great time to tackle challenging tasks. What would you like to focus your positive energy on today?";
    }
    
    return "Thank you for sharing that with me. 💜 Remember, every step forward counts, even the small ones. Is there anything specific I can help you with today?";
  };

  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date(),
      mood: currentMood
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(currentMessage, currentMood),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    setCurrentMessage('');
    setCurrentMood('');

    toast({
      title: "Message sent! 💌",
      description: "I'm here to support you"
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Reboot Bot</h2>
        <p className="text-gray-600">Your emotionally intelligent study companion</p>
      </div>

      <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <div className="space-y-4">
          <div className="h-96 overflow-y-auto space-y-4 p-4 bg-white/40 rounded-lg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/80 text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  {message.mood && (
                    <Badge className="mt-2 text-xs bg-white/20 text-inherit">
                      Mood: {message.mood}
                    </Badge>
                  )}
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">How are you feeling right now?</p>
              <div className="flex gap-2 flex-wrap">
                {moodOptions.map((mood) => (
                  <Button
                    key={mood.value}
                    variant={currentMood === mood.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentMood(mood.value)}
                    className={`${
                      currentMood === mood.value 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                        : 'bg-white/80 hover:bg-white'
                    }`}
                  >
                    {mood.icon} {mood.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Input
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="flex-grow bg-white/80"
              />
              <Button 
                onClick={sendMessage}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-0">
          <h3 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Daily Affirmation
          </h3>
          <p className="text-purple-700 text-sm">
            "You are capable of amazing things. Every small step you take today is building toward your goals. Be proud of your progress! ✨"
          </p>
        </Card>

        <Card className="p-4 bg-gradient-to-r from-green-50 to-teal-50 border-0">
          <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Gentle Reminder
          </h3>
          <p className="text-green-700 text-sm">
            "Remember to take breaks, stay hydrated, and be kind to yourself. You're doing better than you think you are! 💚"
          </p>
        </Card>
      </div>
    </div>
  );
};

export default RebootBot;
