"use client";

import { Button } from "@fluentui/react-components";
import { Github } from "lucide-react";
import DiscordIcon from "./Discord";
import Link from "next/link";
import { APP_NAME } from "@/lib/utils";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="shrink-0 flex items-center space-x-3">
              <img
                src="/delta-widgets-icon.png"
                alt={APP_NAME}
                className="h-8 w-8"
              />
              <h1 className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent [&:not(:has(.gradient-fallback))]:text-foreground">
                {APP_NAME}
              </h1>
            </Link>
          </div>

          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Button as="a" href="/#features" appearance="transparent">
                Features
              </Button>
              <Button
                as="a"
                target="_blank"
                href="https://amaan-mohib.github.io/delta-widgets/"
                appearance="transparent">
                Documentation
              </Button>
              <Button as="a" href="/releases" appearance="transparent">
                Releases
              </Button>
              <Button as="a" href="/#sponsor" appearance="transparent">
                Sponsor
              </Button>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <Button
                as="a"
                appearance="subtle"
                icon={<DiscordIcon />}
                href="https://discord.gg/wDE8KNx8fB"
                target="_blank"
                rel="noopener noreferrer"
              />
              <Button
                as="a"
                appearance="subtle"
                icon={<Github />}
                href="https://github.com/amaan-mohib/delta-widgets"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </Button>
            </div>
            <Button as="a" appearance="primary" href="/releases/latest">
              <span className="hidden sm:inline">Download Free</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
