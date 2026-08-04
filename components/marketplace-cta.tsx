import { Button } from "@fluentui/react-components";
import { ArrowRight, MessageCircle } from "lucide-react";
import DiscordIcon from "./Discord";

export function MarketplaceCta() {
  return (
    <section className="py-24 bg-gradient-radial from-primary/10 via-transparent to-transparent">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Widget Marketplace Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We&apos;re building a community marketplace where creators can
            share, buy, and sell custom widgets. This waitlist helps us gauge
            interest and prioritize development.
          </p>
          <p className="text-sm text-muted-foreground mb-8 italic">
            Join the waitlist to be among the first to create and monetize your
            widgets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="a"
              href="https://forms.gle/Y7ni54Eknp599nG6A"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              icon={<ArrowRight style={{ width: 20 }} />}
              iconPosition="after"
              appearance="primary">
              Join Marketplace Waitlist
            </Button>
            <Button
              as="a"
              href="https://discord.gg/wDE8KNx8fB"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              appearance="outline"
              icon={<DiscordIcon style={{ width: 20 }} />}>
              Join Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
