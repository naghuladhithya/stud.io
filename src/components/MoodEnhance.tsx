
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Music, Clock, Play, Headphones, Coffee, Moon, Sun, Sparkles } from "lucide-react";

const MoodEnhance = () => {
  const [studyHours, setStudyHours] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState('lofi');

  const lofiBeats = [
    { title: "Lofi Hip Hop Radio - Beats to Relax/Study", duration: "24/7 Live", videoId: "jfKfPfyJRdk", mood: "relaxed" },
    { title: "Chill Lofi Hip Hop Beats", duration: "3+ hours", videoId: "4xDzrJKXOOY", mood: "focused" },
    { title: "Lofi Girl - Study/Relax", duration: "Live Stream", videoId: "5qap5aO4i9A", mood: "peaceful" },
    { title: "Coffee Shop Ambience with Lofi", duration: "2+ hours", videoId: "h2zkV-l_TbY", mood: "cozy" },
    { title: "Rainy Day Lofi Beats", duration: "1+ hour", videoId: "4oStw0r33so", mood: "calm" },
    { title: "Midnight Lofi Sessions", duration: "3+ hours", videoId: "36YnV9STBqc", mood: "nocturnal" },
    { title: "Lofi Jazz Hip Hop Mix", duration: "2+ hours", videoId: "Dx5qFachd3A", mood: "sophisticated" },
    { title: "Study Lofi - Deep Focus", duration: "4+ hours", videoId: "lTRiuFIWV54", mood: "intense" },
    { title: "Autumn Lofi Vibes", duration: "1.5+ hours", videoId: "21DN6_wBBJs", mood: "seasonal" },
    { title: "Lofi Beats for Coding", duration: "2+ hours", videoId: "f02mOEt11OQ", mood: "productive" },
    { title: "Chillhop Essentials", duration: "1+ hour", videoId: "5yx6BWlEVcY", mood: "upbeat" },
    { title: "Lofi Study Playlist", duration: "3+ hours", videoId: "rUxyKA_-grg", mood: "consistent" },
    { title: "Aesthetic Lofi Mix", duration: "2+ hours", videoId: "_WoqCd57AP0", mood: "dreamy" },
    { title: "Morning Lofi Coffee", duration: "1+ hour", videoId: "tOaVDXUuKOg", mood: "energizing" },
    { title: "Lofi Piano & Rain", duration: "2+ hours", videoId: "IjMESxKKS7k", mood: "meditative" }
  ];

  const studyWithMe = [
    { title: "Study With Me - 4 Hour Pomodoro", duration: "4 hours", videoId: "WaBm_jdSAUk", type: "pomodoro" },
    { title: "Real Time Study Session - 2 Hours", duration: "2 hours", videoId: "7fEHnJAcEn8", type: "realtime" },
    { title: "Library Study Ambience", duration: "3 hours", videoId: "jjV9hLNyqSM", type: "ambience" },
    { title: "Study With Me - Dark Academia", duration: "2.5 hours", videoId: "TgqZRAJYChs", type: "aesthetic" },
    { title: "Productive Study Session", duration: "1.5 hours", videoId: "KKRBv5TXZBw", type: "motivational" },
    { title: "Silent Study With Me", duration: "3 hours", videoId: "zy0RpSCnEgA", type: "silent" },
    { title: "Cozy Study Session", duration: "2 hours", videoId: "qHFGbxRRtLY", type: "cozy" },
    { title: "Focus Study With Me", duration: "4 hours", videoId: "7pNYr_r69dg", type: "focus" },
    { title: "Study Cafe Ambience", duration: "2 hours", videoId: "s5CzTNK3CYE", type: "cafe" },
    { title: "Night Study Session", duration: "3 hours", videoId: "xeQvwnJUcb8", type: "night" }
  ];

  const getRecommendations = () => {
    const allContent = selectedCategory === 'lofi' ? lofiBeats : studyWithMe;
    const filteredContent = studyHours <= 2 
      ? allContent.filter(item => !item.duration.includes('3+') && !item.duration.includes('4'))
      : studyHours <= 4 
      ? allContent.filter(item => !item.duration.includes('24/7'))
      : allContent;
    
    return filteredContent.slice(0, 12);
  };

  const openYouTube = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const getMoodIcon = (mood: string) => {
    const icons = {
      relaxed: <Moon className="w-4 h-4" />,
      focused: <Coffee className="w-4 h-4" />,
      peaceful: <Sparkles className="w-4 h-4" />,
      cozy: <Coffee className="w-4 h-4" />,
      energizing: <Sun className="w-4 h-4" />
    };
    return icons[mood as keyof typeof icons] || <Music className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Headphones className="w-6 h-6" />
          Mood Enhance
        </h2>
        <p className="text-gray-600">Find your perfect study soundtrack and focus companions</p>
      </div>

      {/* Study Hours Input */}
      <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-purple-600" />
            <Label htmlFor="study-hours" className="text-lg font-semibold">How long will you study?</Label>
          </div>
          <div className="flex items-center gap-4">
            <Input
              id="study-hours"
              type="number"
              min="0.5"
              max="12"
              step="0.5"
              value={studyHours}
              onChange={(e) => setStudyHours(Number(e.target.value))}
              className="w-24"
            />
            <span className="text-sm text-gray-600">hours</span>
          </div>
        </div>
      </Card>

      {/* Category Selection */}
      <div className="flex justify-center gap-4">
        <Button
          variant={selectedCategory === 'lofi' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('lofi')}
          className="flex items-center gap-2"
        >
          <Music className="w-4 h-4" />
          Lofi Beats
        </Button>
        <Button
          variant={selectedCategory === 'study' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('study')}
          className="flex items-center gap-2"
        >
          <Headphones className="w-4 h-4" />
          Study With Me
        </Button>
      </div>

      {/* Recommendations Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getRecommendations().map((item, index) => (
          <Card key={index} className="p-4 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-sm leading-tight line-clamp-2 flex-1">
                  {item.title}
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => openYouTube(item.videoId)}
                  className="ml-2 p-1 h-8 w-8"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {item.duration}
                </Badge>
                
                {selectedCategory === 'lofi' && 'mood' in item && (
                  <div className="flex items-center gap-1">
                    {getMoodIcon(item.mood)}
                    <span className="text-xs text-gray-600 capitalize">{item.mood}</span>
                  </div>
                )}
                
                {selectedCategory === 'study' && 'type' in item && (
                  <Badge variant="secondary" className="text-xs capitalize">
                    {item.type}
                  </Badge>
                )}
              </div>
              
              <Button
                onClick={() => openYouTube(item.videoId)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                size="sm"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch on YouTube
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Study Tips */}
      <Card className="p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 border-0">
        <div className="text-center space-y-3">
          <Sparkles className="w-8 h-8 mx-auto text-purple-600" />
          <h3 className="text-xl font-semibold text-gray-800">Perfect Your Study Environment 🎧</h3>
          <p className="text-gray-600">
            For sessions under 2 hours, try lofi beats for gentle focus. For longer sessions, 
            consider "Study With Me" videos for companionship and structure. Remember to take breaks every 25-50 minutes!
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge className="bg-purple-100 text-purple-700">Focus Boost</Badge>
            <Badge className="bg-pink-100 text-pink-700">Stress Relief</Badge>
            <Badge className="bg-blue-100 text-blue-700">Productivity</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MoodEnhance;
