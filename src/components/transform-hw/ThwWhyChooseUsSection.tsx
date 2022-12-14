import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Divider, Grid, Typography} from '@material-ui/core'
import {ThwWhyChooseUsItemType, ThwWhyChooseUsSectionType} from "../BlockContentTypes";
import BartenderTheme from "../../theme/transform-hw/BartenderTheme";
import cmsClient from "../block-content-ui/cmsClient";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 'max-content',
        backgroundColor: theme.palette.primary.main
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: ThwWhyChooseUsSectionType
}

const ThwServicesSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(BartenderTheme)

    const [prosList, setProsList] = useState<ThwWhyChooseUsItemType[]>()

    React.useEffect(() => {
        const realizedPros = props.sectionData?.prosList?.map((pro) => {
            return cmsClient.fetchRef(pro).then((serviceResp) => {
                return serviceResp
            })
        })

        Promise.all(realizedPros).then((response) => {
            setProsList(response)
        }).catch(console.log)
    }, [props.sectionData])
    return (

        <Grid container item className={classes.root} xs={12}>
            <Grid container item>
                <Grid item container xs={12} md={5} style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight:"600px",
                    backgroundImage: `url(${urlFor(props.sectionData.imageSrc).url()})`
                }}>
                </Grid>
                <Grid item container alignItems='center' alignContent='center' justifyContent='center' xs={12} md={7}
                      style={{padding: BartenderTheme.spacing(5,4, 7)}}>
                    <Grid item container style={{marginBottom: "24px"}}>
                        <Typography display='inline'  gutterBottom color='secondary' variant='h4'
                                    align='center'>{props.sectionData.sectionTitle}</Typography>
                        <Typography variant='h4'
                                    color='secondary' display='inline' style={{letterSpacing:"-.25em"}}>____</Typography>
                    </Grid>
                    <Grid item container spacing={2} xs={11}>
                        {prosList?.map((service, index: number) => {
                            return <Grid key={index} container item spacing={2}>
                                <Grid container item>
                                    <Grid item container xs={3} style={{
                                        backgroundSize: "contain",
                                        minHeight: "145px",
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: `url(${urlFor(service.imageSrc).url()})`
                                    }}>

                                    </Grid>
                                    <Grid container item xs={9} justifyContent='center' alignContent='center'>
                                        <Grid container item xs={11} direction='column'>
                                            <Grid item container>
                                                <Typography gutterBottom variant='h6'
                                                            color='textPrimary'>{service.contentTitle}</Typography>
                                            </Grid>
                                            <Grid item container>
                                                <Typography variant='body1'
                                                            color='secondary'>{service.contentText}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {index < prosList.length - 1 && <Grid container item><Divider style={{width:"100%"}}></Divider></Grid>}
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ThwServicesSection