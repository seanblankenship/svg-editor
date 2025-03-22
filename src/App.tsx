import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SplitEditorLayout } from '@/components/layout/split-editor-layout';
import env from '@/config/env';
import './App.css';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-background px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">{env.app.name}</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="border-r bg-muted/40 w-64 p-4 hidden md:block">
          <h2 className="font-medium mb-4">Tools</h2>
          <div className="flex flex-col gap-2">
            <Button variant="outline" className="justify-start">
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              </svg>
              Rectangle
            </Button>
            <Button variant="outline" className="justify-start">
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              Circle
            </Button>
            <Button variant="outline" className="justify-start">
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Line
            </Button>
          </div>
        </aside>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          <Tabs defaultValue="editor" className="w-full h-full flex flex-col">
            <div className="border-b px-4">
              <TabsList>
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="editor" className="flex-1 overflow-hidden p-0">
              <SplitEditorLayout className="h-full" />
            </TabsContent>

            <TabsContent value="preview" className="flex-1 p-4">
              <div className="w-full h-full bg-background rounded-md grid place-items-center">
                <p className="text-muted-foreground">Preview will be shown here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/20 px-4 py-3 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <div>{env.app.name} &copy; 2024</div>
          <div>Version {env.app.version}</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
