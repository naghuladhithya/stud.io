
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Play, Headphones, Coffee, Moon, Sun, Sparkles, Clock, Users } from "lucide-react";

const MoodEnhance = () => {
  const [selectedCategory, setSelectedCategory] = useState('lofi');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const lofiBeats = [
    { title: "lofi hip hop radio - beats to relax/study to", duration: "24/7 Live", videoId: "jfKfPfyJRdk", channel: "Lofi Girl", mood: "relaxed", views: "1.2M watching" },
    { title: "Deep Focus - Music For Studying", duration: "4 hours", videoId: "hHW1oY26kxQ", channel: "Greenred Productions", mood: "focused", views: "15M views" },
    { title: "Chill Lofi Hip Hop Beats", duration: "3 hours", videoId: "4xDzrJKXOOY", channel: "ChilledCow", mood: "calm", views: "8.2M views" },
    { title: "Coffee Shop Ambience", duration: "2 hours", videoId: "h2zkV-l_TbY", channel: "Relaxing White Noise", mood: "cozy", views: "5.1M views" },
    { title: "Rainy Jazz Cafe", duration: "3 hours", videoId: "HNeS4adCZ9U", channel: "Cozy Rain", mood: "atmospheric", views: "12M views" },
    { title: "Study Music - Focus & Concentration", duration: "2.5 hours", videoId: "5qap5aO4i9A", channel: "Study Music Project", mood: "productive", views: "6.8M views" },
    { title: "Lofi Fruits Music", duration: "1 hour", videoId: "36YnV9STBqc", channel: "Lofi Fruits", mood: "dreamy", views: "3.4M views" },
    { title: "Chillhop Essentials", duration: "1.5 hours", videoId: "5yx6BWlEVcY", channel: "Chillhop Records", mood: "upbeat", views: "9.1M views" },
    { title: "Peaceful Piano", duration: "2 hours", videoId: "1ZYbU82GVz4", channel: "Soothing Relaxation", mood: "peaceful", views: "45M views" },
    { title: "Synthwave Study Session", duration: "1 hour", videoId: "4QXCPuwBz2E", channel: "The 80s Guy", mood: "retro", views: "2.3M views" },
    { title: "Nature Sounds for Study", duration: "3 hours", videoId: "xNN7iTA57jM", channel: "Johnnie Lawson", mood: "natural", views: "7.5M views" },
    { title: "Anime Lofi Hip Hop", duration: "1.5 hours", videoId: "kgx4WGK0oNU", channel: "Lofi Hip Hop", mood: "nostalgic", views: "4.2M views" },
    { title: "City Night Ambience", duration: "2 hours", videoId: "FlsBObg-1BQ", channel: "Urban Atmosphere", mood: "nocturnal", views: "3.8M views" },
    { title: "Bedroom Pop Vibes", duration: "1 hour", videoId: "mPZkdNFkNps", channel: "Dreamy Vibes", mood: "intimate", views: "1.9M views" },
    { title: "Jazz Lofi Mix", duration: "2.5 hours", videoId: "Dx5qFachd3A", channel: "Jazz Café", mood: "sophisticated", views: "6.3M views" },
    { title: "Morning Coffee Beats", duration: "1 hour", videoId: "tOaVDXUuKOg", channel: "Coffee Beats", mood: "energizing", views: "2.1M views" },
    { title: "Space Ambient Lofi", duration: "2 hours", videoId: "DWcJFNfaw9c", channel: "Space Ambient", mood: "ethereal", views: "5.4M views" },
    { title: "Vintage Vinyl Lofi", duration: "1.5 hours", videoId: "bFvRrGJJuLs", channel: "Vintage Vibes", mood: "retro", views: "3.7M views" },
    { title: "Forest Meditation Sounds", duration: "2 hours", videoId: "eKFTSSKCzWA", channel: "Meditation Relax Music", mood: "meditative", views: "18M views" },
    { title: "Tokyo Lofi Nights", duration: "1 hour", videoId: "AQBh9soLSkI", channel: "Tokyo LoungeTV", mood: "cultural", views: "2.8M views" },
    { title: "Cozy Fireplace Ambience", duration: "3 hours", videoId: "L_LUpnjgPso", channel: "Cozy Ambience", mood: "warm", views: "11M views" },
    { title: "Study Lofi Playlist", duration: "2 hours", videoId: "lTRiuFIWV54", channel: "Study Session", mood: "focused", views: "4.6M views" },
    { title: "Autumn Vibes Lofi", duration: "1.5 hours", videoId: "21DN6_wBBJs", channel: "Seasonal Sounds", mood: "seasonal", views: "1.5M views" },
    { title: "Guitar Lofi Melodies", duration: "1 hour", videoId: "YgGzAKP_HuM", channel: "Guitar Lofi", mood: "melodic", views: "980K views" }
  ];

  const studyWithMe = [
    { title: "Study With Me - 4 Hour Pomodoro Session", duration: "4 hours", videoId: "WaBm_jdSAUk", channel: "Study To Success", type: "pomodoro", viewers: "2.3K watching" },
    { title: "Real Time Study Session - Medical Student", duration: "2 hours", videoId: "7fEHnJAcEn8", channel: "StudyMD", type: "medical", viewers: "1.8K watching" },
    { title: "Library Study Ambience - University Library", duration: "3 hours", videoId: "jjV9hLNyqSM", channel: "Study Ambience", type: "library", viewers: "3.1K watching" },
    { title: "Dark Academia Study With Me", duration: "2.5 hours", videoId: "TgqZRAJYChs", channel: "Ruby Granger", type: "aesthetic", viewers: "5.2K watching" },
    { title: "Productive Study Marathon", duration: "6 hours", videoId: "KKRBv5TXZBw", channel: "TheStrive Studies", type: "marathon", viewers: "1.5K watching" },
    { title: "Silent Study With Me - No Music", duration: "3 hours", videoId: "zy0RpSCnEgA", channel: "Study Vibes", type: "silent", viewers: "890 watching" },
    { title: "Cozy Study Session - Rainy Day", duration: "2 hours", videoId: "qHFGbxRRtLY", channel: "Motivation2Study", type: "cozy", viewers: "2.7K watching" },
    { title: "Focus Study With Me - Deep Work", duration: "4 hours", videoId: "7pNYr_r69dg", channel: "Cal Newport", type: "focus", viewers: "1.2K watching" },
    { title: "Study Cafe Ambience With Me", duration: "2 hours", videoId: "s5CzTNK3CYE", channel: "Cafe Study", type: "cafe", viewers: "3.4K watching" },
    { title: "Night Study Session - Owl Mode", duration: "3 hours", videoId: "xeQvwnJUcb8", channel: "Night Owl Studies", type: "night", viewers: "756 watching" },
    { title: "MCAT Study Session", duration: "2.5 hours", videoId: "vZ4SGlhwZgY", channel: "Ali Abdaal", type: "mcat", viewers: "1.9K watching" },
    { title: "Law School Study With Me", duration: "3 hours", videoId: "IqyTBA28Jro", channel: "Legal Eagle Study", type: "law", viewers: "1.3K watching" },
    { title: "Engineering Study Session - Calculus", duration: "2 hours", videoId: "3DbE2DdFOXU", channel: "StudyTee", type: "engineering", viewers: "968 watching" },
    { title: "College Finals Study Marathon", duration: "5 hours", videoId: "yJJUTj9YraA", channel: "UnJaded Jade", type: "finals", viewers: "2.1K watching" },
    { title: "Minimalist Study Setup", duration: "1.5 hours", videoId: "7Z5d7bXJjYk", channel: "Matt D'Avella", type: "minimalist", viewers: "1.7K watching" },
    { title: "Aesthetic Study - Pink Theme", duration: "2 hours", videoId: "wNNXdoj7cqg", channel: "Studyquill", type: "aesthetic", viewers: "4.2K watching" },
    { title: "Forest Study Session", duration: "2.5 hours", videoId: "CFeP5lqp_oc", channel: "Nature Study", type: "nature", viewers: "1.4K watching" },
    { title: "Productivity Study With Me", duration: "2 hours", videoId: "8s0TPp-zbaU", channel: "Thomas Frank", type: "productivity", viewers: "2.8K watching" },
    { title: "PhD Research Session", duration: "3.5 hours", videoId: "7i_N3Rs1y4A", channel: "The PhD Life", type: "phd", viewers: "623 watching" },
    { title: "Korean Study Aesthetic", duration: "2 hours", videoId: "3xDXAjmN8eY", channel: "Study With Jess", type: "korean", viewers: "3.6K watching" },
    { title: "Exam Prep Study Session", duration: "2.5 hours", videoId: "xvXvBKGNGdM", channel: "ExamSuccess", type: "exam", viewers: "1.8K watching" },
    { title: "Morning Routine Study", duration: "1.5 hours", videoId: "tQzx6qJVaYE", channel: "Morning Studies", type: "morning", viewers: "2.3K watching" },
    { title: "Cambridge Study Session", duration: "2.5 hours", videoId: "2pVvBJmKJXQ", channel: "Jack Edwards", type: "cambridge", viewers: "1.9K watching" },
    { title: "Twilight Study Vibes", duration: "2 hours", videoId: "mxPztNv1CSQ", channel: "Evening Study", type: "twilight", viewers: "1.1K watching" },
    { title: "Bookstore Study Ambience", duration: "1.5 hours", videoId: "vX3g_r6xtW4", channel: "Book Study", type: "bookstore", viewers: "845 watching" },
    { title: "Mountain View Study", duration: "2.5 hours", videoId: "HPsJzHc6Fkw", channel: "Scenic Study", type: "mountain", viewers: "1.3K watching" },
    { title: "City View Study Session", duration: "2 hours", videoId: "sEQf3njFg5E", channel: "Urban Study", type: "city", viewers: "2.1K watching" },
    { title: "Vintage Desk Study", duration: "2 hours", videoId: "9VXaFvkrjAg", channel: "Retro Studies", type: "vintage", viewers: "967 watching" },
    { title: "Beach Study Session", duration: "2 hours", videoId: "qNKZUxRXF8Y", channel: "Ocean Studies", type: "beach", viewers: "1.6K watching" },
    { title: "Garden Study With Me", duration: "1.5 hours", videoId: "HPsJzHc6Fkw", channel: "Garden Study", type: "garden", viewers: "743 watching" },
    { title: "Winter Study Cozy", duration: "2 hours", videoId: "EcEMX-63PKY", channel: "Winter Study", type: "winter", viewers: "1.8K watching" },
    { title: "Apartment Study Session", duration: "2.5 hours", videoId: "7fEHnJAcEn8", channel: "Home Study", type: "apartment", viewers: "1.4K watching" },
    { title: "Sunday Study Marathon", duration: "4 hours", videoId: "WaBm_jdSAUk", channel: "Weekend Studies", type: "weekend", viewers: "2.7K watching" }
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
      atmospheric: <Moon className="w-4 h-4" />,
      dreamy: <Moon className="w-4 h-4" />,
      upbeat: <Sun className="w-4 h-4" />,
      retro: <Sun className="w-4 h-4" />,
      natural: <Sparkles className="w-4 h-4" />,
      nostalgic: <Sparkles className="w-4 h-4" />,
      intimate: <Moon className="w-4 h-4" />,
      ethereal: <Moon className="w-4 h-4" />,
      meditative: <Sparkles className="w-4 h-4" />,
      cultural: <Sparkles className="w-4 h-4" />,
      warm: <Coffee className="w-4 h-4" />,
      seasonal: <Sparkles className="w-4 h-4" />,
      melodic: <Music className="w-4 h-4" />
    };
    return icons[mood as keyof typeof icons] || <Music className="w-4 h-4" />;
  };

  const getRecommendations = () => {
    return selectedCategory === 'lofi' ? lofiBeats : studyWithMe;
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
          <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
            <Headphones className="w-6 h-6 text-white" />
          </div>
          Mood Enhance
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover your perfect study soundtrack and focus companions from curated YouTube collections
        </p>
      </div>

      {/* Category Selection */}
      <div className="flex justify-center gap-6">
        <Button
          variant={selectedCategory === 'lofi' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('lofi')}
          className={`flex items-center gap-3 px-6 py-3 text-base font-medium transition-all duration-300 ${
            selectedCategory === 'lofi' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg' 
              : 'border-2 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50'
          }`}
        >
          <Music className="w-5 h-5" />
          Lofi Beats
          <Badge variant="secondary" className="ml-1 bg-white/20 text-current">
            {lofiBeats.length}
          </Badge>
        </Button>
        <Button
          variant={selectedCategory === 'study' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('study')}
          className={`flex items-center gap-3 px-6 py-3 text-base font-medium transition-all duration-300 ${
            selectedCategory === 'study' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg' 
              : 'border-2 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50'
          }`}
        >
          <Users className="w-5 h-5" />
          Study With Me
          <Badge variant="secondary" className="ml-1 bg-white/20 text-current">
            {studyWithMe.length}
          </Badge>
        </Button>
      </div>

      {/* Recommendations Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getRecommendations().map((item, index) => (
          <Card 
            key={index} 
            className={`group relative overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 ${
              hoveredIndex === index ? 'ring-2 ring-indigo-400' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-60" />
            <div className="relative p-5 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-slate-800 leading-tight line-clamp-2 flex-1 group-hover:text-indigo-700 transition-colors">
                  {item.title}
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    openYouTube(item.videoId);
                  }}
                  className="ml-3 p-2 h-9 w-9 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 transition-all duration-300 hover:scale-110"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 font-medium">{item.channel}</span>
                <div className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3 h-3" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>
                  {selectedCategory === 'lofi' 
                    ? ('views' in item ? item.views : '') 
                    : ('viewers' in item ? item.viewers : '')
                  }
                </span>
                
                {selectedCategory === 'lofi' && 'mood' in item && (
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-white/50 rounded-full">
                    {getMoodIcon(item.mood)}
                    <span className="capitalize text-slate-600 font-medium">{item.mood}</span>
                  </div>
                )}
                
                {selectedCategory === 'study' && 'type' in item && (
                  <Badge variant="secondary" className="capitalize bg-indigo-100 text-indigo-700 border-0">
                    {item.type}
                  </Badge>
                )}
              </div>
              
              <Button
                onClick={() => openYouTube(item.videoId)}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2.5 transition-all duration-300 shadow-md hover:shadow-lg"
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
      <Card className="relative overflow-hidden border-0 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
        <div className="relative p-8 text-center space-y-4">
          <div className="inline-flex p-3 rounded-full bg-white/20 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Perfect Your Study Environment 🎧</h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Choose lofi beats for gentle background focus, or study-with-me videos for companionship and motivation. 
            Remember to take breaks every 25-50 minutes using the Pomodoro technique!
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">Focus Boost</Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">Stress Relief</Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">Productivity</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MoodEnhance;
