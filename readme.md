# Amalgam Capital Website

A modern, responsive website for Amalgam Capital built with Jekyll, featuring a clean design and focused on operational expertise in private equity.

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Bundler gem
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amalgam-capital/amalgam-capital.github.io.git
   cd amalgam-capital.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Serve locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser to `http://localhost:4000`

## 🛠️ Development

### Local Development Server

```bash
# Standard development server
bundle exec jekyll serve

# With live reload and drafts
bundle exec jekyll serve --livereload --drafts

# Custom host and port
bundle exec jekyll serve --host 0.0.0.0 --port 4001
```

### Building for Production

```bash
# Build the site
bundle exec jekyll build

# Build with production environment
JEKYLL_ENV=production bundle exec jekyll build
```

## 📁 Project Structure

```
├── _data/                 # Data files (YAML, JSON, CSV)
│   └── navigation.yaml    # Site navigation structure
├── _includes/             # Reusable HTML snippets
│   ├── header.html
│   ├── footer.html
│   └── logo.html
├── _layouts/              # Page templates
│   ├── default.html
│   ├── home.html
│   ├── contact.html
│   └── ...
├── _sass/                 # Sass stylesheets
├── images/                # Static images
├── _config.yml            # Jekyll configuration
├── index.md               # Home page
├── about.md               # About page
├── contact.md             # Contact page
└── ...                    # Other pages
```

## 🎨 Styling

The site uses:
- **Tailwind CSS** for utility-first styling
- **Custom Sass** for component-specific styles
- **Adobe Fonts** (Typekit) for typography
- **Font Awesome** for icons

### Color Scheme

- **Primary Brand Colors**: Coral (#F16545) and Gold (#D4AF37)
- **Dark Mode**: Supported throughout
- **Gradients**: Used extensively for visual interest

## 📄 Content Management

### Adding New Pages

1. Create a new Markdown file in the root directory
2. Add front matter with layout and metadata
3. Write content in Markdown
4. Update navigation in `_data/navigation.yaml` if needed

Example:
```yaml
---
layout: page
title: "New Page"
description: "Page description for SEO"
---

# Page Content

Your content here...
```

### Updating Team Members

Edit the team page Markdown file and update the team member data structure.

### Managing Portfolio Companies

Update the portfolio page with new investments and case studies.

## 🚀 Deployment

### GitHub Pages (Automatic)

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

- **Live URL**: `https://amalgamcapital.com`
- **GitHub Pages URL**: `https://amalgam-capital.github.io`

### Manual Deployment

```bash
# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Deploy the _site folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

- `JEKYLL_ENV=production` - Enables production optimizations
- Google Analytics tracking ID is configured in `_config.yml`

### Key Configuration Files

- `_config.yml` - Main Jekyll configuration
- `Gemfile` - Ruby dependencies
- `tailwind.config.js` - Tailwind CSS configuration

## 🧪 Testing

```bash
# Check for broken links
bundle exec jekyll build && bundle exec htmlproofer ./_site

# Validate HTML
bundle exec jekyll build && bundle exec htmlproofer ./_site --check-html

# Check accessibility
# Use browser tools or axe-cli for accessibility testing
```

## 🔗 Links

- **Live Site**: [amalgamcapital.com](https://amalgamcapital.com)
- **Jekyll Documentation**: [jekyllrb.com](https://jekyllrb.com)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)

---

Built by Adit