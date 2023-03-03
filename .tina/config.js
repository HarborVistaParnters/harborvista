import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "team",
        label: "Team Members",
        path: "src/content/team",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "intro",
            label: "Intro",
            required: true,
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Bio",
            isBody: true,
            required: true,
          },
          {
            type: "image",
            name: "headshot",
            label: "Headshot",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            required: true,
          },
        ],
      },
    ],
  },
});
