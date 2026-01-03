# Deploying Your Next.js Project to GitHub Pages

Deploying a Next.js application to GitHub Pages requires a few specific configuration steps. Since GitHub Pages is designed for static sites, you'll need to use Next.js's static export feature. This will generate a collection of HTML, CSS, and JavaScript files that can be hosted directly.

Here's a step-by-step guide to deploying your project:

## 1. Configure Your Project for Static Export

You need to tell Next.js to output a static version of your site.

### `next.config.ts`

Make sure your `next.config.ts` file includes the `output: 'export'` option. You also need to configure `basePath` and `assetPrefix` if you are deploying to a subdirectory on GitHub pages (e.g., `https://<username>.github.io/<repository-name>/`).

```typescript
// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Add a basePath if you are deploying to a subdirectory
  // basePath: '/<repository-name>',
  // Optional: Add assetPrefix for assets to be loaded correctly
  // assetPrefix: '/<repository-name>/',
  // Optional: Disable image optimization if you are not using a custom loader
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**Note:** Replace `<repository-name>` with the name of your GitHub repository. If you are deploying to a custom domain or to `<username>.github.io`, you might not need `basePath` and `assetPrefix`.

## 2. Create a GitHub Actions Workflow

GitHub Actions can automate the process of building and deploying your site whenever you push changes to your `main` (or `master`) branch.

Create a file at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - run: npm install

      - run: npm run build

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

      - uses: actions/deploy-pages@v4
```

This workflow does the following:
- Checks out your code.
- Sets up Node.js.
- Installs your project's dependencies.
- Builds the Next.js application for static export (the output will be in the `out` directory).
- Configures GitHub Pages.
- Uploads the build artifact.
- Deploys the artifact to GitHub Pages.

## 3. Configure Your GitHub Repository

Finally, you need to configure your repository on GitHub to serve your site using GitHub Actions.

1.  Go to your repository on GitHub.
2.  Click on the **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under **Build and deployment**, for the **Source**, select **GitHub Actions**.

After you push a change to your `main` branch, the GitHub Action will run, and your site will be deployed automatically.

## Is it possible to deploy this project to GitHub Pages?

**Yes, it is possible.** Your project is a Next.js application, and by following the steps above, you can generate a static version of it that is perfectly suitable for hosting on GitHub Pages. You already have a `deploy.yml` file, so you might just need to review and adjust it based on the instructions above.
