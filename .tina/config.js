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
        name: "siteSettings",
        label: "Site Settings",
        path: "src/content/settings",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Site Title — SEO",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Site Description — SEO",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "header",
            label: "Intro Header Text",
            required: true,
          },
          {
            type: "string",
            name: "intro",
            label: "Intro Description Text",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "investorLink",
            label: "Investor Link",
            required: true,
          },
          {
            type: "rich-text",
            name: "about",
            label: "About Text",
            isBody: true,
            required: true,
          },
          {
            type: "string",
            name: "calloutHeader",
            label: "Callout Header",
          },
          {
            type: "string",
            name: "calloutText",
            label: "Callout Text",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "portfolio",
        label: "Portfolio Stats",
        path: "src/content/portfolio",
        fields: [
          {
            type: "string",
            name: "description",
            label: "Description",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "number",
            name: "stat",
            label: "Stat Value",
            required: true,
          },
          {
            type: "string",
            name: "statId",
            label: "ID for countup animation - DO NOT EDIT",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      {
        name: "navigation",
        label: "Navigation",
        path: "src/content/navigation",
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
            name: "href",
            label: "Link Target Value",
            required: true,
          },
          {
            type: "boolean",
            name: "external",
            label: "Is link external?",
          },
          {
            type: "number",
            name: "order",
            label: "Order",
          },
        ],
      },
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
