import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MarketplaceCta() {
  return (
    <section className="py-24 bg-gradient-radial from-primary/10 via-transparent to-transparent">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Template Marketplace Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We&apos;re building a community marketplace where widget creators can share, buy, and sell custom templates. This waitlist helps us gauge interest and prioritize development.
          </p>
          <p className="text-sm text-muted-foreground mb-8 italic">
            Join the waitlist to be among the first to create and monetize your widget templates.
          </p>
          <a
            href="https://forms.gle/Y7ni54Eknp599nG6A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2">
              Join Marketplace Waitlist
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
