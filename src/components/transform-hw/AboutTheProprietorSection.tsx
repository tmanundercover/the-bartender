import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwAboutProprietorSectionType} from "../BlockContentTypes";
import BartenderTheme from "../../theme/transform-hw/BartenderTheme";
import {CssFadeToColorDirectionEnum} from "../css-fade-to-color/CssFadeToColorDirectionEnum";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import PsychologyTodaySeal from "./psychology-today-stamp/PsychologyToday";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(5),
        // paddingLeft: -theme.spacing(-5),
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: ThwAboutProprietorSectionType
}

const AboutTheProprietorSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(BartenderTheme)
    return (
        <Grid container item className={classes.root} xs={11}>
            <Grid container item justifyContent='space-around'>
                <Grid item xs={12} md={5} lg={4} container justifyContent='center' alignContent='center'
                      alignItems='center' style={{minWidth: "max-content"}}>
                    <Grid item style={{overflow: "hidden", position: "relative", backgroundColor:"white"}} container justifyContent='center'>
                        <ImageWIthButtonOverlay variant='contained' ctaButtonText={props.sectionData.ctaButtonText} ctaButtonLink={props.sectionData.ctaButtonLink} toColor={"rgba(232,232,232,0.9)"} imageSrc={props.sectionData.proprietorImage} height={545} direction={CssFadeToColorDirectionEnum.RIGHT} isResponsive/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={7} container direction='column' alignContent='space-between' spacing={2}>
                    <Grid container item style={{minHeight: "549px"}} direction='column' spacing={4}>
                        <Grid container item direction='column'>
                            <Grid item container>
                                <Grid item>

                                <Typography variant='h4'
                                            color='secondary'
                                            noWrap
                                            style={{fontWeight: 550}}>{props.sectionData.proprietorName}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h3'
                                                color='secondary' display='inline' style={{letterSpacing:"-.25em"}}>____</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>

                                <Typography variant='body1' color='textPrimary'
                                            style={{fontStyle: "italic"}}>{props.sectionData.proprietorTitle}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2} justifyContent='flex-end'>
                            <Grid item container>
                                <Typography variant='body2' color='secondary'
                                            >{props.sectionData.contentTitle}</Typography>

                            </Grid>
                            <Grid item container>
                                <Typography variant='body1'
                                            color='secondary' gutterBottom>{props.sectionData.contentText}</Typography>
                            </Grid>
                            <Grid container item direction='column'  alignItems='flex-end'>
                                <Grid item>
                                    <img alt={props.sectionData.proprietorSignatureImageAltText}
                                         src={urlFor(props.sectionData.proprietorSignatureImage).height(70).url() ?? ''}/>
                                </Grid>
                                <Grid item>
                                    <PsychologyTodaySeal/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutTheProprietorSection