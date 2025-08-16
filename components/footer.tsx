import { Github, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Delta Widgets
            </h3>
            <p className="text-muted-foreground max-w-md">
              The ultimate widget maker for Windows. Create beautiful, dynamic desktop widgets without coding. Free,
              open source, and built with love.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Project</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/amaan-mohib/delta-widgets#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  Documentation <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amaan-mohib/delta-widgets/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  Releases <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amaan-mohib/delta-widgets/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  Issues <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amaan-mohib/delta-widgets/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  Discussions <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/amaan-mohib/delta-widgets/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  Contributing <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.buymeacoffee.com/amaan.mohib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  Support <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amaan-mohib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  Developer <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Delta Widgets. Open source under GPL-3.0 License.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="https://github.com/amaan-mohib/delta-widgets/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GPL-3.0 License
            </a>
            <div className="flex space-x-4">
              <a
                href="https://github.com/amaan-mohib/delta-widgets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
