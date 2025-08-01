import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Users, Mail, Calendar, MoreHorizontal, UserPlus } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      email: "sarah.johnson@company.com",
      workload: 85,
      activeTasksCount: 4,
      capacity: 8,
      status: 'busy',
      skills: ['React', 'TypeScript', 'UI/UX'],
      joinedDate: "Jan 2023",
      currentSprint: "AI Platform Sprint 24"
    },
    {
      id: 2,
      name: "Alex Chen",
      role: "Backend Developer",
      email: "alex.chen@company.com",
      workload: 45,
      activeTasksCount: 2,
      capacity: 8,
      status: 'available',
      skills: ['Node.js', 'Python', 'API Design'],
      joinedDate: "Mar 2023",
      currentSprint: "AI Platform Sprint 24"
    },
    {
      id: 3,
      name: "Jordan Smith",
      role: "Product Manager",
      email: "jordan.smith@company.com",
      workload: 70,
      activeTasksCount: 3,
      capacity: 6,
      status: 'available',
      skills: ['Product Strategy', 'Agile', 'Analytics'],
      joinedDate: "Dec 2022",
      currentSprint: "AI Platform Sprint 24"
    },
    {
      id: 4,
      name: "Mike Chen",
      role: "Security Lead",
      email: "mike.chen@company.com",
      workload: 60,
      activeTasksCount: 2,
      capacity: 7,
      status: 'available',
      skills: ['Security', 'DevOps', 'Compliance'],
      joinedDate: "Feb 2023",
      currentSprint: "Security Review Sprint"
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      role: "Designer",
      email: "emily.rodriguez@company.com",
      workload: 75,
      activeTasksCount: 3,
      capacity: 6,
      status: 'busy',
      skills: ['UI Design', 'Prototyping', 'User Research'],
      joinedDate: "Apr 2023",
      currentSprint: "Design System Sprint"
    }
  ];

  const getWorkloadColor = (workload: number) => {
    if (workload >= 80) return 'text-warning';
    if (workload >= 60) return 'text-accent';
    return 'text-success';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-success';
      case 'busy':
        return 'bg-warning';
      case 'offline':
        return 'bg-muted-foreground';
      default:
        return 'bg-muted-foreground';
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Team Management</h1>
          <p className="text-muted-foreground">Manage your team members and track their workload</p>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Members</p>
              <p className="text-xl font-bold text-foreground">{teamMembers.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/10 rounded-lg">
              <Users className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Available</p>
              <p className="text-xl font-bold text-foreground">
                {teamMembers.filter(m => m.status === 'available').length}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Users className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Busy</p>
              <p className="text-xl font-bold text-foreground">
                {teamMembers.filter(m => m.status === 'busy').length}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Calendar className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Workload</p>
              <p className="text-xl font-bold text-foreground">
                {Math.round(teamMembers.reduce((sum, m) => sum + m.workload, 0) / teamMembers.length)}%
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Team Members List */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Team Members</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Export</Button>
          </div>
        </div>

        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <div className="w-full h-full bg-gradient-ai rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-background`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium text-foreground">{member.name}</h3>
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0.5 h-4">
                      {member.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {member.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Joined {member.joinedDate}
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-[10px] px-1.5 py-0.5 h-4">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Active Tasks</p>
                  <p className="font-medium text-foreground">{member.activeTasksCount}/{member.capacity}</p>
                </div>
                
                <div className="w-24 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Workload</p>
                  <Progress value={member.workload} className="h-2" />
                  <p className={`text-sm font-medium mt-1 ${getWorkloadColor(member.workload)}`}>
                    {member.workload}%
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Sprint</p>
                  <p className="text-xs text-foreground max-w-20 truncate">{member.currentSprint}</p>
                </div>

                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Team;