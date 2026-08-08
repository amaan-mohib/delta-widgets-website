import { APP_NAME } from "@/lib/utils";
import { Button, Divider } from "@fluentui/react-components";
import { Download, Github, Users, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-radial-gradient from-primary/20 via-background to-secondary/15 py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-accent/12 via-transparent to-primary/10 animate-pulse opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            The Ultimate{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent [&:not(:has(.gradient-fallback))]:text-primary">
              Widget Maker
            </span>{" "}
            for Windows
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Create beautiful, dynamic desktop widgets without writing a single
            line of code. Drag-and-drop builder, custom templates, and real-time
            data integration—all completely free and open source.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                1200+ installs
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <Button
              size="large"
              as="a"
              href="/download"
              appearance="primary"
              icon={<Download style={{ width: 20 }} />}>
              Download Free
            </Button>
            <Button
              appearance="outline"
              size="large"
              as="a"
              icon={<Github style={{ width: 20 }} />}
              href="https://github.com/amaan-mohib/delta-widgets"
              target="_blank"
              rel="noopener noreferrer">
              View Source
            </Button>
          </div>
          <div className="mt-8 mb-8">
            <Divider />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Help shape our widget community
            </p>
            <Button
              appearance="subtle"
              icon={<Sparkles style={{ width: 16 }} />}
              as="a"
              href="https://forms.gle/Y7ni54Eknp599nG6A"
              target="_blank"
              rel="noopener noreferrer">
              Join Marketplace Waitlist
            </Button>
          </div>
          <div className="mt-16">
            <Image
              loading="eager"
              className="mx-auto rounded-xl shadow-2xl ring-1 ring-border w-auto h-auto"
              src="/images/design-mode/ss-1.png"
              alt={`${APP_NAME} on Windows Desktop`}
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
