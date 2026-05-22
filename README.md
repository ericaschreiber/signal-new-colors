# The Signal Institute — Website

Static website for [The Signal Institute](https://www.thesignalinstitute.com).

## Structure

```
signal-institute/
├── index.html          # Home
├── about.html          # About + Team
├── offerings.html      # Forums, Intensives, Coaching, Group & Team
├── resources.html      # Books, Podcasts, Tools
├── connect.html        # Contact form
├── assets/
│   ├── css/
│   │   └── style.css   # All styles
│   ├── js/
│   │   └── main.js     # Nav, scroll reveal, testimonials, offerings tabs
│   └── images/
│       ├── logo-indigo.png     # Nav logo (light backgrounds)
│       ├── logo-sage.png       # Nav logo (dark backgrounds / footer)
│       ├── logo-wine.png
│       ├── logo-teal.png
│       ├── logo-chocolate.png
│       └── logo-mustard.png
└── README.md
```

## Deployment

This is a fully static site — no build step required.

### GitHub Pages
1. Push to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Site will be live at `https://<username>.github.io/<repo-name>/`

### Custom Domain
Add a `CNAME` file to the root with your domain:
```
thesignalinstitute.com
```

## Fonts
- **Headers:** Libre Caslon Display / Adobe Caslon Pro (system fallback to Georgia)
- **Body:** Open Sans (loaded via Google Fonts)

## Color Palette
| Name | Hex |
|------|-----|
| Twilight Indigo | `#223554` |
| Dark Wine | `#721817` |
| Stormy Teal | `#2C6671` |
| Dry Sage | `#A9B18F` |
| Chocolate | `#C3703D` |
| Mustard | `#FCD757` |
| Warm White | `#F5F2EC` |
| Black Navy | `#1A1A2E` |
