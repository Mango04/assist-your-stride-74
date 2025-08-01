import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertTriangle, Users, Target, Calendar, PlayCircle, PauseCircle, Bug, FileText } from "lucide-react";

interface Task {
  id: string;
  title: string;
  type: 'story' | 'task' | 'bug' | 'epic';
  status: 'todo' | 'inprogress' | 'blocked' | 'done';
  priority: 'lowest' | 'low' | 'medium' | 'high' | 'highest';
  assignee?: string;
  dueDate?: string;
  storyPoints?: number;
}

interface Sprint {
  name: string;
  progress: number;
  daysRemaining: number;
  totalStoryPoints: number;
  completedStoryPoints: number;
}

interface TeamMember {
  id: string;
  name: string;
  workload: number; // 0-100
  status: 'available' | 'busy' | 'offline';
  activeTasksCount: number;
  capacity: number;
}

const MicroDashboard = () => {
  // Mock data - in real app this would come from your backend/Jira API
  const currentSprint: Sprint = {
    name: "AI Platform Sprint 24",
    progress: 65,
    daysRemaining: 5,
    totalStoryPoints: 42,
    completedStoryPoints: 27
  };

  const userTasks: Task[] = [
    { 
      id: '1', 
      title: 'Design AI conversation flow', 
      type: 'story',
      status: 'inprogress', 
      priority: 'high',
      dueDate: '2024-01-15',
      storyPoints: 8
    },
    { 
      id: '2', 
      title: 'Fix authentication bug in production', 
      type: 'bug',
      status: 'todo', 
      priority: 'highest',
      dueDate: '2024-01-12',
      storyPoints: 3
    },
    { 
      id: '3', 
      title: 'API integration security review', 
      type: 'task',
      status: 'blocked', 
      priority: 'high',
      storyPoints: 5
    },
  ];

  const teamMembers: TeamMember[] = [
    { id: '1', name: 'Sarah', workload: 85, status: 'busy', activeTasksCount: 4, capacity: 8 },
    { id: '2', name: 'Alex', workload: 45, status: 'available', activeTasksCount: 2, capacity: 8 },
    { id: '3', name: 'Jordan', workload: 70, status: 'available', activeTasksCount: 3, capacity: 6 },
  ];

  const getTaskTypeIcon = (type: Task['type']) => {
    switch (type) {
      case 'story':
        return <FileText className="h-3 w-3 text-success" />;
      case 'bug':
        return <Bug className="h-3 w-3 text-destructive" />;
      case 'task':
        return <CheckCircle className="h-3 w-3 text-primary" />;
      case 'epic':
        return <Target className="h-3 w-3 text-accent" />;
      default:
        return <Target className="h-3 w-3 text-muted-foreground" />;
    }
  };

  const getTaskStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'done':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'blocked':
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'inprogress':
        return <PlayCircle className="h-4 w-4 text-primary" />;
      case 'todo':
        return <PauseCircle className="h-4 w-4 text-muted-foreground" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'highest':
        return 'destructive';
      case 'high':
        return 'destructive';
      case 'medium':
        return 'secondary';
      case 'low':
        return 'outline';
      case 'lowest':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const getWorkloadColor = (workload: number) => {
    if (workload >= 80) return 'text-warning';
    if (workload >= 60) return 'text-accent';
    return 'text-success';
  };

  const blockedTasks = userTasks.filter(t => t.status === 'blocked').length;
  const inProgressTasks = userTasks.filter(t => t.status === 'inprogress').length;
  const todayDueTasks = userTasks.filter(t => t.dueDate === '2024-01-12').length;

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          
          {/* Sprint Progress */}
          <Card className="p-3 shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xs text-foreground">{currentSprint.name}</h3>
              <Badge variant="outline" className="text-xs">
                {currentSprint.daysRemaining}d left
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Story Points</span>
                <span className="font-medium">{currentSprint.completedStoryPoints}/{currentSprint.totalStoryPoints}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div 
                  className="bg-primary h-1.5 rounded-full transition-all"
                  style={{ width: `${currentSprint.progress}%` }}
                />
              </div>
            </div>
          </Card>

          {/* My Tasks Summary */}
          <Card className="p-3 shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xs text-foreground">My Tasks</h3>
              <div className="flex gap-1">
                {blockedTasks > 0 && (
                  <Badge variant="destructive" className="text-[10px] px-1.5 py-0.5 h-4">
                    {blockedTasks} blocked
                  </Badge>
                )}
                {todayDueTasks > 0 && (
                  <Badge variant="secondary" className="text-xs px-1 py-0">
                    {todayDueTasks} due
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">In Progress: {inProgressTasks}</span>
              <span className="text-muted-foreground">Total: {userTasks.length}</span>
            </div>
          </Card>

          {/* Recent Tasks */}
          <Card className="p-3 shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xs text-foreground">Recent Tasks</h3>
            </div>
            <div className="space-y-1">
              {userTasks.slice(0, 2).map((task) => (
                <div key={task.id} className="flex items-center gap-2">
                  {getTaskTypeIcon(task.type)}
                  {getTaskStatusIcon(task.status)}
                  <span className="text-xs text-foreground truncate flex-1">
                    {task.title}
                  </span>
                  <Badge 
                    variant={getPriorityColor(task.priority)}
                    className="text-[10px] px-1.5 py-0.5 h-4"
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Team Capacity */}
          <Card className="p-3 shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-xs text-foreground">Team Capacity</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" />
                {teamMembers.filter(m => m.status === 'available').length}/{teamMembers.length}
              </div>
            </div>
            <div className="space-y-1">
              {teamMembers.slice(0, 2).map((member) => (
                <div key={member.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      member.status === 'available' ? 'bg-success' : 
                      member.status === 'busy' ? 'bg-warning' : 'bg-muted-foreground'
                    }`} />
                    <span className="text-xs text-foreground">{member.name}</span>
                  </div>
                  <span className={`text-xs font-medium ${getWorkloadColor(member.workload)}`}>
                    {member.workload}%
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MicroDashboard;