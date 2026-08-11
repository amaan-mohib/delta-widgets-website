import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Github, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@fluentui/react-components";
import { APP_NAME, DOCS_WEBSITE_URL, GITHUB_BASE_LINK } from "@/lib/utils";

export function DownloadSection() {
  return (
    <section id="download" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get Started{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Download {APP_NAME} and start creating beautiful desktop widgets in
            minutes. It's completely free and open source.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.producthunt.com/products/delta-widgets?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-delta-widgets"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1005964&theme=dark&t=1755364439573"
                alt={`${APP_NAME} - The Ultimate Widget Maker for Windows | Product Hunt`}
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </a>
            <a
              href="https://peerlist.io/amaanmohib/project/delta-widgets"
              target="_blank"
              rel="noreferrer">
              <img
                src="https://peerlist.io/api/v1/projects/embed/PRJHNN7Q9BE6QJJEOFKMJ9D9LJ6K6B?showUpvote=true&theme=dark"
                alt={APP_NAME}
                style={{ width: "auto", height: "54px" }}
              />
            </a>
            <a
              href="https://scoutforge.net/reviews/delta-widgets/"
              target="_blank"
              rel="noopener noreferrer"
              title="Trusted and reviewed by Scout Forge">
              <img
                src="/images/design-mode/badge-dark.webp"
                style={{ height: "54px" }}
                alt="Trusted and Reviewed by Scout Forge"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="flex justify-center mb-4">
                  <Badge
                    variant="secondary"
                    className="text-xs sm:text-sm px-3 sm:px-4 py-2">
                    Latest Release
                  </Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                  {APP_NAME} for Windows
                </CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Free • Open Source • No Registration Required
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                    <span className="text-sm sm:text-base">
                      Windows 10/11 Compatible
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                    <span className="text-sm sm:text-base">
                      Lightweight & Fast
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                    <span className="text-sm sm:text-base">
                      No Coding Required
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    appearance="primary"
                    size="large"
                    as="a"
                    href="/download"
                    icon={<Download style={{ width: 20 }} />}>
                    Download Latest Release
                  </Button>
                  <Button
                    appearance="outline"
                    size="large"
                    as="a"
                    href={GITHUB_BASE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<Github style={{ width: 20 }} />}>
                    View Source Code
                  </Button>
                </div>

                <div className="text-center bg-muted/80 rounded-lg p-4 border border-muted">
                  <p className="text-sm text-muted-foreground">
                    <strong>System Requirements:</strong> Compatible with
                    Windows 10 (April 2018 release or later) and Windows 11
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 px-2">
                    Need help getting started? Check out our documentation and
                    community resources.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <Button
                      appearance="transparent"
                      as="a"
                      href={DOCS_WEBSITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ExternalLink style={{ width: 16 }} />}
                      iconPosition="after">
                      Documentation
                    </Button>
                    <Button
                      appearance="transparent"
                      as="a"
                      href={`${GITHUB_BASE_LINK}/issues`}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ExternalLink style={{ width: 16 }} />}
                      iconPosition="after">
                      Report Issues
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
