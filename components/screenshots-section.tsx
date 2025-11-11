import { Card, CardContent } from "@/components/ui/card"
import { LayoutGrid } from "lucide-react"

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-16 sm:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            See Delta Widgets in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From desktop integration to the intuitive creator interface, explore how Delta Widgets transforms your
            desktop experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden h-full p-0">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="flex-shrink-0">
                <img
                  src="/images/design-mode/ss-1.png"
                  alt="Desktop with Delta Widgets"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Desktop Integration</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Beautiful widgets seamlessly integrated into your Windows desktop environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden h-full p-0">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="flex-shrink-0">
                <img
                  src="/images/design-mode/ss-creator.png"
                  alt="Widget Creator Interface"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Visual Creator</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Powerful drag-and-drop builder with real-time preview and extensive customization options.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden h-full p-0">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="flex-shrink-0 bg-muted/50 flex items-center justify-center h-48 sm:h-56">
                <LayoutGrid className="w-16 h-16 sm:w-20 sm:h-20 text-primary" />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Template Gallery</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Start quickly with our collection of professionally designed widget templates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
