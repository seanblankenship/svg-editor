import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-background px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">SVG Editor</h1>
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
              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              </svg>
              Rectangle
            </Button>
            <Button variant="outline" className="justify-start">
              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
              </svg>
              Circle
            </Button>
            <Button variant="outline" className="justify-start">
              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Line
            </Button>
          </div>
        </aside>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* SVG Canvas */}
          <div className="flex-1 p-4 overflow-auto">
            <Tabs defaultValue="canvas" className="w-full">
              <TabsList>
                <TabsTrigger value="canvas">Canvas</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="canvas" className="border rounded-md p-4 mt-2 h-[calc(100vh-150px)]">
                <div className="w-full h-full bg-background rounded-md grid place-items-center">
                  <div className="text-center">
                    <p className="text-muted-foreground">SVG Canvas will be implemented here</p>
                    <Button
                      variant="default"
                      className="mt-4"
                      onClick={() => setCount((count) => count + 1)}
                    >
                      Clicked {count} {count === 1 ? 'time' : 'times'}
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="preview" className="border rounded-md p-4 mt-2 h-[calc(100vh-150px)]">
                <div className="w-full h-full bg-background rounded-md grid place-items-center">
                  <p className="text-muted-foreground">Preview will be shown here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Code Editor */}
          <div className="h-80 md:h-auto md:w-1/2 border-t md:border-t-0 md:border-l">
            <Card className="h-full rounded-none border-0">
              <CardHeader className="px-4 py-2">
                <CardTitle className="text-sm font-medium">SVG Code</CardTitle>
                <CardDescription className="text-xs">Edit the SVG code directly</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 bg-muted/40 h-[calc(100vh-200px)] font-mono text-sm overflow-auto">
                  <pre>
                    {`<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="50" height="50" x="25" y="25" fill="none" stroke="currentColor" />
</svg>`}
                  </pre>
                </div>
              </CardContent>
              <CardFooter className="px-4 py-2 border-t">
                <Button variant="outline" size="sm">Format</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/20 px-4 py-3 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <div>SVG Editor &copy; 2023</div>
          <div>Version 0.1.0</div>
        </div>
      </footer>
    </div>
  )
}

export default App
