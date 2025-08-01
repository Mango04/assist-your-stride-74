import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquare, Send, Search, MoreHorizontal, Pin } from "lucide-react";

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      lastMessage: "The new component design looks great! Should we proceed with implementation?",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      pinned: true
    },
    {
      id: 2,
      name: "Development Team",
      role: "Team Chat",
      lastMessage: "Alex: Sprint planning meeting moved to 3 PM today",
      timestamp: "15 min ago",
      unread: 0,
      online: false,
      pinned: false
    },
    {
      id: 3,
      name: "Mike Chen",
      role: "Security Lead",
      lastMessage: "Security review for API integration is complete. No blockers found.",
      timestamp: "1 hour ago",
      unread: 1,
      online: true,
      pinned: false
    },
    {
      id: 4,
      name: "Project Managers",
      role: "Team Chat",
      lastMessage: "Jordan: Q1 roadmap draft is ready for review",
      timestamp: "3 hours ago",
      unread: 0,
      online: false,
      pinned: false
    }
  ];

  const currentMessages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hey! I've been working on the AI conversation component we discussed yesterday.",
      timestamp: "10:30 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "Me",
      message: "That's great! How's the progress looking?",
      timestamp: "10:32 AM",
      isMe: true
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      message: "The new component design looks great! Should we proceed with implementation?",
      timestamp: "10:45 AM",
      isMe: false
    }
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-background">
      {/* Conversations List */}
      <div className="w-80 border-r border-border bg-card">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-foreground">Messages</h1>
            <Button size="sm" className="h-8">
              <MessageSquare className="h-4 w-4 mr-2" />
              New Chat
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search conversations..." 
              className="pl-9"
            />
          </div>
        </div>
        
        <div className="overflow-y-auto">
          {conversations.map((conversation) => (
            <div 
              key={conversation.id}
              className="p-4 border-b border-border hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <div className="w-full h-full bg-gradient-ai rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {conversation.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </Avatar>
                  {conversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-foreground truncate">{conversation.name}</h3>
                      {conversation.pinned && (
                        <Pin className="h-3 w-3 text-muted-foreground" />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{conversation.role}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-foreground truncate">{conversation.lastMessage}</p>
                    {conversation.unread > 0 && (
                      <Badge variant="destructive" className="ml-2 text-[10px] px-1.5 py-0.5 h-4">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <div className="w-full h-full bg-gradient-ai rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-xs">SJ</span>
                </div>
              </Avatar>
              <div>
                <h3 className="font-medium text-foreground">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Frontend Developer • Online</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {currentMessages.map((message) => (
              <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isMe 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-foreground'
                }`}>
                  <p className="text-sm">{message.message}</p>
                  <p className={`text-xs mt-1 ${
                    message.isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center gap-2">
            <Input 
              placeholder="Type a message..." 
              className="flex-1"
            />
            <Button size="sm" className="px-3">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;