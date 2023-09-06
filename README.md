# [Castro Home Builders](https://castrohomebuilders.com)

Static site for Castro Home Builders, a general contracting construction company based out of Redwood City, CA.

Site is built with Astro based on the [Stone](https://astro.build/themes/details/stone/) theme and hosted on GitHub Pages.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── Picture.png
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `src/assets/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`    | Installs dependencies                        |
| `pnpm dev`        | Starts local dev server at `localhost:4321`  |
| `pnpm build`      | Build your production site to `./dist/`      |
| `pnpm preview`    | Preview your build locally, before deploying |
| `pnpm check`      | Compiles typescript and runs `astro check`   |
| `pnpm astro ...`  | Run CLI commands like `astro add`            |
| `pnpm lint:check` | Run prettier lint checks locally             |
