import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const widgets = [
  {
    name: "Date Time",
    description: (
      <span>
        A widget that current date and time. Please{" "}
        <Link href="https://date-fns.org/docs/format" target="_blank" className="text-primary hover:underline">
          refer
        </Link>{" "}
        for formatting options.
      </span>
    ),
    image: "/date-time-widget.jpg",
    manifest: "#",
  },
  {
    name: "Media",
    description: "A widget that displays media being played on the system, such as music or videos.",
    image: "/media-player-widget.jpg",
    manifest: "#",
  },
  {
    name: "Weather",
    description: "A widget that displays current weather information for your current location.",
    image: "/weather-widget.jpg",
    manifest: "#",
  },
  {
    name: "Disks",
    description: "A widget that displays information about the system's disks, including usage and available space.",
    image: "/disk-usage-widget.jpg",
    manifest: "#",
  },
  {
    name: "RAM",
    description:
      "A widget that displays information about the system's RAM usage, including total and available memory.",
    image: "/ram-memory-widget.jpg",
    manifest: "#",
  },
  {
    name: "CPU",
    description: "A widget that displays information about the system's CPU usage and performance.",
    image: "/cpu-processor-widget.jpg",
    manifest: "#",
  },
  {
    name: "Battery",
    description: "A widget containing information related to the system's battery.",
    image: "/battery-status-widget.jpg",
    manifest: "#",
  },
]

export function WidgetsGallery() {
  return (
    <section id="widgets" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge className="mb-4">Pre-installed</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built-in Widgets</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl text-balance">
            Delta Widgets comes with a collection of powerful, pre-installed widgets to get you started immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {widgets.map((widget) => (
            <Card
              key={widget.name}
              className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50"
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src={widget.image || "/placeholder.svg"}
                  alt={widget.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl">{widget.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <CardDescription className="text-sm leading-relaxed text-balance">{widget.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
