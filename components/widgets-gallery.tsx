import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const widgets = [
  {
    name: "Date Time",
    description: (
      <span>
        A widget that current date and time. Please{" "}
        <Link
          href="https://date-fns.org/docs/format"
          target="_blank"
          className="text-primary hover:underline">
          refer
        </Link>{" "}
        for formatting options.
      </span>
    ),
    image: "/templates/datetime/thumb.png",
  },
  {
    name: "Media",
    description:
      "A widget that displays media being played on the system, such as music or videos.",
    image: "/templates/media/thumb.png",
  },
  {
    name: "Weather",
    description:
      "A widget that displays current weather information for your current location.",
    image: "/templates/weather/thumb.png",
  },
  {
    name: "Disks",
    description:
      "A widget that displays information about the system's disks, including usage and available space.",
    image: "/templates/disks/thumb.png",
  },
  {
    name: "RAM",
    description:
      "A widget that displays information about the system's RAM usage, including total and available memory.",
    image: "/templates/ram/thumb.png",
  },
  {
    name: "CPU",
    description:
      "A widget that displays information about the system's CPU usage and performance.",
    image: "/templates/cpu/thumb.png",
  },
  {
    name: "Battery",
    description:
      "A widget containing information related to the system's battery.",
    image: "/templates/battery/thumb.png",
  },
];

export function WidgetsGallery() {
  return (
    <section id="widgets" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge className="mb-4">Pre-installed</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built-in Widgets
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl text-balance">
            Delta Widgets comes with a collection of powerful, pre-installed
            widgets to get you started immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {widgets.map((item) => (
            <Card className="overflow-hidden h-full p-0" key={item.name}>
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 sm:h-56 object-contain bg-muted p-2"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {item.name}
                    </h3>
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
  );
}
