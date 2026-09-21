"use client";

import { Badge } from "@/components/ui/badge";
import { APP_NAME } from "@/lib/utils";
import { builtInWidgets } from "@/lib/widgets";
import { ArrowRight } from "lucide-react";
import {
  Button,
  Card,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

export function WidgetsGallery() {
  return (
    <section id="widgets" className="py-24 bg-muted/80">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge className="mb-4">Pre-installed</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built-in Widgets
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl text-balance">
            {APP_NAME} comes with a collection of powerful, pre-installed
            widgets to get you started immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {builtInWidgets.map((item) => (
            <Card key={item.name} appearance="filled-alternative" size="large">
              <CardPreview>
                <div className="shrink-0">
                  <img
                    src={item.image}
                    alt={`${item.name} widget for ${APP_NAME}`}
                    className="w-full h-48 sm:h-56 object-contain bg-muted p-2"
                  />
                </div>
              </CardPreview>
              <CardHeader
                header={
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.name}
                  </h3>
                }
                description={
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {item.details}
                  </p>
                }
              />
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            as="a"
            appearance="primary"
            href="/built-in-widgets"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="after">
            View all widgets
          </Button>
        </div>
      </div>
    </section>
  );
}
