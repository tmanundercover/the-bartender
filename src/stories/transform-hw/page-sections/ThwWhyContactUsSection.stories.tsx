import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {rest} from "msw";
import ThwContactUsSection from "../../../components/transform-hw/ThwContactUsSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Sections/Contact Us',
    parameters: {
        msw: [
            rest.get("/*", (req, res, ctx) => {
                return res(
                    ctx.json({
                        "androidPlayStoreIconSrc": null,
                        "androidPlayStoreLink": null,
                        "appStoreIconSrc": null,
                        "appStoreLink": null,
                        "description": "Up To provide innovative and alternative services in an effort to help those seeking change to live a meaningful and fulfilling life. To raise the awareness and the importance of Mental Health and Wellness.",
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
    component: ThwContactUsSection,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof ThwContactUsSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThwContactUsSection> = (args) => <ThwContactUsSection {...args} />;

export const ThwContactUs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThwContactUs.args = {
    sectionData: {
        twitter: "TransformativeHealingAndWellness",
        facebook: "TransformativeHealingAndWellness",
        "bgImageSrc": {
            "_type": "image",
            "asset": {
                "_ref": "image-6133a814cd84d491ca43d28b92dd8c97c18a3d61-6072x4048-jpg",
                "_type": "reference"
            }
        },
        "formSubmitButtonText": "Send",
        "lhsContentText": "Please let us know if you have something to say, ask, or contribute ideas for new spaces. We will read it.",
        "lhsTitle": "If you have something to say...",
        "name": "contact us - homepage - draft",
        "rhsTitle": "Get in Touch"
    }
};

