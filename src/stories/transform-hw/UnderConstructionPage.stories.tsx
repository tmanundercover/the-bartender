import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import LoadingButton from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import UnderConstruction from "../../components/transform-hw/pages/under-construction-page/UnderConstruction";
import {rest} from "msw";
import {Grid} from "@material-ui/core";
import BartenderTheme from "../../theme/transform-hw/BartenderTheme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Pages/Under Construction',
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
                        "releaseDate": "",
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
    component: UnderConstruction,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof UnderConstruction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnderConstruction> = (args) => <Grid item style={{backgroundColor: BartenderTheme.palette.background.default}}><UnderConstruction {...args} /></Grid>;

export const UnderConstructionPageUnderConstruction = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnderConstructionPageUnderConstruction.args = {
    // releaseDate: new Date("2022-11-01")
};

