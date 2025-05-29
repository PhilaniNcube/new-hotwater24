import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-12-01",
  title: "Hotwater24 News",
  basePath: "/studio",
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
  schema: { types: schemas },
});

export default config;
