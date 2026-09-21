# Build a custom HTML widget with Tauri

When the visual editor isn't enough, build a widget from your own HTML, CSS, and JavaScript. This guide covers loading an HTML widget, pulling live data with native Tauri commands, reacting to events, and making the window draggable.

## When to use an HTML widget

HTML widgets run in a plain WebView, so the visual editor's `{{...}}` variables are **not** available. Instead you call Tauri commands and subscribe to events yourself. Reach for HTML when you want full control over layout and behavior, or want to reuse an existing web app.

## 1. Create the widget folder

Make a folder containing an `index.html`. In Delta Widgets, click **Add → HTML** and select that folder. Your page is served locally and rendered as a widget.

## 2. Quick prototype with raw HTML

For static displays or experiments, you can call commands through the global `window.__TAURI__` object — no build step required:

```html
<!DOCTYPE html>
<html>
  <body>
    <pre id="out"></pre>
    <script>
      async function load() {
        const info = await window.__TAURI__.core.invoke("get_system_info");
        document.getElementById("out").textContent = JSON.stringify(info, null, 2);
      }
      load();
    </script>
  </body>
</html>
```

Two caveats: `window.__TAURI__` becomes available a moment after load, and it can disappear if the page reloads or redirects. That's fine for prototypes, but fragile for anything you rely on.

## 3. Recommended: bundle with a build tool

For a real widget, scaffold with a bundler so the typed `@tauri-apps/api` package is available at runtime:

```bash
npm create vite@latest my-widget -- --template vanilla-ts
cd my-widget
npm install
```

```js
import { invoke } from "@tauri-apps/api/core";

const info = await invoke("get_system_info");
console.log(info.cpu, info.used_memory, info.total_memory);
```

Run `npm run build` and drop the generated `dist/` folder into Delta Widgets as your HTML widget. React, Vue, Svelte, and Solid all work the same way — scaffold with their CLI and point Delta Widgets at the build output.

## 4. Show live media

Start the media listener once, read the current media, then refresh whenever it changes:

```ts
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

await invoke("start_media_listener_cmd");
render(await invoke("get_media"));

await listen("media_updated", async () => {
  render(await invoke("get_media"));
});
```

`get_media` returns an array of media sessions. Album art (`thumbnail`) comes back as a byte array — convert it to a base64 data URI before using it as an image `src`:

```js
const src = `data:image/png;base64,${Buffer.from(thumbnail).toString("base64")}`;
```

A player's `icon` field is a local file path; use `convertFileSrc` from `@tauri-apps/api/core` to display it.

## 5. Add an audio visualizer

Call `start_audio_capture` to begin receiving `audio-samples` events — roughly one every 33 ms, each carrying ~256 waveform samples:

```ts
await invoke("start_audio_capture");
await listen("audio-samples", (event) => {
  draw(event.payload); // number[] of samples
});
```

Continuous capture uses CPU, so call `stop_audio_capture` when the samples are no longer needed.

## 6. Make the window draggable

WebView widgets have no title bar by default. Mark any element as a drag handle with `-webkit-app-region: drag`, and keep interactive areas clickable with `no-drag`:

```css
.titlebar {
  -webkit-app-region: drag;
  cursor: move;
}
.content {
  -webkit-app-region: no-drag; /* buttons and links stay clickable */
}
```

## Command reference

| Command | Purpose |
| --- | --- |
| `get_system_info` | CPU, memory, disks, batteries, network |
| `start_media_listener_cmd` / `stop_media_listener_cmd` | Enable/disable `media_updated` events |
| `get_media` | Current media sessions |
| `media_action` | Play, pause, toggle, next, prev, seek |
| `start_audio_capture` / `stop_audio_capture` | Enable/disable `audio-samples` events |

See the documentation for the full parameter and return-type details.

## Next steps

- Turn this into a full **now-playing media widget** with controls.
- Prefer no code? Build a **live clock** in the visual editor instead.
