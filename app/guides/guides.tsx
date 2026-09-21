"use client";

import { APP_NAME } from "@/lib/utils";
import { guides } from "@/lib/guides";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@fluentui/react-components";
import Link from "next/link";

export default function GuidesPage() {
  return (
    <main>
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {APP_NAME}{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                guides
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Practical, step-by-step walkthroughs for building desktop widgets
              — from your first clock to custom HTML widgets wired to live
              system data.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block h-full">
                <Card
                  appearance="filled-alternative"
                  className="h-full"
                  size="large">
                  <CardHeader
                    header={
                      <div className="flex items-center gap-2">
                        <Badge>{guide.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {guide.readingTime}
                        </span>
                      </div>
                    }
                  />
                  <div className="px-3 pb-3">
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                      {guide.title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                      {guide.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary">
                      Read guide →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
