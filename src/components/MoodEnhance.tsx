
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Play, Headphones, Coffee, Moon, Sun, Sparkles } from "lucide-react";

const MoodEnhance = () => {
  const [selectedCategory, setSelectedCategory] = useState('lofi');

  const lofiBeats = [
    { title: "Lofi Hip Hop Radio - Beats to Relax/Study", duration: "24/7 Live", videoId: "jfKfPfyJRdk", channel: "Lofi Girl", mood: "relaxed" },
    { title: "Chill Lofi Hip Hop Beats", duration: "3+ hours", videoId: "4xDzrJKXOOY", channel: "ChilledCow", mood: "focused" },
    { title: "Study Session - Lofi Hip Hop Mix", duration: "2+ hours", videoId: "5qap5aO4i9A", channel: "College Music", mood: "productive" },
    { title: "Coffee Shop Ambience with Lofi", duration: "2+ hours", videoId: "h2zkV-l_TbY", channel: "Ambience", mood: "cozy" },
    { title: "Rainy Day Lofi Beats", duration: "1+ hour", videoId: "4oStw0r33so", channel: "Chillhop Music", mood: "calm" },
    { title: "Midnight Lofi Sessions", duration: "3+ hours", videoId: "36YnV9STBqc", channel: "Lofi Fruits Music", mood: "nocturnal" },
    { title: "Lofi Jazz Hip Hop Mix", duration: "2+ hours", videoId: "Dx5qFachd3A", channel: "Jazz Lofi", mood: "sophisticated" },
    { title: "Study Lofi - Deep Focus", duration: "4+ hours", videoId: "lTRiuFIWV54", channel: "Study MD", mood: "intense" },
    { title: "Autumn Lofi Vibes", duration: "1.5+ hours", videoId: "21DN6_wBBJs", channel: "Dreamy", mood: "seasonal" },
    { title: "Lofi Beats for Coding", duration: "2+ hours", videoId: "f02mOEt11OQ", channel: "DevTunes", mood: "productive" },
    { title: "Chillhop Essentials", duration: "1+ hour", videoId: "5yx6BWlEVcY", channel: "Chillhop Records", mood: "upbeat" },
    { title: "Aesthetic Lofi Mix", duration: "2+ hours", videoId: "_WoqCd57AP0", channel: "Aesthetic Sounds", mood: "dreamy" },
    { title: "Morning Coffee Lofi", duration: "1+ hour", videoId: "tOaVDXUuKOg", channel: "Lofi Geek", mood: "energizing" },
    { title: "Lofi Piano & Rain", duration: "2+ hours", videoId: "IjMESxKKS7k", channel: "Peaceful Piano", mood: "meditative" },
    { title: "City Night Lofi", duration: "1.5+ hours", videoId: "FlsBObg-1BQ", channel: "Urban Lofi", mood: "atmospheric" },
    { title: "Vintage Lofi Collection", duration: "2+ hours", videoId: "kgx4WGK0oNU", channel: "Vintage Vibes", mood: "nostalgic" },
    { title: "Bedroom Pop Lofi", duration: "1+ hour", videoId: "mPZkdNFkNps", channel: "Bedroom Beats", mood: "intimate" },
    { title: "Lofi Synthwave", duration: "1.5+ hours", videoId: "4QXCPuwBz2E", channel: "Synthwave Central", mood: "futuristic" },
    { title: "Forest Lofi Sounds", duration: "2+ hours", videoId: "xNN7iTA57jM", channel: "Nature Sounds", mood: "natural" },
    { title: "Lofi Guitar Melodies", duration: "1+ hour", videoId: "YgGzAKP_HuM", channel: "Guitar Lofi", mood: "melodic" },
    { title: "Space Lofi Journey", duration: "2+ hours", videoId: "DWcJFNfaw9c", channel: "Cosmic Sounds", mood: "ethereal" },
    { title: "Japanese Lofi Mix", duration: "1.5+ hours", videoId: "AQBh9soLSkI", channel: "Tokyo Lofi", mood: "cultural" },
    { title: "90s Lofi Nostalgia", duration: "2+ hours", videoId: "1fueZCTYkpA", channel: "90s Vibes", mood: "nostalgic" },
    { title: "Cozy Winter Lofi", duration: "1+ hour", videoId: "EcEMX-63PKY", channel: "Winter Sounds", mood: "cozy" }
  ];

  const studyWithMe = [
    { title: "Study With Me - 4 Hour Pomodoro", duration: "4 hours", videoId: "WaBm_jdSAUk", channel: "Study To Success", type: "pomodoro" },
    { title: "Real Time Study Session - 2 Hours", duration: "2 hours", videoId: "7fEHnJAcEn8", channel: "StudyMD", type: "realtime" },
    { title: "Library Study Ambience", duration: "3 hours", videoId: "jjV9hLNyqSM", channel: "ASMR Weekly", type: "ambience" },
    { title: "Study With Me - Dark Academia", duration: "2.5 hours", videoId: "TgqZRAJYChs", channel: "Ruby Granger", type: "aesthetic" },
    { title: "Productive Study Session", duration: "1.5 hours", videoId: "KKRBv5TXZBw", channel: "Med School Insiders", type: "motivational" },
    { title: "Silent Study With Me", duration: "3 hours", videoId: "zy0RpSCnEgA", channel: "Study Vibes", type: "silent" },
    { title: "Cozy Study Session", duration: "2 hours", videoId: "qHFGbxRRtLY", channel: "Motivation2Study", type: "cozy" },
    { title: "Focus Study With Me", duration: "4 hours", videoId: "7pNYr_r69dg", channel: "TheStrive Studies", type: "focus" },
    { title: "Study Cafe Ambience", duration: "2 hours", videoId: "s5CzTNK3CYE", channel: "Cafe Music BGM", type: "cafe" },
    { title: "Night Study Session", duration: "3 hours", videoId: "xeQvwnJUcb8", channel: "Study Corner", type: "night" },
    { title: "Medicine Study Session", duration: "2.5 hours", videoId: "vZ4SGlhwZgY", channel: "Ali Abdaal", type: "medical" },
    { title: "Law School Study With Me", duration: "3 hours", videoId: "IqyTBA28Jro", channel: "Diva Jain", type: "law" },
    { title: "Engineering Study Session", duration: "2 hours", videoId: "3DbE2DdFOXU", channel: "StudyTee", type: "engineering" },
    { title: "College Study Marathon", duration: "5 hours", videoId: "yJJUTj9YraA", channel: "UnJaded Jade", type: "marathon" },
    { title: "Minimalist Study Setup", duration: "1.5 hours", videoId: "7Z5d7bXJjYk", channel: "Matt D'Avella", type: "minimalist" },
    { title: "Study Aesthetic - Pink Theme", duration: "2 hours", videoId: "wNNXdoj7cqg", channel: "Studyquill", type: "aesthetic" },
    { title: "Rainy Day Study Session", duration: "2.5 hours", videoId: "CFeP5lqp_oc", channel: "The Strive Studies", type: "rainy" },
    { title: "Study With Me - Finals Week", duration: "4 hours", videoId: "bFvRrGJJuLs", channel: "Study To Success", type: "finals" },
    { title: "Productivity Study Session", duration: "2 hours", videoId: "8s0TPp-zbaU", channel: "Thomas Frank", type: "productivity" },
    { title: "MCAT Study Session", duration: "3 hours", videoId: "Hf7vOXyuJnU", channel: "Premeditated", type: "mcat" },
    { title: "Study With Me - Forest Theme", duration: "2 hours", videoId: "xGRJmayahVg", channel: "Emma Studies", type: "nature" },
    { title: "PhD Study Session", duration: "3.5 hours", videoId: "7i_N3Rs1y4A", channel: "The PhD Profs", type: "phd" },
    { title: "Study With Me - Korean Style", duration: "2 hours", videoId: "3xDXAjmN8eY", channel: "Study with Jess", type: "korean" },
    { title: "Exam Prep Study Session", duration: "2.5 hours", videoId: "xvXvBKGNGdM", channel: "StudyTube", type: "exam" },
    { title: "Study With Me - Morning Routine", duration: "1.5 hours", videoId: "tQzx6qJVaYE", channel: "Studyign", type: "morning" },
    { title: "Deep Work Study Session", duration: "4 hours", videoId: "oNp5_mErdNE", channel: "Cal Newport", type: "deepwork" },
    { title: "Study With Me - Cambridge Style", duration: "2.5 hours", videoId: "2pVvBJmKJXQ", channel: "Jack Edwards", type: "cambridge" },
    { title: "Study With Me - Twilight Theme", duration: "2 hours", videoId: "mxPztNv1CSQ", channel: "Twilight Study", type: "twilight" },
    { title: "Study Marathon - 6 Hours", duration: "6 hours", videoId: "qNKZUxRXF8Y", channel: "Study Marathon", type: "marathon" },
    { title: "Study With Me - Vintage Desk", duration: "2 hours", videoId: "9VXaFvkrjAg", channel: "Vintage Studies", type: "vintage" },
    { title: "Study With Me - Mountain View", duration: "2.5 hours", videoId: "HPsJzHc6Fkw", channel: "Mountain Study", type: "mountain" },
    { title: "Study With Me - City View", duration: "2 hours", videoId: "sEQf3njFg5E", channel: "City Studies", type: "city" },
    { title: "Study With Me - Bookstore Theme", duration: "1.5 hours", videoId: "vX3g_r6xtW4", channel: "Bookworm Studies", type: "bookstore" }
  ];

  const openYouTube = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const getMoodIcon = (mood: string) => {
    const icons = {
      relaxed: <Moon className="w-4 h-4" />,
      focused: <Coffee className="w-4 h-4" />,
      peaceful: <Sparkles className="w-4 h-4" />,
      cozy: <Coffee className="w-4 h-4" />,
      energizing: <Sun className="w-4 h-4" />,
      productive: <Coffee className="w-4 h-4" />,
      calm: <Moon className="w-4 h-4" />,
      nocturnal: <Moon className="w-4 h-4" />,
      sophisticated: <Sparkles className="w-4 h-4" />,
      intense: <Coffee className="w-4 h-4" />,
      seasonal: <Sparkles className="w-4 h-4" />,
      upbeat: <Sun className="w-4 h-4" />,
      dreamy: <Moon className="w-4 h-4" />,
      meditative: <Sparkles className="w-4 h-4" />,
      atmospheric: <Moon className="w-4 h-4" />,
      nostalgic: <Sparkles className="w-4 h-4" />,
      intimate: <Moon className="w-4 h-4" />,
      futuristic: <Sun className="w-4 h-4" />,
      natural: <Sparkles className="w-4 h-4" />,
      melodic: <Music className="w-4 h-4" />,
      ethereal: <Moon className="w-4 h-4" />,
      cultural: <Sparkles className="w-4 h-4" />
    };
    return icons[mood as keyof typeof icons] || <Music className="w-4 h-4" />;
  };

  const getRecommendations = () => {
    return selectedCategory === 'lofi' ? lofiBeats : studyWithMe;
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

      {/* Category Selection */}
      <div className="flex justify-center gap-4">
        <Button
          variant={selectedCategory === 'lofi' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('lofi')}
          className="flex items-center gap-2"
        >
          <Music className="w-4 h-4" />
          Lofi Beats ({lofiBeats.length})
        </Button>
        <Button
          variant={selectedCategory === 'study' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('study')}
          className="flex items-center gap-2"
        >
          <Headphones className="w-4 h-4" />
          Study With Me ({studyWithMe.length})
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
              
              <div className="text-xs text-gray-500 font-medium">
                {item.channel}
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
            Choose lofi beats for gentle background focus, or study-with-me videos for companionship and motivation. 
            Remember to take breaks every 25-50 minutes using the Pomodoro technique!
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
