"use client";

import { APP_NAME, DOCS_WEBSITE_URL } from "@/lib/utils";
import { Button } from "@fluentui/react-components";
import { Home, Sparkles, LayoutGrid, Download } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/features", label: "Features", icon: Sparkles },
  { href: "/built-in-widgets", label: "Built-in widgets", icon: LayoutGrid },
  { href: "/download", label: "Download", icon: Download },
];

export default function NotFound() {
  return (
    <main>
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-6xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Page not found
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The page you were looking for doesn&apos;t exist or may have
              moved. Here are some good places to pick up where you left off
              with {APP_NAME}.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {links.map((link) => (
                <Button
                  key={link.href}
                  as="a"
                  href={link.href}
                  appearance={link.href === "/" ? "primary" : "secondary"}
                  icon={<link.icon className="h-4 w-4" />}>
                  {link.label}
                </Button>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Looking for help?{" "}
              <a
                href={DOCS_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4">
                Read the documentation
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
