// sanity.config.js
import { defineConfig } from "sanity";
import {visionTool} from "@sanity/vision";
import schemas from './schemas/schema'
import { deskTool } from 'sanity/desk'

export default defineConfig({
    title: "The Bartender",
    projectId: "osisupsd",
    dataset: "development",
    plugins: [deskTool({}), visionTool()],
    schema: {
        types: schemas,
    },
});