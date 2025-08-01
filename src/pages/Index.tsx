import MicroDashboard from "@/components/dashboard/MicroDashboard";
import ChatInterface from "@/components/chat/ChatInterface";

const Index = () => {
  return (
    <>
      {/* Micro Dashboard */}
      <div className="p-4">
        <MicroDashboard />
      </div>
      
      {/* Main Chat Interface */}
      <div className="flex-1 px-4 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-280px)]">
          
          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-soft border border-border h-full">
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-ai rounded-xl flex items-center justify-center shadow-ai animate-float">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-foreground">Project Assistant</h1>
                    <p className="text-sm text-muted-foreground">
                      Your intelligent teammate for project management
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="h-[calc(100%-120px)]">
                <ChatInterface />
              </div>
            </div>
          </div>
          
          {/* Sidebar - Context & Quick Actions */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-card rounded-xl shadow-soft border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="font-medium text-sm text-secondary-foreground">Create Task</div>
                  <div className="text-xs text-muted-foreground">Add a new task to your project</div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg bg-warning-soft hover:bg-warning-soft/80 transition-colors">
                  <div className="font-medium text-sm text-foreground">Report Blocker</div>
                  <div className="text-xs text-muted-foreground">Flag an issue that's stopping progress</div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg bg-success-soft hover:bg-success-soft/80 transition-colors">
                  <div className="font-medium text-sm text-foreground">Team Check-in</div>
                  <div className="text-xs text-muted-foreground">Get status updates from your team</div>
                </button>
              </div>
            </div>
            
            {/* AI Insights */}
            <div className="bg-card rounded-xl shadow-soft border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">AI Insights</h3>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-gradient-subtle border border-border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Potential Risk</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        API integration deadline might be at risk due to security review delay
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-gradient-subtle border border-border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Suggestion</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Alex has capacity to help with frontend tasks this week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;