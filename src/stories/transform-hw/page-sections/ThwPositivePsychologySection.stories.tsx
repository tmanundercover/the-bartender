import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {rest} from "msw";
import ThwHeroContentSection from "../../../components/transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "../../../components/transform-hw/ThwPositivePsychology";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Sections/Positive Psychology',
    parameters: {
        msw: [
            rest.get("/*", (req, res, ctx) => {
                return res(
                    ctx.json({
                        "androidPlayStoreIconSrc": null,
                        "androidPlayStoreLink": null,
                        "appStoreIconSrc": null,
                        "appStoreLink": null,
                        "description": " Up To provide innovative and alternative services in an effort to help those seeking change to live a meaningful and fulfilling life. To raise the awareness and the importance of Mental Health and Wellness.",
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
    component: ThwPositivePsychology,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof ThwPositivePsychology>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThwPositivePsychology> = (args) => <ThwPositivePsychology {...args} />;

export const ThwPositivePsychologySection = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThwPositivePsychologySection.args = {
    sectionData: {
        "contentBullets": [
            "Innovative & Alternative Services",
            "Live a meaningful and fulfilling life",
            "Helping to cultivate your best self",
            "Enhancing life experiences",
            "Raising Mental Health Awareness",
            "Mental Health Importance & Education"
        ],
        "contentText": "To provide innovative and alternative services in an effort to help those seeking change to live a meaningful and fulfilling life. To raise the awareness and the importance of Mental Health and Wellness.",
        "contentTitle": "Positive Pschology",
        "ctaButtonLink": "",
        "ctaButtonText": "Know More About Us",
        "imageSrc": {
            "_type": "image",
            "asset": {
                "_ref": "image-992ccda60cf1a3a3948b5600ec4b517e9bfa20de-5760x3840-jpg",
                "_type": "reference"
            }
        },
        "imageSrcAltText": "Sitting on the Therapists couch",
        "name": "Positive Psychology Draft",
        "superTitle": "Who we are"
    }
};

