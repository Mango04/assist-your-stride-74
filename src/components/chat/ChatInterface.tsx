import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
  actions?: ActionSuggestion[];
  context?: MessageContext;
}

interface ActionSuggestion {
  id: string;
  label: string;
  type: 'assign' | 'escalate' | 'reschedule' | 'info';
  action: () => void;
}

interface MessageContext {
  type: 'blocker_detected' | 'task_assigned' | 'deadline_risk' | 'suggestion';
  severity?: 'low' | 'medium' | 'high';
  data?: any;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi there! I'm your AI project assistant. I can help you manage tasks, resolve blockers, and keep your team aligned. What can I help you with today?",
      timestamp: new Date(),
      actions: [
        { id: '1', label: 'Show my blockers', type: 'info', action: () => handleShowBlockers() },
        { id: '2', label: 'Check team availability', type: 'info', action: () => handleCheckTeam() },
        { id: '3', label: 'Create new task', type: 'assign', action: () => handleCreateTask() },
      ]
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    if (input.includes('blocked') || input.includes('blocker')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "I can see you're dealing with a blocker. I've detected that your API integration task is blocked by a security review. I've automatically created a ticket for the security team and assigned it to their lead, Mike.",
        timestamp: new Date(),
        context: {
          type: 'blocker_detected',
          severity: 'high',
          data: { taskId: '3', blocker: 'Security review pending' }
        },
        actions: [
          { id: '1', label: 'Escalate to manager', type: 'escalate', action: () => handleEscalate() },
          { id: '2', label: 'Suggest alternative approach', type: 'info', action: () => handleAlternative() },
          { id: '3', label: 'Set reminder for follow-up', type: 'assign', action: () => handleReminder() },
        ]
      };
    }
    
    if (input.includes('who') && (input.includes('free') || input.includes('available'))) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "Based on current workloads, Alex is most available (45% capacity) and has relevant frontend skills for your task. Jordan is also available (70% capacity) and could help with backend work. Would you like me to assign something to either of them?",
        timestamp: new Date(),
        actions: [
          { id: '1', label: 'Assign to Alex', type: 'assign', action: () => handleAssignToAlex() },
          { id: '2', label: 'Assign to Jordan', type: 'assign', action: () => handleAssignToJordan() },
          { id: '3', label: 'Show detailed availability', type: 'info', action: () => handleShowAvailability() },
        ]
      };
    }

    return {
      id: Date.now().toString(),
      type: 'ai',
      content: "I understand. Let me help you with that. Based on your current project context, I can suggest a few approaches. What specific aspect would you like me to focus on?",
      timestamp: new Date(),
      actions: [
        { id: '1', label: 'Analyze dependencies', type: 'info', action: () => handleAnalyzeDeps() },
        { id: '2', label: 'Check for risks', type: 'info', action: () => handleCheckRisks() },
      ]
    };
  };

  // Action handlers
  const handleShowBlockers = () => console.log('Showing blockers');
  const handleCheckTeam = () => console.log('Checking team');
  const handleCreateTask = () => console.log('Creating task');
  const handleEscalate = () => console.log('Escalating');
  const handleAlternative = () => console.log('Suggesting alternative');
  const handleReminder = () => console.log('Setting reminder');
  const handleAssignToAlex = () => console.log('Assigning to Alex');
  const handleAssignToJordan = () => console.log('Assigning to Jordan');
  const handleShowAvailability = () => console.log('Showing availability');
  const handleAnalyzeDeps = () => console.log('Analyzing dependencies');
  const handleCheckRisks = () => console.log('Checking risks');

  const getContextIcon = (context?: MessageContext) => {
    if (!context) return null;
    
    switch (context.type) {
      case 'blocker_detected':
        return <AlertCircle className="h-4 w-4 text-warning" />;
      case 'task_assigned':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'suggestion':
        return <Lightbulb className="h-4 w-4 text-accent" />;
      default:
        return null;
    }
  };

  const getContextBadge = (context?: MessageContext) => {
    if (!context) return null;
    
    return (
      <Badge 
        variant={context.severity === 'high' ? 'destructive' : 'secondary'}
        className="text-xs"
      >
        {context.type.replace('_', ' ')}
      </Badge>
    );
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.type !== 'user' && (
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 bg-gradient-ai rounded-lg flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}
              
              <div className={`max-w-[85%] ${message.type === 'user' ? 'order-1' : ''}`}>
                {message.context && (
                  <div className="flex items-center gap-2 mb-2 ml-1">
                    {getContextIcon(message.context)}
                    {getContextBadge(message.context)}
                  </div>
                )}
                
                <div className={`px-4 py-3 rounded-xl ${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted/50'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
                
                {message.actions && message.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 ml-1">
                    {message.actions.map((action) => (
                      <Button
                        key={action.id}
                        variant="outline"
                        size="sm"
                        onClick={action.action}
                        className="text-xs h-7 px-3 bg-background/50 hover:bg-background"
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
              
              {message.type === 'user' && (
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 bg-secondary rounded-lg flex items-center justify-center">
                    <User className="h-4 w-4 text-secondary-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4">
              <div className="w-7 h-7 bg-gradient-ai rounded-lg flex items-center justify-center animate-pulse">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-muted/50 px-4 py-3 rounded-xl">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border/50 bg-background p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Message Project Assistant..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="pr-12 h-12 bg-muted/30 border-border/50 rounded-xl resize-none focus:bg-background transition-colors"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              size="sm"
              className={`absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-lg transition-all ${
                inputValue.trim() 
                  ? 'bg-primary hover:bg-primary/90' 
                  : 'bg-muted-foreground/20 hover:bg-muted-foreground/30'
              }`}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex gap-2 mt-3 flex-wrap">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setInputValue("What's blocking me?")}
              className="h-8 px-3 text-xs bg-muted/30 hover:bg-muted/50"
            >
              What's blocking me?
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setInputValue("Who can help with frontend work?")}
              className="h-8 px-3 text-xs bg-muted/30 hover:bg-muted/50"
            >
              Who's available to help?
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setInputValue("Show team workload")}
              className="h-8 px-3 text-xs bg-muted/30 hover:bg-muted/50"
            >
              Team status
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;