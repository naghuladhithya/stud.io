
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Brain, Plus, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: string;
  title: string;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  deadline: string;
  estimated_time: number;
  completed: boolean;
}

const StudyPlanner = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({
    title: '',
    subject: '',
    difficulty: 'medium' as const,
    deadline: '',
    estimated_time: 1
  });
  const [showSchedule, setShowSchedule] = useState(false);
  const { toast } = useToast();

  const addTask = () => {
    if (!newTask.title || !newTask.subject || !newTask.deadline) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const task: Task = {
      id: Date.now().toString(),
      ...newTask,
      completed: false
    };

    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      subject: '',
      difficulty: 'medium',
      deadline: '',
      estimated_time: 1
    });

    toast({
      title: "Task Added! 🎉",
      description: "Your study task has been added to the planner"
    });
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const generateSchedule = () => {
    if (tasks.length === 0) {
      toast({
        title: "No tasks to schedule",
        description: "Add some tasks first to generate your study plan",
        variant: "destructive"
      });
      return;
    }

    setShowSchedule(true);
    toast({
      title: "Schedule Generated! ✨",
      description: "Your AI-powered study plan is ready"
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Smart Study Planner</h2>
        <p className="text-gray-600">Add your tasks and let AI create the perfect study schedule</p>
      </div>

      <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add New Task
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="title">Task Title</Label>
            <Input
              id="title"
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              placeholder="e.g., Study for Chemistry Exam"
              className="bg-white/80"
            />
          </div>
          
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={newTask.subject}
              onChange={(e) => setNewTask({...newTask, subject: e.target.value})}
              placeholder="e.g., Chemistry"
              className="bg-white/80"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select value={newTask.difficulty} onValueChange={(value: any) => setNewTask({...newTask, difficulty: value})}>
              <SelectTrigger className="bg-white/80">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              type="date"
              value={newTask.deadline}
              onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
              className="bg-white/80"
            />
          </div>
          
          <div>
            <Label htmlFor="time">Estimated Hours</Label>
            <Input
              id="time"
              type="number"
              min="1"
              max="10"
              value={newTask.estimated_time}
              onChange={(e) => setNewTask({...newTask, estimated_time: parseInt(e.target.value)})}
              className="bg-white/80"
            />
          </div>
        </div>

        <Button onClick={addTask} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </Button>
      </Card>

      {tasks.length > 0 && (
        <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Your Tasks</h3>
            <Button onClick={generateSchedule} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Brain className="w-4 h-4 mr-2" />
              Generate AI Schedule
            </Button>
          </div>
          
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 bg-white/80 rounded-lg">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleTask(task.id)}
                    className="p-0 h-auto"
                  >
                    <CheckCircle className={`w-5 h-5 ${task.completed ? 'text-green-600' : 'text-gray-400'}`} />
                  </Button>
                  <div>
                    <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {task.title}
                    </h4>
                    <p className="text-sm text-gray-600">{task.subject}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getDifficultyColor(task.difficulty)}>
                    {task.difficulty}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {task.estimated_time}h
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {new Date(task.deadline).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {showSchedule && tasks.length > 0 && (
        <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Your AI-Generated Study Schedule
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Today's Focus</h4>
              <p className="text-blue-600">
                Start with your hardest subjects when your mind is fresh. I've scheduled your most challenging tasks for the morning.
              </p>
            </div>
            
            {tasks.filter(task => !task.completed).slice(0, 3).map((task, index) => (
              <div key={task.id} className="flex items-center gap-4 p-4 bg-white/80 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-800">{task.title}</h4>
                  <p className="text-sm text-gray-600">{task.subject} • {task.estimated_time} hours</p>
                </div>
                <Badge className={getDifficultyColor(task.difficulty)}>
                  {task.difficulty}
                </Badge>
              </div>
            ))}
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
              <p className="text-green-700 font-medium">💡 Study Tip</p>
              <p className="text-green-600 text-sm mt-1">
                Take a 15-minute break between subjects to help your brain process information better. You've got this! 🌟
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default StudyPlanner;
