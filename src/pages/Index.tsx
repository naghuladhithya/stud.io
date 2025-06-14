
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Heart, Calendar, MessageCircle, Music } from "lucide-react";
import StudyPlanner from '@/components/StudyPlanner';
import RebootBot from '@/components/RebootBot';
import MoodEnhance from '@/components/MoodEnhance';
import WelcomeSection from '@/components/WelcomeSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState("welcome");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Stud.io
            </h1>
            <p className="text-lg text-gray-600">Your stress-free study & wellness companion</p>
          </header>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/70 backdrop-blur-sm border border-white/20">
              <TabsTrigger value="welcome" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Welcome
              </TabsTrigger>
              <TabsTrigger value="planner" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Study Planner
              </TabsTrigger>
              <TabsTrigger value="reboot" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Reboot Bot
              </TabsTrigger>
              <TabsTrigger value="mood-enhance" className="flex items-center gap-2">
                <Music className="w-4 h-4" />
                Mood Enhance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="welcome" className="space-y-6">
              <WelcomeSection onGetStarted={() => setActiveTab("planner")} />
            </TabsContent>

            <TabsContent value="planner" className="space-y-6">
              <StudyPlanner />
            </TabsContent>

            <TabsContent value="reboot" className="space-y-6">
              <RebootBot />
            </TabsContent>

            <TabsContent value="mood-enhance" className="space-y-6">
              <MoodEnhance />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
