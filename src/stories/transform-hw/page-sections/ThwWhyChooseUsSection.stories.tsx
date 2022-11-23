import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {rest} from "msw";
import ThwHeroContentSection from "../../../components/transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "../../../components/transform-hw/ThwPositivePsychology";
import AboutTheProprietorSection from "../../../components/transform-hw/AboutTheProprietorSection";
import ThwServicesSection from "../../../components/transform-hw/ThwServicesSection";
import ThwWhyChooseUsSection from "../../../components/transform-hw/ThwWhyChooseUsSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Sections/Why Choose Us?',
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
    component: ThwWhyChooseUsSection,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof ThwWhyChooseUsSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThwWhyChooseUsSection> = (args) => <ThwWhyChooseUsSection {...args} />;

export const ThwWhyChooseUs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThwWhyChooseUs.args = {
    sectionData: {
        imageSrcAltText:"",
        ctaButtonLink:"",
        ctaButtonText:"",
        "imageSrc": {
            "_type": "image",
            "asset": {
                "_ref": "image-af342067cc10e635311a28520ac8a97932d5a005-6539x4359-jpg",
                "_type": "reference"
            }
        },
        "name": "Why Choose Us - homepage-draft",
        "prosList": [
            {
                "_key": "d34e5fbc9709",
                "_ref": "7b82e677-8d46-458d-b168-597cc4668f1d",
                "_type": "reference"
            },
            {
                "_key": "1edaa934bfbb1213d0c08f8f7823a79d",
                "_ref": "57546a21-4234-4982-84ed-85a7c849c733",
                "_type": "reference"
            },
            {
                "_key": "80c3651127fd88eeb370a9c02fbe7df3",
                "_ref": "a609519b-a24d-40ee-b6ce-be9e71ce173b",
                "_type": "reference"
            }
        ],
        "sectionTitle": "Why Choose Us"
    }
};

