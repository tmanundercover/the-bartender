import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react'
import {Grid, TextField, Typography, useMediaQuery} from '@material-ui/core'
import {useThwStyles} from "../Styles";
import BartenderTheme, {COLORS} from "../../../../theme/transform-hw/BartenderTheme";
import CountdownToLaunch from "./CountdownToLaunch";
import therapistHoldingHand from "./assets/therapistHoldingHand.jpg"
import clsx from "clsx";
import leadClient from "./leadClient";
import {useQuery} from "react-query";
import isEmail from 'validator/lib/isEmail';
import LoadingButton from "../../../loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../../loading-button/ButtonGroupMemberEnum";
import CssFadeToColor from "../../../css-fade-to-color/CssFadeToColor";
import {SanityRef, SanityUnderConstructionPageType} from "../../../../common/sanityIo/Types";
import cmsClient from "../../../block-content-ui/cmsClient";
import transformHWTheme from "../../../../theme/transform-hw/BartenderTheme";


interface IProps {
    email?: string
    underConstructionPageRef: SanityRef
}

const UnderConstruction: FunctionComponent<IProps> = (props) => {
    const classes = useThwStyles({bgImage: therapistHoldingHand})

    const smDown = useMediaQuery(BartenderTheme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(BartenderTheme.breakpoints.down('xs'))

    const [email, setEmail] = useState("")
    const [releaseDate, setReleaseDate] = useState<Date>()
    const [cmsPageData, setCmsPageData] = useState<SanityUnderConstructionPageType>()


    const {isLoading, isError, data, refetch} = useQuery(
        ['createLead'],
        () => {
            if ((!data && !isError) && email && email.length > 0) {
                return leadClient.createLead({email, source: "Coming Soon Page"});
            }
            return undefined
        }
    );


    React.useEffect(() => {
        const getPage = async () => {
            return cmsClient.fetchRef(props.underConstructionPageRef).then((pageResponse) => {
                return pageResponse
            })
        }

        getPage().then((page) => {
            setCmsPageData(page)
        })
    }, [props.underConstructionPageRef])

    useEffect(() => {
        let releaseDateHolder = new Date(Date.now() + 2000000000)
        if (cmsPageData && cmsPageData.releaseDate) {
            releaseDateHolder = cmsPageData.releaseDate
        }
        setReleaseDate(releaseDateHolder)

    }, [cmsPageData])


    const createLead = async (e: any): Promise<any> => {
        return refetch()
    }

    const getHelperText = () => {
        if ((data || isError) && !isEmail(email)) {
            return <Typography style={{color: BartenderTheme.palette.error.main}} variant='subtitle1'>This is not a
                valid email address.</Typography>
        }

        if (data) {
            return <Typography style={{color: BartenderTheme.palette.success.main}} variant='subtitle1'>Thank you for
                your submission!</Typography>
        }
        if (isError) {
            return <Typography style={{color: BartenderTheme.palette.error.main}} variant='subtitle1'>Please Try your
                submission again later or contact jgreene@transformHW.org.</Typography>
        }

        return <Typography variant='subtitle1'>&nbsp;</Typography>
    }

    return (
        <Grid container className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullScreenImage)}
              style={{position: "relative"}}>
            <CssFadeToColor
                toColor='rgba(0,0,90,.9)'
                isResponsive/>
            <Grid container item
                  className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullscreenOverlay)}>
            </Grid>
            <Grid item container className={clsx(classes.fullscreen)}
                  style={{
                      position: 'absolute',
                      paddingBottom: smDown ? 0 : BartenderTheme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                <Grid container item xs={11} className={classes.spacer} justifyContent='center'>
                    <Typography variant={smDown ? 'h2' : 'h1'} align='center'
                                color='textSecondary'>{cmsPageData?.contentTitle}</Typography>
                </Grid>
                <Grid xs={10} container item justifyContent='center' className={classes.spacer}>
                    <CountdownToLaunch launchDate={releaseDate ?? new Date(Date.now() + 2000000000)}/>
                </Grid>
                <Grid container item justifyContent='center' style={{marginTop: BartenderTheme.spacing(2.5)}}>
                    <Grid item xs={10} md={8}>
                        <Typography variant='body1' color='textSecondary'
                                    align='center'>{cmsPageData?.contentText}</Typography>

                    </Grid>
                </Grid>
                <Grid container item justifyContent='center' style={{marginTop: BartenderTheme.spacing(5.75)}}>
                    <Grid item container justifyContent='center'>
                        <Typography color='primary' gutterBottom variant='body2'
                                    align='center' style={{marginBottom: transformHWTheme.spacing(2)}}>{cmsPageData?.subscribeText}</Typography>
                    </Grid>
                    <Grid item container xs={11} md={5}>
                        <TextField fullWidth
                                   label={cmsPageData?.emailFieldText}
                                   variant='filled'
                                   type='email'
                                   value={email}
                                   onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                       setEmail(event.target.value)
                                   }}
                                   className={classes.endAdornedInput}
                                   InputProps={{
                                       endAdornment:
                                           <LoadingButton
                                               width={200}
                                               isLoading={isLoading}
                                               groupiness={ButtonGroupMemberEnum.RIGHT}
                                               disabled={!!(data || isError || (email && (email.length > 0) && !isEmail(email)))}
                                               clickHandler={createLead}
                                               color='secondary'
                                               variant='contained'>{cmsPageData?.emailButtonText}</LoadingButton>
                                       ,
                                   }}/>
                    </Grid>
                    <Grid item container justifyContent='center' className={classes.spacer}>
                        {getHelperText()}
                    </Grid>
                    <Grid item container style={{
                        backgroundColor: xsDown ? BartenderTheme.palette.background.default : "transparent",
                        position: 'static',
                        bottom: 0,
                        height: "84px"
                    }}>
                        <Grid item xs={12} container justifyContent='center' direction='column' alignItems='center'>
                            {
                                cmsPageData?.footerTextLines.map(
                                    (footerLine, index) => <Grid item key={index}><Typography align='center' color='textSecondary' variant='body1'>
                                        {footerLine}
                                    </Typography></Grid>)
                            }
                        </Grid>
                        <Grid item container justifyContent='center' style={{color: COLORS.DARK_GRAY}}>
                            <Typography color='inherit' variant='h6'>{props.email}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UnderConstruction