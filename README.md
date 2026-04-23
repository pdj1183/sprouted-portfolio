# Sprouted - DJ Portfolio

A one-page portfolio website for DJ Sprouted, built with plain HTML, CSS, and JavaScript.

## Live Preview

Visit: **https://pdj1183.github.io/sprouted-portfolio/**

## Editing Content

All dynamic content lives in **`content.json`**. Edit this file to update the bio, shows, and gallery — no need to touch any HTML.

### About / Bio

Update the `about` section with two fields:

```json
"about": {
  "quote": "The main headline bio text.",
  "body": "A secondary paragraph with more detail."
}
```

- **quote** — displayed large as a pull-quote
- **body** — smaller paragraph below it

### Shows Timeline

Add or remove entries in the `shows` array. Newest shows should go first:

```json
"shows": [
  { "date": "Apr 2, 2026", "venue": "Larimer Lounge", "city": "Denver, CO" },
  { "date": "Feb 15, 2026", "venue": "Black Box", "city": "Denver, CO" }
]
```

Each show has three fields:

| Field   | Description                        | Example            |
|---------|------------------------------------|--------------------|
| `date`  | Date of the show (any format)      | `"Apr 2, 2026"`    |
| `venue` | Venue name                         | `"Larimer Lounge"` |
| `city`  | City and state                     | `"Denver, CO"`     |

To add a new show, copy an existing line and change the values. Keep the comma after each entry except the last one.

### Gallery

The gallery is organized into groups by venue. Each group has a title and an array of photos — all photos from the same venue go under one group regardless of date:

```json
"gallery": [
  {
    "title": "Larimer Lounge",
    "photos": [
      { "src": "images/larimer-lounge-april-2026-1.jpg", "alt": "Description", "orientation": "horizontal" }
    ]
  }
]
```

Each photo has three fields:

| Field         | Description                                | Values                        |
|---------------|--------------------------------------------|-------------------------------|
| `src`         | Path to the image file in `images/`        | `"images/your-photo.jpg"`     |
| `alt`         | Description for accessibility              | `"Sprouted at Venue Name"`    |
| `orientation` | Controls the aspect ratio (4:3)            | `"horizontal"` or `"vertical"`|

**To add photos:**

1. Drop your `.jpg` files into the `images/` folder
2. Add an entry to the `photos` array in the appropriate group (or create a new group)
3. Set `orientation` to `"horizontal"` for landscape shots or `"vertical"` for portrait shots — this locks the crop to a clean 4:3 ratio

**To add a new gallery group:**

Copy an existing group block and change the `title` and `photos`. Groups display in the order they appear in the array (newest first is recommended).

## Social Links

Social links are in `index.html` in the Connect section. Each link is an `<a>` tag — just swap the `href` URL.

## Project Structure

```
sprouted-portfolio/
  index.html        — Main page (nav, hero, about, shows, gallery, connect, footer)
  content.json      — All editable content (about, shows, gallery)
  css/style.css     — Styles
  js/main.js        — Loads content.json + animations + mobile menu
  fonts/            — Self-hosted Benton Mod Display font
  images/           — All gallery and hero photos
  archive/          — Old design options (kept for reference)
```

## Google Analytics Setup

GA4 tracking is active with Measurement ID `G-MBD76BQLNK`. View data at [analytics.google.com](https://analytics.google.com).

Once the site is live, visit your GA4 dashboard → **Reports** → **Realtime** to confirm hits are coming in.

## GitHub Pages Setup

1. Go to your repository **Settings** > **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose the **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://pdj1183.github.io/sprouted-portfolio/`

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (Intersection Observer, scroll effects, dynamic content loading)
- Google Fonts (Syne)
- Self-hosted font (Benton Mod Display Black)
- Font Awesome 6 (social media icons)

No build tools or frameworks required.
