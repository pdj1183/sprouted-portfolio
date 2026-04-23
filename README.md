# Sprouted - DJ Portfolio

A one-page portfolio website for DJ Sprouted, built with plain HTML, CSS, and JavaScript.

## Live Preview

Visit: **https://pdj1183.github.io/sprouted-portfolio/**

## Design Options

This repository contains three different design templates:

| Option | Name | Style |
|--------|------|-------|
| [Option 1](option-1/) | **Neon Nights** | Dark/club aesthetic with neon glow effects |
| [Option 2](option-2/) | **Pure Focus** | Clean, minimal design with editorial whitespace |
| [Option 3](option-3/) | **Electric Energy** | Bold gradients with glassmorphism and animations |

## How to Customize

### Replacing Placeholder Images

Each option has a `images/` folder. To add real photos:

1. Add your images to the relevant `option-X/images/` folder
2. In `index.html`, replace the placeholder `<div>` elements with `<img>` tags:

```html
<!-- Before (placeholder) -->
<div class="placeholder-img placeholder-1"></div>

<!-- After (real image) -->
<img src="images/your-photo.jpg" alt="Sprouted performing" loading="lazy">
```

3. Remove the `.placeholder-X` CSS classes from `style.css` (they're marked with comments)

### Updating Social Links

In each `index.html`, search for `UPDATE:` comments to find all the social media links. Replace `#` with real URLs:

```html
<a href="https://instagram.com/sprouted" ...>
```

### Changing Colors

Each `style.css` file uses CSS custom properties (variables) at the top of the file. Change the values in the `:root` block to update colors globally. Look for `CUSTOMIZE:` comments throughout the CSS for additional tweaks.

### Updating the Bio

Search for `UPDATE:` comments in `index.html` to find the bio text in the About section.

## Choosing a Final Design

Once you've picked a design, you can make it the main site:

1. Copy the contents of your chosen `option-X/` folder to the repository root
2. Remove the other option folders and the selection `index.html`
3. Commit and push

Or, keep all three and link directly to your favorite:
`https://pdj1183.github.io/sprouted-portfolio/option-1/`

## GitHub Pages Setup

1. Go to your repository **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose the **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://pdj1183.github.io/sprouted-portfolio/`

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (Intersection Observer, scroll effects)
- Google Fonts (Orbitron, Montserrat, Outfit, Roboto, Inter, DM Sans)
- Font Awesome 6 (social media icons)

No build tools or frameworks required.
