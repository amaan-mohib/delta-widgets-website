import { Card, CardContent } from "@/components/ui/card"
import { LayoutGrid } from "lucide-react"

const items = [
  {
    img: "/images/design-mode/ss-1.png",
    title: "Desktop Integration",
    description: "Beautiful widgets seamlessly integrated into your Windows desktop environment."
  },
  {
    img: "/images/design-mode/ss-creator.png",
    title: "Visual Creator",
    description: "Powerful drag-and-drop builder with real-time preview and extensive customization options."
  },
  {
    img: "/images/design-mode/widget_templates_thumb.png",
    title: "Template Gallery",
    description: "Start quickly with our collection of professionally designed widget templates."
  },
]

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
          {items.map(item => (
            <Card className="overflow-hidden h-full p-0">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 object-contain bg-black"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
