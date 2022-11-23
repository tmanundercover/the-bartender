import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {rest} from "msw";
import ThwHeroContentSection from "../../../components/transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "../../../components/transform-hw/ThwPositivePsychology";
import AboutTheProprietorSection from "../../../components/transform-hw/AboutTheProprietorSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Sections/About the Proprietor',
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
    component: AboutTheProprietorSection,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof AboutTheProprietorSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutTheProprietorSection> = (args) => <AboutTheProprietorSection {...args} />;

export const ThwPositivePsychologySection = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThwPositivePsychologySection.args = {
    sectionData: {
        "contentText": "Are you living your life to the fullest? Do you know your strengths? Or are you consumed with your weakness? Do you feel overwhelmed by stress? Are you seeking to create a relaxed day-to-day life? Are you burden with worries? Do you have dreams and goals you want to achieve but feel stuck? Are you looking for a warm, supportive and challenges? Using Strength based, Cognitive Behavorial, self aware problem solve and explore unlimited potential and possibilities.",
        "proprietorTitle": "MSW, LCSW-C",
        "ctaButtonLink": "",
        "ctaButtonText": "Talk with Me",
        "contentTitle":"Therapeutic Services",
        proprietorImage: {
            "_type": "image",
            "asset": {
                "_ref": "image-08b06ad785f147b2013463b6707b73b6e4b9c89b-320x400-jpg",
                "_type": "reference"
            }
        },
        proprietorImageAltText: "Julie Greene, MSW, LCSW-C",
        "name": "About the Proprietor Draft",
        proprietorSignatureImageAltText: "signature alt text",
        proprietorName: "Julie Greene",
        proprietorSignatureImage: {
            "_type": "image",
            "asset": {
                "_ref": "image-0506a3b827fd37210a48f5296d3b0bc3f3696a4b-369x116-png",
                "_type": "reference"
            }
        }
    }
};

