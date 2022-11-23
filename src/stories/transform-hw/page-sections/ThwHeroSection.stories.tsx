import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {rest} from "msw";
import ThwHeroContentSection from "../../../components/transform-hw/ThwHeroContentSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Sections/Hero Section',
    parameters: {
        msw: [
            rest.get("/*", (req, res, ctx) => {
                return res(
                    ctx.json({
                        "androidPlayStoreIconSrc": null,
                        "androidPlayStoreLink": null,
                        "appStoreIconSrc": null,
                        "appStoreLink": null,
                        "description": " Up To provide innovative and alternative services in an effort to help those seeking change to live a meaningful and fulfilling life. To help them to cultivate their best self as they work towards enhancing their life experiences. To raise the awareness and the importance of Mental Health and Wellness.",
                        "facebook": "transformHW",
                        "facebookIconSrc": null,
                        "fdicDisclaimer": null,
                        "fdicImage": null,
                        "instagram": "TransformativeHealingAndWellness",
                        "instagramIconSrc": null,
                        "isUnderConstruction": true,
                        "metaImage": {
                            "_type": "image",
                            "asset": {
                                "_ref": "image-19ec2e026285aa2d7bf3e9e3ec3e73feafe4ca49-3000x3000-jpg",
                                "_type": "reference"
                            }
                        },
                        "pageContent": null,
                        "releaseDate": new Date("2022-11-10"),
                        "slug": {
                            "_type": "slug",
                            "current": "coming-soon"
                        },
                        "structuredData": null,
                        "title": "Transformative Healing & Wellness",
                        "twitter": "transform_hw",
                        "twitterIconSrc": null
                    })
                );
            }),
        ],
    },
    component: ThwHeroContentSection,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof ThwHeroContentSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThwHeroContentSection> = (args) => <ThwHeroContentSection {...args} />;

export const ThwHeroSection = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThwHeroSection.args = {
    sectionData: {
        "contentWelcomeMessage": "Welcome to Transformative Healing & Wellness",
        "contentTitle": "Matters of the Mind",
        "contentText": `We provide innovative and alternative services to help those seeking change to live a meaningful and fulfilling life.`,
        "ctaButtonLink": "https://www.therapyportal.com/p/transformative21117/appointments/availability/",
        "ctaButtonTitle": "Get an Appointment",
        "heroImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-24e72f756a6ff5bac767c1fdab89c26c4118b067-5017x2822-jpg",
                "_type": "reference"
            }
        },
        "heroImageAltText": "Let's talk about Positive Psychology",
        "name": "homepage draft hero",
        "title": "Transformative Healing and Wellness Homepage Hero"
    }
};

