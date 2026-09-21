# Build a now-playing media widget

Show what's playing — album art, title, artist, a seek bar, and playback controls — right on your desktop. There are two ways to build it: the visual editor for the fastest path, or custom HTML for full control.

## What you'll build

A widget bound to your system's media session that displays the current track and lets you play, pause, and skip without switching windows.

## Option A — Visual editor (no code)

The quickest route. In the main window choose **Add → Templates** and start from the built-in **Media** template, or build your own:

1. **Create New** to open the Visual Editor.
2. Add an **Image** component and set its source to `{{media:thumbnail}}` for album art.
3. Add **Text** components for `{{media:title}}` and `{{media:artist}}`.
4. Show progress with `{{media:position_text}}` and `{{media:duration_text}}`.
5. Drop in **Media Controls** (play/pause, next, previous) and a **media slider** for seeking.
6. Want it reactive? Add the **Audio Visualizer** component to animate bars to the sound.

Click **Preview**, then **Publish**. Toggle it from the **Installed** section whenever you like.

> Tip: media variables such as `{{media:title}}` only resolve inside visual-editor widgets. For HTML widgets, use the commands below.

## Option B — Custom HTML (full control)

If you're building an HTML widget, drive everything through Tauri commands and events.

**1. Start the listener and read the current media:**

```ts
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

await invoke("start_media_listener_cmd");
let media = (await invoke("get_media"))[0];
render(media);

await listen("media_updated", async () => {
  media = (await invoke("get_media"))[0];
  render(media);
});
```

**2. Display the album art.** `thumbnail` is a byte array, so convert it to a base64 data URI (in a bundled build where `Buffer` is available):

```js
const src = `data:image/png;base64,${Buffer.from(media.thumbnail).toString("base64")}`;
```

**3. Wire up the controls.** Playback uses the `media_action` command with the session's `player_id` and one of `play`, `pause`, `toggle`, `next`, `prev`, or `position` (seeking also needs a `position` value):

```ts
// toggle play/pause for the current session
await invoke("media_action", {
  playerId: media.player_id,
  action: "toggle",
});
```

Check the commands reference for the exact `MediaAction` payload and the fields available on each media session (playback status, timeline position, and duration).

## Publish

Preview to confirm placement, then **Publish**. Your media widget appears under **Installed**, ready to toggle on or off.

## Next steps

- New to the editor? Start with the **live clock** guide.
- Learn the full HTML workflow in **Build a custom HTML widget with Tauri**.
