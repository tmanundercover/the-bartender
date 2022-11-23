import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwMottoSectionType} from "../BlockContentTypes";
import MediaQueries from "../../utils/mediaQueries";
import {useThwStyles} from "./pages/Styles";
import clsx from "clsx";
import mediaQueries from "../../utils/mediaQueries";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '430px',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: ThwMottoSectionType
}

const ThwMottoSection: FunctionComponent<IProps> = (props) => {
    const globalClasses = useThwStyles({bgImage: urlFor(props.sectionData.parallaxImage)})
    const classes = useStyles()

    const smDown = mediaQueries.useSmDown()

    return (
        <Grid container item className={clsx([globalClasses.fullSection, globalClasses.fullScreenImage, classes.root])}
              style={{position: "relative", overflow: "hidden", backgroundAttachment: "fixed"}}>
            <Grid container item
                  className={clsx(globalClasses.fullSectionOverlay)}>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' alignContent='center' item
                  style={{zIndex: 2, padding: "40px"}}>
                <Typography variant='subtitle1' style={{color: '#FAFAFA'}} align='center'>
                    {props.sectionData.contentSuperTitle}
                </Typography>
                <Typography variant={smDown?'h3':'h2'} style={{color: '#FAFAFA'}} align='center'>
                    {props.sectionData.contentText}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ThwMottoSection