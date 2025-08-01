import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, Users, Video, MapPin, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const events = [
    {
      id: 1,
      title: "Sprint Planning",
      time: "9:00 AM - 11:00 AM",
      date: "2024-01-12",
      type: "meeting",
      attendees: ["Sarah Johnson", "Alex Chen", "Jordan Smith"],
      location: "Conference Room A",
      isVirtual: false,
      priority: "high"
    },
    {
      id: 2,
      title: "Daily Standup",
      time: "9:30 AM - 10:00 AM",
      date: "2024-01-12",
      type: "standup",
      attendees: ["Team"],
      location: "Virtual",
      isVirtual: true,
      priority: "medium"
    },
    {
      id: 3,
      title: "Security Review Meeting",
      time: "2:00 PM - 3:00 PM",
      date: "2024-01-12",
      type: "review",
      attendees: ["Mike Chen", "Jordan Smith"],
      location: "Virtual",
      isVirtual: true,
      priority: "high"
    },
    {
      id: 4,
      title: "Design System Workshop",
      time: "10:00 AM - 12:00 PM",
      date: "2024-01-13",
      type: "workshop",
      attendees: ["Emily Rodriguez", "Sarah Johnson"],
      location: "Design Studio",
      isVirtual: false,
      priority: "medium"
    },
    {
      id: 5,
      title: "Client Demo Preparation",
      time: "3:00 PM - 4:30 PM",
      date: "2024-01-13",
      type: "preparation",
      attendees: ["Jordan Smith", "Sarah Johnson", "Alex Chen"],
      location: "Virtual",
      isVirtual: true,
      priority: "high"
    },
    {
      id: 6,
      title: "Weekly Team Retrospective",
      time: "4:00 PM - 5:00 PM",
      date: "2024-01-15",
      type: "retrospective",
      attendees: ["Team"],
      location: "Conference Room B",
      isVirtual: false,
      priority: "medium"
    }
  ];

  const upcomingEvents = events.filter(event => 
    new Date(event.date) >= new Date('2024-01-12')
  ).slice(0, 5);

  const todaysEvents = events.filter(event => event.date === "2024-01-12");

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-primary text-primary-foreground';
      case 'standup':
        return 'bg-success text-success-foreground';
      case 'review':
        return 'bg-warning text-warning-foreground';
      case 'workshop':
        return 'bg-accent text-accent-foreground';
      case 'preparation':
        return 'bg-secondary text-secondary-foreground';
      case 'retrospective':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'secondary';
      case 'low':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
          <p className="text-muted-foreground">Manage your meetings and project events</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold text-foreground">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Month</Button>
              <Button variant="outline" size="sm">Week</Button>
              <Button variant="outline" size="sm">Day</Button>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="mb-6">
            <h3 className="font-medium text-foreground mb-3">Today - January 12, 2024</h3>
            <div className="space-y-3">
              {todaysEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type).split(' ')[0]}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <Badge variant={getPriorityBadge(event.priority)} className="text-[10px] px-1.5 py-0.5 h-4">
                        {event.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        {event.isVirtual ? (
                          <Video className="h-3 w-3" />
                        ) : (
                          <MapPin className="h-3 w-3" />
                        )}
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees.length} attendees
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Join
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="p-2 text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 6; // Start from previous month
              const isToday = day === 12;
              const hasEvents = [12, 13, 15].includes(day);
              
              return (
                <div 
                  key={i} 
                  className={`p-2 text-sm cursor-pointer rounded-lg transition-colors relative ${
                    isToday 
                      ? 'bg-primary text-primary-foreground font-medium' 
                      : hasEvents
                      ? 'bg-muted hover:bg-muted/80'
                      : 'hover:bg-muted/50'
                  } ${day <= 0 || day > 31 ? 'text-muted-foreground/50' : 'text-foreground'}`}
                >
                  {day > 0 && day <= 31 ? day : ''}
                  {hasEvents && !isToday && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Upcoming Events Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card className="p-4">
            <h3 className="font-semibold text-foreground mb-3">This Week</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Events</span>
                <span className="font-medium text-foreground">{events.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Meetings</span>
                <span className="font-medium text-foreground">
                  {events.filter(e => e.type === 'meeting').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Virtual</span>
                <span className="font-medium text-foreground">
                  {events.filter(e => e.isVirtual).length}
                </span>
              </div>
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${getEventTypeColor(event.type).split(' ')[0]}`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm truncate">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Meeting Types Legend */}
          <Card className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Event Types</h3>
            <div className="space-y-2">
              {[
                { type: 'meeting', label: 'Meetings' },
                { type: 'standup', label: 'Standups' },
                { type: 'review', label: 'Reviews' },
                { type: 'workshop', label: 'Workshops' },
                { type: 'retrospective', label: 'Retrospectives' }
              ].map((item) => (
                <div key={item.type} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getEventTypeColor(item.type).split(' ')[0]}`} />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;