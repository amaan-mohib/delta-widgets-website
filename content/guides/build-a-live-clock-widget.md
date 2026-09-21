# Build a live clock widget

A clock is the perfect first project: you'll use the visual editor, add a dynamic variable, and pin a live, always-on-top clock to your desktop in a few minutes — no code required.

## What you'll build

A desktop clock that shows the current time and date and updates in real time. You'll format it with date-fns tokens so it reads exactly the way you want.

## Before you start

Install Delta Widgets for Windows and launch it from the Start Menu. It's free and open source, and runs on Windows 10 and 11.

## 1. Create a new widget

Open the main window and click **Create New** to open the Visual Editor with a blank canvas.

## 2. Add a text block

Drag a **Text** component from the component panel onto the canvas. This is where your time will render.

## 3. Insert the time variable

In the text box, type a dynamic variable:

```
{{time:HH:mm}}
```

Delta Widgets replaces `{{time}}` with the live system time. The part after the colon is a [date-fns](https://date-fns.org/docs/format) format string, so you control exactly how it looks:

- `{{time:HH:mm}}` → `21:41`
- `{{time:hh:mm aa}}` → `09:41 PM`
- `{{time:HH:mm:ss}}` → `21:41:07`

## 4. Add the date

Drag a second **Text** block below the time and enter:

```
{{date:E MMMM d, yyyy}}
```

That renders as `Sat September 21, 2026`. Mix and match tokens to taste — `{{date:MMM d}}` gives you a compact `Sep 21`.

## 5. Style it

Use the right-hand panel to set font size, weight, color, and alignment. A large time with a smaller muted date underneath is a clean starting point. Resize the widget by dragging its edges.

## 6. Preview and publish

Click **Preview** — the widget appears on your desktop immediately so you can check the fit. When you're happy, click **Publish** and close the editor. Your clock now lives in the **Installed** section of the main window, where you can toggle it on or off any time.

## Formatting cheat sheet

| Token | Meaning | Example |
| --- | --- | --- |
| `HH` / `hh` | 24h / 12h hour | `21` / `09` |
| `mm` | minutes | `41` |
| `ss` | seconds | `07` |
| `aa` | AM/PM | `PM` |
| `E` | short weekday | `Sat` |
| `MMMM` / `MMM` | month | `September` / `Sep` |
| `d` | day of month | `21` |
| `yyyy` | year | `2026` |

## Variables recap

Text and image components support handlebar-style variables like `{{time}}`, `{{date}}`, and `{{datetime}}`. These resolve only inside **Visual Editor** widgets — HTML and URL widgets fetch data a different way.

## Next steps

- Assemble a system dashboard in the **System monitor** guide.
- Build a **now-playing media widget** with album art and controls.
- Browse every variable in the documentation.
