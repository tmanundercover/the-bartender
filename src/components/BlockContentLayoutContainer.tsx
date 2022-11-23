import React, {FunctionComponent, useState} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid, Link} from '@material-ui/core'
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {
    ThwAboutProprietorSectionType,
    ThwContactUsSectionType,
    ThwHeroContentSectionType,
    ThwMottoSectionType,
    ThwPositivePsychologySectionType,
    ThwServicesSectionType,
    ThwWhyChooseUsSectionType,
} from "./BlockContentTypes";
import TransformHWTheme from "../theme/transform-hw/TransformHWTheme";
import useThwCommonStyles from "../common/sanityIo/ThwCommonStyles";
import ThwHeroContentSection from "./transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "./transform-hw/ThwPositivePsychology";
import ThwMottoSection from "./transform-hw/ThwMottoSection";
import AboutTheProprietorSection from "./transform-hw/AboutTheProprietorSection";
import ThwServicesSection from "./transform-hw/ThwServicesSection";
import ThwWhyChooseUsSection from "./transform-hw/ThwWhyChooseUsSection";
import ThwContactUsSection from "./transform-hw/ThwContactUsSection";
import {SanityMenuContainer} from "../common/sanityIo/Types";
import ThwHeader from "./transform-hw/header/ThwHeader";
import {useScrollPosition} from "../utils/useScrollPosition";
import ThwFooter from "./transform-hw/footer/ThwFooter";
import {SanityHomePage} from "./block-content-ui/static-pages/cmsStaticPagesClient";

export type BlockContentLayoutContainerProps = { content?: any, isOpaque?:boolean, homePage?: SanityHomePage }

const BlockContentLayoutContainer: FunctionComponent<BlockContentLayoutContainerProps> = (props) => {
    const classes = useThwCommonStyles(TransformHWTheme)

    return <Grid container item>
        {props?.content?.map((columnLayoutContainer: any, index: number) => {
            switch (columnLayoutContainer._type) {
                case 'column1BlockContent':
                    return <Grid key={index} container justifyContent='center' alignItems='stretch'>
                        <Grid item>
                            <Card className={classes.root} style={{paddingTop: '80px'}}>
                                <Grid container item xs={12} className={classes.layoutContainer}>
                                    <Grid item xs={12}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                case 'column2BlockContent':
                    return <Grid key={index} container justifyContent='center' alignItems='stretch'>
                        <Grid item>
                            <Card className={classes.root} style={{paddingTop: '80px'}}>
                                <Grid container item xs={12} className={classes.layoutContainer}>
                                    <Grid item xs={6}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.column1.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.column2.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                </Grid>
                            </Card></Grid>
                    </Grid>
                //HW SECTIONS
                case 'transformHeroContentSection':
                    const thwHeroSection: ThwHeroContentSectionType = columnLayoutContainer

                    return <Grid key={index} container item xs={12}>
                        <Link id={"TOP_OF_PAGE"}><></>
                        </Link>
                        <ThwHeroContentSection
                            sectionData={thwHeroSection}
                        />
                    </Grid>
                case 'transformPositivePsychologySection':
                    const thwPositivePsychologySection: ThwPositivePsychologySectionType = columnLayoutContainer

                    return <Grid key={index} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
                        <Link id={"ABOUT_US"} style={{position: "relative", top: -80}}><></>
                        </Link>
                        <ThwPositivePsychology
                            sectionData={thwPositivePsychologySection}
                        />
                    </Grid>
                case 'transformMottoSection':
                    const thwMottoSection: ThwMottoSectionType = columnLayoutContainer

                    return <Grid key={index} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
                        <ThwMottoSection
                            sectionData={thwMottoSection}
                        />
                    </Grid>
                case 'transformAboutProprietorSection':
                    const thwProprietorSection: ThwAboutProprietorSectionType = columnLayoutContainer

                    return <Grid key={index} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
                        <AboutTheProprietorSection
                            sectionData={thwProprietorSection}
                        />
                    </Grid>
                case 'transformServicesSection':
                    const thwServicesSection: ThwServicesSectionType = columnLayoutContainer

                    return <Grid key={index} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
                        <Link id={"SERVICES"} style={{position: "relative", top: -80}}><></>
                        </Link>
                        <ThwServicesSection
                            sectionData={thwServicesSection}
                        />
                    </Grid>
                case 'transformWhyChooseUsSection':
                    const thwWCUSection: ThwWhyChooseUsSectionType = columnLayoutContainer

                    return <Grid key={index} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
                        <ThwWhyChooseUsSection
                            sectionData={thwWCUSection}
                        />
                    </Grid>
                case 'transformContactUsSection':
                    const thwCUSection: ThwContactUsSectionType = columnLayoutContainer

                    return <Grid key={index} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
                        <ThwContactUsSection
                            sectionData={thwCUSection}
                        />
                    </Grid>
                case 'menuContainer':
                    console.log(" the menuContainer name is", columnLayoutContainer)
                    if (columnLayoutContainer.slug.current.includes('header')) {
                        const pageHeader: SanityMenuContainer = columnLayoutContainer
                        console.log("before passing to header", pageHeader)

                        return <Grid container item xs={12} key='transform-hw-header'>
                            <ThwHeader menuSlug={pageHeader.slug?.current} isOpaque={props.isOpaque}/>
                        </Grid>
                    } else {
                        const pageFooter: SanityMenuContainer = columnLayoutContainer
                        console.log("before passing to footer", pageFooter)

                        return <Grid container item xs={12} key='transform-hw-footer'>
                            <ThwFooter footerMenuSlug={pageFooter.slug?.current} homePage={props.homePage}/>
                        </Grid>
                    }
                default:
                    return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
            }
        }) ?? <></>
        }

    </Grid>
}

export default BlockContentLayoutContainer
