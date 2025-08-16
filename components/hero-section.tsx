import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-card py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            The Ultimate{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Widget Maker
            </span>{" "}
            for Windows
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Create beautiful, dynamic desktop widgets without writing a single line of code. Drag-and-drop builder,
            custom templates, and real-time data integration—all completely free and open source.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8 py-3" asChild>
              <a
                href="https://github.com/amaan-mohib/delta-widgets/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Free
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary"
              asChild
            >
              <a href="https://github.com/amaan-mohib/delta-widgets" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View Source
              </a>
            </Button>
          </div>
          <div className="mt-16">
            <img
              className="mx-auto rounded-xl shadow-2xl ring-1 ring-border"
              src="https://raw.githubusercontent.com/amaan-mohib/delta-widgets/refs/heads/main/ss-1.png"
              alt="Delta Widgets on Windows Desktop"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
