import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-radial-gradient from-primary/20 via-background to-secondary/15 py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-accent/12 via-transparent to-primary/10 animate-pulse opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            The Ultimate{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent [&:not(:has(.gradient-fallback))]:text-primary">
              Widget Maker
            </span>{" "}
            for Windows
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Create beautiful, dynamic desktop widgets without writing a single line of code. Drag-and-drop builder,
            custom templates, and real-time data integration—all completely free and open source.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.producthunt.com/products/delta-widgets?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-delta-widgets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1005964&theme=dark&t=1755364439573"
                alt="Delta Widgets - The Ultimate Widget Maker for Windows | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </a>
            <a href="https://peerlist.io/amaanmohib/project/delta-widgets" target="_blank" rel="noreferrer">
              <img
                src="https://peerlist.io/api/v1/projects/embed/PRJHNN7Q9BE6QJJEOFKMJ9D9LJ6K6B?showUpvote=true&theme=dark"
                alt="Delta Widgets"
                style={{ width: "auto", height: "72px" }}
              />
            </a>
          </div>

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
