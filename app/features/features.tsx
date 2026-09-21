"use client";

import { FeaturesSection } from "@/components/features-section";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, Card } from "@fluentui/react-components";
import { APP_NAME, DOCS_WEBSITE_URL } from "@/lib/utils";
import {
  MousePointer,
  Code,
  Globe,
  Sparkles,
  Braces,
  LayoutTemplate,
  Download,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const creationModes = [
  {
    name: "Visual Editor",
    icon: MousePointer,
    description:
      "Build widgets visually with drag-and-drop — no code required.",
    points: [
      "Containers, grids, text, images, and progress sliders",
      "Media controls and audio visualizers",
      "Dynamic variables and one-click built-in templates",
    ],
  },
  {
    name: "Custom HTML",
    icon: Code,
    description: "Full control with your own HTML, CSS, and JavaScript.",
    points: [
      "Runs in a WebView with complete layout control",
      "Call native Tauri commands like get_media and get_system_info",
      "Mark a drag handle with -webkit-app-region: drag",
    ],
  },
  {
    name: "URL Widget",
    icon: Globe,
    description: "Turn any webpage into a desktop widget.",
    points: [
      "Embed dashboards, web apps, or online tools",
      "Draggable titlebar, or pin it to remove the bar",
      "Sandboxed to display external content only",
    ],
  },
];

const variableExamples = [
  { code: "{{time:HH:mm}}", label: "Live clock, your format" },
  { code: "{{system:cpu_usage}}", label: "Real-time system stats" },
  { code: "{{media:title}}", label: "Now-playing track info" },
  { code: "{{weather:city}}", label: "Local weather data" },
];

const aiProviders = ["OpenAI", "Anthropic", "Google", "Ollama", "OpenRouter"];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Everything you can build with{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {APP_NAME}
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Three ways to create widgets, real-time data, reusable templates,
              and an optional AI assistant — all in a fast, native desktop app.
            </p>
          </div>
        </div>
      </section>

      {/* Capability grid (shared with the homepage) */}
      <FeaturesSection showLearnMore={false} />

      {/* Three creation modes */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three ways to create a widget
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pick the approach that fits you — from zero-code drag-and-drop to
              full custom HTML.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-3">
            {creationModes.map((mode) => (
              <Card appearance="filled-alternative" key={mode.name}>
                <CardHeader className="pt-3">
                  <div className="h-12 w-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <mode.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{mode.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-3">
                  <CardDescription className="text-base">
                    {mode.description}
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {mode.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic variables & templates */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card appearance="filled-alternative">
              <CardHeader className="pt-3">
                <div className="h-12 w-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Braces className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Dynamic variables</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-base">
                  Drop handlebar-style variables into text and images. They
                  update in real time — and you control the formatting.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  {variableExamples.map((v) => (
                    <div
                      key={v.code}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-muted px-3 py-2">
                      <code className="font-mono text-sm text-foreground">
                        {v.code}
                      </code>
                      <span className="text-xs text-muted-foreground">
                        {v.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button
                    as="a"
                    appearance="subtle"
                    href={`${DOCS_WEBSITE_URL}/overview/#dynamic-variables`}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ArrowUpRight className="h-4 w-4" />}
                    iconPosition="after">
                    See all variables
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card appearance="filled-alternative">
              <CardHeader className="pt-3">
                <div className="h-12 w-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <LayoutTemplate className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Built-in templates</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-base">
                  Start from a ready-made widget and make it yours. Clone,
                  tweak, and publish in minutes.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Clock and date/time",
                    "CPU, RAM, and disk usage",
                    "Media player and audio visualizer",
                    "Battery and weather",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI assistant (BYOK) */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card appearance="filled-alternative">
              <CardHeader className="pt-3">
                <div className="h-12 w-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  AI Assistant — bring your own key
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-base">
                  An optional assistant that can generate widgets from a prompt
                  and help you explore your data. Connect your own provider key
                  — it runs on your device with keys stored encrypted, and the
                  rest of {APP_NAME} works fully without it.
                </CardDescription>
                <div className="mt-6 flex flex-wrap gap-2">
                  {aiProviders.map((provider) => (
                    <span
                      key={provider}
                      className="rounded-full border border-border px-3 py-1 text-sm text-foreground">
                      {provider}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build your desktop?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Free and open source for Windows 10 and 11.
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
