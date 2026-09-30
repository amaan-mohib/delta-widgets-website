import { Button } from "@fluentui/react-components";
import { ArrowRight } from "lucide-react";
import DiscordIcon from "./Discord";
import { DISCORD_LINK, GALLERY_LINK } from "@/lib/utils";

export function MarketplaceCta() {
  return (
    <section className="py-24 bg-gradient-radial from-primary/10 via-transparent to-transparent">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Community Widget Gallery
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Discover custom widgets created by the Delta Widgets community,
            explore new ideas, and share your own builds with other creators.
          </p>
          <p className="text-sm text-muted-foreground mb-8 italic">
            The gallery is live now — browse the latest creations and get
            inspired.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="a"
              href={GALLERY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              icon={<ArrowRight style={{ width: 20 }} />}
              iconPosition="after"
              appearance="primary">
              Browse Gallery
            </Button>
            <Button
              as="a"
              href={DISCORD_LINK}
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
