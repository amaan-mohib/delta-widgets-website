import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img src="/delta-widgets-icon.png" alt="Delta Widgets" className="h-8 w-8" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent [&:not(:has(.gradient-fallback))]:text-foreground">
                Delta Widgets
              </h1>
            </div>
          </div>

          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#screenshots"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Screenshots
              </a>
              <a
                href="#download"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Download
              </a>
              <a
                href="#sponsor"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Support
              </a>
            </div>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-200"
              asChild
            >
              <a href="https://github.com/amaan-mohib/delta-widgets" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </Button>
            <Button size="sm" className="text-xs sm:text-sm px-2 sm:px-4 hover:bg-primary/90 transition-colors" asChild>
              <a
                href="https://github.com/amaan-mohib/delta-widgets/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hidden sm:inline">Download Free</span>
                <span className="sm:hidden">Download</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
