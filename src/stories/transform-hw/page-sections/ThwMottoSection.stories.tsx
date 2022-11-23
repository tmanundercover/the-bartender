import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {rest} from "msw";
import ThwHeroContentSection from "../../../components/transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "../../../components/transform-hw/ThwPositivePsychology";
import {ThwPositivePsychologySection} from "./ThwPositivePsychologySection.stories";
import ThwMottoSection from "../../../components/transform-hw/ThwMottoSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Sections/The Motto',
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
                                "_ref": "image-ec02894890f2e89f4ceb774ad0d2f40c8ba1273e-2000x1069-jpg",
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
    component: ThwMottoSection,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof ThwMottoSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThwMottoSection> = (args) => <ThwMottoSection {...args} />;

export const ThwMottoSectionSection = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThwMottoSectionSection.args = {
    sectionData: {
        "contentText": "Embracing Mental Wellness while healing Mental Illness",
        "name": "thw motto",
        contentSuperTitle: "Local to Baltimore and the Greater DC, MD, & VA Area",
        "parallaxImage": {
            "_type": "image",
            "asset": {
                _ref:"image-8f3b7af2d21cb70ee72eb426f8e434eeba081751-2000x1275-png",
                "_type": "reference"
            }
        }
    }
};

