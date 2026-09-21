import { Link } from "@fluentui/react-components";
import type { ReactNode } from "react";

export interface BuiltInWidget {
  name: string;
  /** Short one-liner used on the homepage gallery. */
  summary: ReactNode;
  /** Richer, manifest-derived description used on the dedicated page. */
  details: string;
  /** Dynamic variables the template uses, derived from its manifest.json. */
  variables: string[];
  /** Default canvas size (px), from the manifest dimensions. */
  size: string;
  image: string;
}

// Descriptions and variables are derived from each template's manifest.json in
// the product repo (public/templates/<key>/manifest.json). All are `json`
// (Visual Editor) widgets, so their variables resolve at runtime.
export const builtInWidgets: BuiltInWidget[] = [
  {
    name: "Date Time",
    summary: (
      <span>
        A widget that displays the current date and time. Please{" "}
        <Link href="https://date-fns.org/docs/format" target="_blank">
          refer
        </Link>{" "}
        for formatting options.
      </span>
    ),
    details:
      "Shows the current time in 12-hour format alongside the full weekday and date. The layout is driven by date-fns tokens, so you can reformat it into anything from a bare clock to a full calendar line.",
    variables: ["{{time:hh:mm aa}}", "{{date:E MMMM d, yyyy}}"],
    size: "255×90",
    image: "/templates/datetime/thumb.png",
  },
  {
    name: "Media",
    summary:
      "A widget that displays media being played on the system, such as music or videos.",
    details:
      "A now-playing panel with album artwork, track title and artist, a seek slider showing elapsed and total time, plus play, pause, and skip controls for whatever media is playing on your system.",
    variables: [
      "{{media:title}}",
      "{{media:artist}}",
      "{{media:thumbnail}}",
      "{{media:position}}",
      "{{media:duration}}",
    ],
    size: "420×238",
    image: "/templates/media/thumb.png",
  },
  {
    name: "Audio Visualizer",
    summary:
      "A widget that visualizes the audio of currently playing media in the form of bars or waveforms.",
    details:
      "A real-time bar visualizer that reacts to your system audio, with the current track's title and artist and a one-tap toggle to start or stop the capture.",
    variables: ["{{media:title}}", "{{media:artist}}"],
    size: "420×238",
    image: "/templates/visualizer/thumb.png",
  },
  {
    name: "Weather",
    summary:
      "A widget that displays current weather information for your current location.",
    details:
      "Current conditions for your location — temperature in Celsius, your city and country, and a matching weather icon.",
    variables: [
      "{{weather:city}}",
      "{{weather:country}}",
      "{{weather:temperature_celsius}}",
      "{{weather:icon}}",
    ],
    size: "270×100",
    image: "/templates/weather/thumb.png",
  },
  {
    name: "Disks",
    summary:
      "A widget that displays information about the system's disks, including usage and available space.",
    details:
      "An overview of every drive's storage, showing used versus available space with a usage bar rendered per disk.",
    variables: [],
    size: "354×103",
    image: "/templates/disks/thumb.png",
  },
  {
    name: "RAM",
    summary:
      "A widget that displays information about the system's RAM usage, including total and available memory.",
    details:
      "A compact memory gauge showing used versus total RAM with a live progress bar.",
    variables: ["{{system:memory_used}}", "{{system:memory_total}}"],
    size: "233×55",
    image: "/templates/ram/thumb.png",
  },
  {
    name: "CPU",
    summary:
      "A widget that displays information about the system's CPU usage and performance.",
    details:
      "A live CPU monitor showing the current usage percentage plus your processor's model, clock speed, and logical core count.",
    variables: [
      "{{system:cpu_usage}}",
      "{{system:cpu_model}}",
      "{{system:cpu_speed}}",
      "{{system:cpu_lcores}}",
    ],
    size: "368×101",
    image: "/templates/cpu/thumb.png",
  },
  {
    name: "Battery",
    summary: "A widget containing information related to the system's battery.",
    details:
      "Keeps an eye on your battery with a charge-level progress bar plus health and charge-cycle readouts.",
    variables: [
      "{{system:battery_charge}}",
      "{{system:battery_health}}",
      "{{system:battery_cycles}}",
    ],
    size: "315×135",
    image: "/templates/battery/thumb.png",
  },
];
