import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {rest} from "msw";
import ThwServicesSection from "../../../components/transform-hw/ThwServicesSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Sections/Services',
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
    component: ThwServicesSection,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof ThwServicesSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThwServicesSection> = (args) => <ThwServicesSection {...args} />;

export const ThwServices = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThwServices.args = {
    sectionData: {
        "contentText": "These are our services. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "contentPreTitle": "Wellness",
        "contentTitle": "Our Services",
        "name": "homepage-draft Services",
        "servicesList": [
            {
                "_ref": "d808f87a-26ba-450a-8aac-37b2eec7ada8",
                "_type": "reference"
            },
            {
                "_key": "efdfe6b7ddfb",
                "_ref": "58181c52-b74c-49b8-bd1e-0d5f9d5bf2db",
                "_type": "reference"
            },
            {
                "_key": "0ee1d86fd1ba",
                "_ref": "a1a25e83-c8fe-4c49-a757-5d880595b81c",
                "_type": "reference"
            },
            {
                "_key": "7446cd22f674",
                "_ref": "554f8a98-da38-4c2e-9007-e2e95099c0af",
                "_type": "reference"
            }
        ]
    }
};

