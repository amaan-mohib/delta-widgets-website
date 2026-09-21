"use client";

import { APP_NAME } from "@/lib/utils";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

const items = [
  {
    img: "/images/design-mode/ss-1.png",
    title: "Desktop Integration",
    description:
      "Beautiful widgets seamlessly integrated into your Windows desktop environment.",
  },
  {
    img: "/images/design-mode/ss-creator.png",
    title: "Visual Creator",
    description:
      "Powerful drag-and-drop builder with real-time preview and extensive customization options.",
  },
  {
    img: "/images/design-mode/widget_templates_thumb.png",
    title: "Template Gallery",
    description:
      "Start quickly with our collection of professionally designed widget templates.",
  },
];

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-16 sm:py-20 lg:py-32 bg-muted/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            See {APP_NAME} in{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From desktop integration to the intuitive creator interface, explore
            how {APP_NAME} transforms your desktop experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <Card key={item.title} appearance="filled-alternative" size="large">
              <CardPreview>
                <img
                  src={item.img}
                  alt={`${APP_NAME} ${item.title}: ${item.description}`}
                  className="w-full h-48 sm:h-56 object-contain bg-muted"
                />
              </CardPreview>
              <CardHeader
                header={
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                }
                description={
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {item.description}
                  </p>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
