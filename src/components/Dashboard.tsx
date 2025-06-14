
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, CheckCircle, Heart, Brain, Target, Sparkles } from "lucide-react";

const Dashboard = () => {
  const [weeklyData] = useState({
    tasksCompleted: 12,
    totalTasks: 18,
    studyHours: 24,
    moodAverage: 4.2,
    streakDays: 5
  });

  const recentTasks = [
    { id: 1, title: "Chemistry Chapter 5", completed: true, subject: "Chemistry" },
    { id: 2, title: "Math Problem Set", completed: true, subject: "Mathematics" },
    { id: 3, title: "History Essay Draft", completed: false, subject: "History" },
    { id: 4, title: "Physics Lab Report", completed: true, subject: "Physics" },
  ];

  const moodTrend = [
    { day: 'Mon', mood: 4 },
    { day: 'Tue', mood: 3 },
    { day: 'Wed', mood: 5 },
    { day: 'Thu', mood: 4 },
    { day: 'Fri', mood: 5 },
    { day: 'Sat', mood: 4 },
    { day: 'Sun', mood: 4 },
  ];

  const completionRate = Math.round((weeklyData.tasksCompleted / weeklyData.totalTasks) * 100);

  const getMoodEmoji = (mood: number) => {
    if (mood >= 4.5) return '😄';
    if (mood >= 4) return '😊';
    if (mood >= 3.5) return '😐';
    if (mood >= 3) return '😟';
    return '😫';
  };

  const getMoodColor = (mood: number) => {
    if (mood >= 4.5) return 'text-green-600';
    if (mood >= 4) return 'text-blue-600';
    if (mood >= 3.5) return 'text-yellow-600';
    if (mood >= 3) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Your Wellness Dashboard</h2>
        <p className="text-gray-600">Track your progress and celebrate your achievements</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{completionRate}%</p>
              <p className="text-sm text-gray-600">Completion Rate</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-r from-green-50 to-teal-50 border-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{weeklyData.studyHours}</p>
              <p className="text-sm text-gray-600">Study Hours</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 border-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 flex items-center gap-1">
                {weeklyData.moodAverage} {getMoodEmoji(weeklyData.moodAverage)}
              </p>
              <p className="text-sm text-gray-600">Avg Mood</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 border-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{weeklyData.streakDays}</p>
              <p className="text-sm text-gray-600">Day Streak</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Progress Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Weekly Progress
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Tasks Completed</span>
                <span className="text-sm text-gray-600">{weeklyData.tasksCompleted}/{weeklyData.totalTasks}</span>
              </div>
              <Progress value={completionRate} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Study Goal</span>
                <span className="text-sm text-gray-600">{weeklyData.studyHours}/30 hours</span>
              </div>
              <Progress value={(weeklyData.studyHours / 30) * 100} className="h-2" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Mood Trend
          </h3>
          
          <div className="space-y-3">
            {moodTrend.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium w-12">{day.day}</span>
                <div className="flex-1 mx-3">
                  <Progress value={day.mood * 20} className="h-2" />
                </div>
                <span className={`text-lg ${getMoodColor(day.mood)}`}>
                  {getMoodEmoji(day.mood)}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Tasks */}
      <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Recent Tasks
        </h3>
        
        <div className="space-y-3">
          {recentTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className={`w-5 h-5 ${task.completed ? 'text-green-600' : 'text-gray-400'}`} />
                <div>
                  <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.title}
                  </h4>
                  <p className="text-sm text-gray-600">{task.subject}</p>
                </div>
              </div>
              <Badge variant={task.completed ? "default" : "outline"}>
                {task.completed ? "Completed" : "Pending"}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Motivational Section */}
      <Card className="p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 border-0">
        <div className="text-center space-y-3">
          <Sparkles className="w-8 h-8 mx-auto text-purple-600" />
          <h3 className="text-xl font-semibold text-gray-800">You're doing amazing! 🌟</h3>
          <p className="text-gray-600">
            You've completed {weeklyData.tasksCompleted} tasks this week and maintained a {weeklyData.streakDays}-day streak. 
            Remember to take breaks and celebrate your progress - every step counts!
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge className="bg-purple-100 text-purple-700">Consistent Learner</Badge>
            <Badge className="bg-pink-100 text-pink-700">Wellness Warrior</Badge>
            <Badge className="bg-blue-100 text-blue-700">Goal Achiever</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
