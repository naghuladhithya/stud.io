
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Heart, Calendar, MessageCircle, TrendingUp, Sparkles } from "lucide-react";

interface WelcomeSectionProps {
  onGetStarted: () => void;
}

const WelcomeSection = ({ onGetStarted }: WelcomeSectionProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium">
          <Sparkles className="w-4 h-4" />
          The Stress-Free Study & Wellness Agent
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          Study smarter, not harder
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          An AI-powered companion that helps you plan efficiently and stay emotionally balanced — 
          because you don't need another to-do list. You need a companion that gets it.
        </p>
        <Button 
          onClick={onGetStarted}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Smart Study Planner</h3>
          </div>
          <p className="text-gray-600">
            AI generates custom study plans based on your deadlines, energy levels, and cognitive load. 
            Adapts daily based on your mood and progress.
          </p>
        </Card>

        <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Reboot Bot</h3>
          </div>
          <p className="text-gray-600">
            Your emotionally intelligent chat companion. Mood check-ins, journaling prompts, 
            and gentle motivation when you need it most.
          </p>
        </Card>

        <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Wellness Dashboard</h3>
          </div>
          <p className="text-gray-600">
            Track your progress and emotional trends. Get insights into your study patterns 
            and receive gentle reminders to take care of yourself.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default WelcomeSection;
