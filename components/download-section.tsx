import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Github, ExternalLink, CheckCircle } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get Started{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Today</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Download Delta Widgets and start creating beautiful desktop widgets in minutes. It's completely free and
            open source.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="flex justify-center mb-4">
                  <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-2">
                    Latest Release
                  </Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl">Delta Widgets for Windows</CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Free • Open Source • No Registration Required
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Windows 10/11 Compatible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Lightweight & Fast</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base">No Coding Required</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto hover:bg-primary/90 transition-colors"
                    asChild
                  >
                    <a
                      href="https://github.com/amaan-mohib/delta-widgets/releases/latest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Download Latest Release
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-200 w-full sm:w-auto"
                    asChild
                  >
                    <a href="https://github.com/amaan-mohib/delta-widgets" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </div>

                <div className="text-center bg-muted/30 rounded-lg p-4 border border-muted">
                  <p className="text-sm text-muted-foreground">
                    <strong>System Requirements:</strong> Compatible with Windows 10 (April 2018 release or later) and
                    Windows 11
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 px-2">
                    Need help getting started? Check out our documentation and community resources.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs sm:text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      asChild
                    >
                      <a
                        href="https://github.com/amaan-mohib/delta-widgets#readme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Documentation <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs sm:text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      asChild
                    >
                      <a
                        href="https://github.com/amaan-mohib/delta-widgets/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Report Issues <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
