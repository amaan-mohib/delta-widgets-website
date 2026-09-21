"use cache";

import { Github, ExternalLink } from "lucide-react";
import DiscordIcon from "./Discord";
import {
  APP_NAME,
  DISCORD_LINK,
  DOCS_WEBSITE_URL,
  GITHUB_BASE_LINK,
} from "@/lib/utils";

export async function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              {APP_NAME}
            </h3>
            <p className="text-muted-foreground max-w-md">
              The ultimate widget maker for Windows. Create beautiful, dynamic
              desktop widgets without coding. Free, open source, and built with
              love.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Project</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={DOCS_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Documentation <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_BASE_LINK}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Releases <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_BASE_LINK}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Issues <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_BASE_LINK}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Discussions <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Discord <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_BASE_LINK}/blob/main/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Contributing <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="/#sponsor"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amaan-mohib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Developer <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/features"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/built-in-widgets"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Built-in Widgets
                </a>
              </li>
              <li>
                <a
                  href="/guides"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-services"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Terms of Services
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {APP_NAME}. Open source under GPL-3.0
            License.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href={`${GITHUB_BASE_LINK}/blob/main/LICENSE`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              GPL-3.0 License
            </a>
            <div className="flex space-x-4">
              <a
                href={GITHUB_BASE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                <Github className="h-4 w-4" />
              </a>
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                <DiscordIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
