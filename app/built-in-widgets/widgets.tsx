"use client";

import { Badge } from "@/components/ui/badge";
import { APP_NAME, DOCS_WEBSITE_URL } from "@/lib/utils";
import { builtInWidgets } from "@/lib/widgets";
import {
  Button,
  Card,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import { Download, BookOpen } from "lucide-react";

export default function BuiltInWidgetsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Pre-installed</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Built-in{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                widgets
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {APP_NAME} ships with a set of ready-to-use widgets. Enable one in
              a click, then clone and customize it in the Visual Editor — every
              value below updates live.
            </p>
          </div>
        </div>
      </section>

      {/* Widget grid */}
      <section className="pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {builtInWidgets.map((widget) => (
              <Card
                key={widget.name}
                appearance="filled-alternative"
                size="large">
                <CardPreview>
                  <img
                    src={widget.image}
                    alt={`${widget.name} widget preview for ${APP_NAME}: ${widget.details}`}
                    className="w-full h-48 sm:h-56 object-contain bg-muted p-2"
                  />
                </CardPreview>
                <CardHeader
                  header={
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-lg sm:text-xl font-semibold">
                        {widget.name}
                      </h2>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {widget.size}
                      </span>
                    </div>
                  }
                  description={
                    <div>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                        {widget.details}
                      </p>
                      {widget.variables.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {widget.variables.map((v) => (
                            <code
                              key={v}
                              className="rounded bg-muted px-2 py-1 font-mono text-xs text-foreground">
                              {v}
                            </code>
                          ))}
                        </div>
                      )}
                    </div>
                  }
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Make them your own
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every built-in widget is a starting point — tweak the layout, swap
              variables, and publish. Free for Windows 10 and 11.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                as="a"
                appearance="primary"
                href="/download"
                icon={<Download className="h-4 w-4" />}>
                Download Free
              </Button>
              <Button
                as="a"
                appearance="secondary"
                href={DOCS_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                icon={<BookOpen className="h-4 w-4" />}>
                Read the docs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
