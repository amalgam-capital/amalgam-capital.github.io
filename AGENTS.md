# AGENTS.md

## Cursor Cloud specific instructions

This is a **Jekyll + Tailwind CSS static site** (Amalgam Capital corporate website). No backend, database, or Docker required.

### Prerequisites (installed by update script)
- **Ruby** (≥2.7) + Bundler — gems installed to `vendor/bundle` via `bundle install`
- **Node.js** + npm — Tailwind CSS toolchain via `npm install`

### Running the site
1. Build Tailwind CSS: `npm run build-css-prod` (one-shot) or `npm run build-css` (watch mode)
2. Serve locally: `bundle exec jekyll serve --host 0.0.0.0 --port 4000`
3. Open `http://localhost:4000`

### Key caveats
- Bundler must use a local path (`vendor/bundle`) since the system gem directory is not writable. The update script sets this via `bundle config set --local path 'vendor/bundle'`.
- The `_config.yml` uses `plugins_dir` instead of `plugins` for some plugin declarations — this is a known Jekyll quirk in this repo but doesn't affect the build.
- There is no formal linting (ESLint/Rubocop) or automated test suite configured. The README mentions `htmlproofer` but it is not in the Gemfile.
- The build/test workflow is: `npm run build-css-prod && bundle exec jekyll build`. Success = zero exit code.
- For full dev reference, see `readme.md` in the repo root.
