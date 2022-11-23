import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'
import {ThwServiceItemType, ThwServicesSectionType} from "../BlockContentTypes";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import cmsClient from "../block-content-ui/cmsClient";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import MediaQueries from "../../utils/mediaQueries";
import mediaQueries from "../../utils/mediaQueries";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: (props: any) => props.xsDown ? theme.spacing(5, 2, 5) : theme.spacing(6),
        minHeight: 'max-content',
        backgroundColor: '#f6f6f6'
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: ThwServicesSectionType
}

const ThwServicesSection: FunctionComponent<IProps> = (props) => {
    const xsDown = mediaQueries.useXsDown()
    const mdDown = mediaQueries.useMdDown()
    const classes = useStyles({xsDown})

    const [servicesList, setServicesList] = useState<ThwServiceItemType[]>()

    React.useEffect(() => {
        const realizedServices = props.sectionData?.servicesList?.map((service) => {
            return cmsClient.fetchRef(service).then((serviceResp) => {
                return serviceResp
            })
        })

        Promise.all(realizedServices).then((response) => {
            setServicesList(response)
        }).catch(console.log)
    }, [props.sectionData])

    return (

        <Grid container item className={classes.root} xs={12} direction='column' spacing={2} alignItems='center'>
            <Grid container item>
            <Grid item container>
                <Typography variant='body1'
                            style={{fontStyle: "italic"}}>{props.sectionData.contentPreTitle}</Typography>
            </Grid>
            <Grid item container wrap='nowrap'>
                <Grid item>
                    <Typography color='secondary' variant='h4' align='center'
                                display='inline'>{props.sectionData.contentTitle}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h4'
                                color='secondary' display='inline'
                                style={{letterSpacing: "-.25em"}}>____</Typography>
                </Grid>
            </Grid>
            </Grid>
            <Grid item container>
                <Typography variant='body1'>{props.sectionData.contentText}</Typography>
            </Grid>
            <Grid item container spacing={4} justifyContent='center'>
                {servicesList?.map((service: ThwServiceItemType, index: number) => {
                    return <Grid key={index} container item xs={12} sm={6} md={4} direction='column'>
                        <Grid container item>
                            <Grid item container>

                                <ImageWIthButtonOverlay
                                    buttonAlignment={mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                                    imageAltText={service.imageSrcAltText}
                                    variant='contained'
                                    imageSrc={service.imageSrc} height={352}
                                    ctaButtonText={service.ctaButtonText}
                                    ctaButtonLink={service.ctaButtonLink}
                                />
                            </Grid>
                            <Grid item container justifyContent='center'
                                  style={{marginTop: "16px", marginBottom: "16px"}}>
                                <Typography variant='body2'>{service.contentTitle}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' align='center'>{service.contentText}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                })}
            </Grid>
        </Grid>
    )
}

export default ThwServicesSection