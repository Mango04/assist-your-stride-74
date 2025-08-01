import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Bell, Shield, Palette, Globe, Database, Key, Trash2, Save } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2">
            <Palette className="h-4 w-4" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="integrations" className="gap-2">
            <Database className="h-4 w-4" />
            Integrations
          </TabsTrigger>
          <TabsTrigger value="advanced" className="gap-2">
            <Globe className="h-4 w-4" />
            Advanced
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Profile Information</h3>
            <div className="flex items-center gap-6 mb-6">
              <Avatar className="h-20 w-20">
                <div className="w-full h-full bg-gradient-ai rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm">Change Avatar</Button>
                <p className="text-sm text-muted-foreground">JPG, PNG or GIF. Max size 2MB.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Product Manager" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Engineering" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="PST (UTC-8)" />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Notification Preferences</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Email Notifications</h4>
                <div className="space-y-3">
                  {[
                    { label: "Task assignments", description: "When you're assigned to a new task" },
                    { label: "Project updates", description: "When project status changes" },
                    { label: "Deadline reminders", description: "24 hours before task deadlines" },
                    { label: "Team mentions", description: "When someone mentions you" },
                    { label: "Weekly summaries", description: "Weekly project progress reports" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch defaultChecked={index < 3} />
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Push Notifications</h4>
                <div className="space-y-3">
                  {[
                    { label: "Urgent tasks", description: "High priority task notifications" },
                    { label: "Meeting reminders", description: "15 minutes before meetings" },
                    { label: "Blocked tasks", description: "When your tasks become blocked" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch defaultChecked={index < 2} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Security Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Password</h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button variant="outline" size="sm">Update Password</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-foreground mb-3">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Enable 2FA</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 h-4">
                      Disabled
                    </Badge>
                    <Button variant="outline" size="sm">Setup</Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-foreground mb-3">API Keys</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Personal Access Token</p>
                      <p className="text-sm text-muted-foreground">Created on Jan 15, 2024 • Last used 2 days ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Key className="h-4 w-4 mr-2" />
                      Regenerate
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    <Key className="h-4 w-4 mr-2" />
                    Generate New Token
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Appearance Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Theme</h4>
                <div className="grid grid-cols-3 gap-3">
                  {['Light', 'Dark', 'System'].map((theme) => (
                    <Card key={theme} className="p-4 cursor-pointer border-2 border-transparent hover:border-primary/50 transition-colors">
                      <div className={`w-full h-16 rounded-lg mb-2 ${
                        theme === 'Light' ? 'bg-background border' : 
                        theme === 'Dark' ? 'bg-slate-900' : 
                        'bg-gradient-to-r from-background to-slate-900'
                      }`} />
                      <p className="text-sm font-medium text-center">{theme}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-foreground mb-3">Layout Preferences</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Compact mode</p>
                      <p className="text-sm text-muted-foreground">Use smaller spacing and elements</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Sidebar collapsed by default</p>
                      <p className="text-sm text-muted-foreground">Start with sidebar minimized</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Show animations</p>
                      <p className="text-sm text-muted-foreground">Enable smooth transitions and animations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Connected Integrations</h3>
            <div className="space-y-4">
              {[
                { name: "Jira", status: "Connected", description: "Sync tasks and issues with Jira" },
                { name: "Slack", status: "Connected", description: "Get notifications in Slack channels" },
                { name: "GitHub", status: "Disconnected", description: "Link commits to tasks and track progress" },
                { name: "Google Calendar", status: "Connected", description: "Sync meetings and deadlines" },
                { name: "Microsoft Teams", status: "Disconnected", description: "Team communication and file sharing" }
              ].map((integration, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{integration.name}</h4>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={integration.status === 'Connected' ? 'default' : 'secondary'}
                      className="text-[10px] px-1.5 py-0.5 h-4"
                    >
                      {integration.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      {integration.status === 'Connected' ? 'Configure' : 'Connect'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Advanced Tab */}
        <TabsContent value="advanced" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Advanced Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Data Export</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Export your data</p>
                    <p className="text-sm text-muted-foreground">Download all your tasks, projects, and team data</p>
                  </div>
                  <Button variant="outline" size="sm">Export Data</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-foreground mb-3">Account Management</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Deactivate account</p>
                      <p className="text-sm text-muted-foreground">Temporarily disable your account</p>
                    </div>
                    <Button variant="outline" size="sm">Deactivate</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-destructive">Delete account</p>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                    </div>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-foreground mb-3">System Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Version</p>
                    <p className="font-medium text-foreground">v2.1.0</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Updated</p>
                    <p className="font-medium text-foreground">Jan 10, 2024</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Region</p>
                    <p className="font-medium text-foreground">US West 1</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Support</p>
                    <p className="font-medium text-foreground">Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;