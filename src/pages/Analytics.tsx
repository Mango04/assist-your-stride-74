import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, CheckCircle, AlertTriangle, Calendar, Download } from "lucide-react";

const Analytics = () => {
  const sprintData = [
    { name: 'Sprint 20', completed: 35, planned: 40, velocity: 87.5 },
    { name: 'Sprint 21', completed: 42, planned: 45, velocity: 93.3 },
    { name: 'Sprint 22', completed: 38, planned: 42, velocity: 90.5 },
    { name: 'Sprint 23', completed: 45, planned: 48, velocity: 93.8 },
    { name: 'Sprint 24', completed: 27, planned: 42, velocity: 64.3 },
  ];

  const burndownData = [
    { day: 'Day 1', remaining: 42, ideal: 42 },
    { day: 'Day 2', remaining: 38, ideal: 38 },
    { day: 'Day 3', remaining: 35, ideal: 34 },
    { day: 'Day 4', remaining: 32, ideal: 30 },
    { day: 'Day 5', remaining: 28, ideal: 26 },
    { day: 'Day 6', remaining: 25, ideal: 22 },
    { day: 'Day 7', remaining: 22, ideal: 18 },
    { day: 'Day 8', remaining: 18, ideal: 14 },
    { day: 'Day 9', remaining: 15, ideal: 10 },
    { day: 'Day 10', remaining: 15, ideal: 6 },
  ];

  const taskDistribution = [
    { name: 'Stories', value: 45, color: '#3b82f6' },
    { name: 'Bugs', value: 20, color: '#ef4444' },
    { name: 'Tasks', value: 25, color: '#10b981' },
    { name: 'Epics', value: 10, color: '#f59e0b' },
  ];

  const teamPerformance = [
    { name: 'Sarah', completed: 12, assigned: 14, efficiency: 85.7 },
    { name: 'Alex', completed: 8, assigned: 10, efficiency: 80.0 },
    { name: 'Jordan', completed: 6, assigned: 8, efficiency: 75.0 },
    { name: 'Mike', completed: 5, assigned: 6, efficiency: 83.3 },
    { name: 'Emily', completed: 9, assigned: 11, efficiency: 81.8 },
  ];

  const kpis = [
    {
      title: "Sprint Velocity",
      value: "64.3%",
      change: -28.7,
      trend: "down",
      description: "Story points completed vs planned"
    },
    {
      title: "Team Efficiency",
      value: "81.2%",
      change: +3.2,
      trend: "up",
      description: "Tasks completed vs assigned"
    },
    {
      title: "Bug Rate",
      value: "15%",
      change: -5.1,
      trend: "up",
      description: "Bugs vs total tickets"
    },
    {
      title: "Cycle Time",
      value: "3.2 days",
      change: -0.8,
      trend: "up",
      description: "Average time to complete tasks"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Project Analytics</h1>
          <p className="text-muted-foreground">Track team performance and project metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 30 days
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">{kpi.title}</h3>
              <div className={`flex items-center gap-1 ${
                kpi.trend === 'up' ? 'text-success' : 'text-warning'
              }`}>
                {kpi.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span className="text-xs font-medium">
                  {kpi.change > 0 ? '+' : ''}{kpi.change}%
                </span>
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">{kpi.value}</p>
            <p className="text-xs text-muted-foreground">{kpi.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sprint Velocity Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Sprint Velocity</h3>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 h-4">
              Story Points
            </Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sprintData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Bar dataKey="planned" fill="hsl(var(--muted))" name="Planned" />
              <Bar dataKey="completed" fill="hsl(var(--primary))" name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Burndown Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Sprint Burndown</h3>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 h-4">
              Current Sprint
            </Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={burndownData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="ideal" 
                stroke="hsl(var(--muted-foreground))" 
                strokeDasharray="5 5"
                name="Ideal"
              />
              <Line 
                type="monotone" 
                dataKey="remaining" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Actual"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Task Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={taskDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {taskDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {taskDistribution.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
                <span className="text-sm font-medium text-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Team Performance */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Team Performance</h3>
          <div className="space-y-4">
            {teamPerformance.map((member, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-ai rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-xs">
                      {member.name.substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.completed}/{member.assigned} tasks completed
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{member.efficiency}%</p>
                    <p className="text-xs text-muted-foreground">Efficiency</p>
                  </div>
                  <div className={`flex items-center gap-1 ${
                    member.efficiency >= 80 ? 'text-success' : 'text-warning'
                  }`}>
                    {member.efficiency >= 80 ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertTriangle className="h-4 w-4" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;