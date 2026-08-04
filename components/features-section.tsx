import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MousePointer, Layers, Zap, Code, Clock, Palette } from "lucide-react";

const features = [
  {
    title: "Drag & Drop Builder",
    description:
      "Create widgets visually with an intuitive drag-and-drop interface. No coding skills required.",
    icon: MousePointer,
  },
  {
    title: "Multiple Sources",
    description:
      "Build with the visual editor, display custom HTML pages, or embed content from any URL.",
    icon: Layers,
  },
  {
    title: "Dynamic Data",
    description:
      "Show real-time info like clock, system stats, media info, or apply custom CSS tweaks.",
    icon: Zap,
  },
  {
    title: "Custom Templates",
    description:
      "Start with pre-made designs or create your own templates from scratch for quick setup.",
    icon: Palette,
  },
  {
    title: "Expressions & Variables",
    description:
      "Format text, insert variables, and create interactive widgets with powerful expression system.",
    icon: Code,
  },
  {
    title: "Built with Tauri",
    description:
      "Fast, secure, and lightweight with native desktop feel. Minimal resource usage.",
    icon: Clock,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to create{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              amazing widgets
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed to make desktop widget creation
            accessible to everyone, from beginners to power users.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
