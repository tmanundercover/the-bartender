import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Chip, Grid, Typography} from '@material-ui/core'
import {
    SanityCocktailType,
    SanityGarnish,
    SanityMixingGlass,
    SanityMixingInstruction
} from "../../../common/sanityIo/Types";
import {Close} from "@material-ui/icons";
import FlashCardContext from "./flash-card-context/FlashCardContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    // cocktail: SanityCocktailType
}

const FlashCardBack: FunctionComponent<IProps> = (props: IProps) => {
    const flashCardContext = useContext(FlashCardContext)

    const getGlassPrep = (prepString: string) => {
        switch (prepString) {
            case 'ICE':
                return "ice"
            case 'CHILLED':
                return "chilled"
            case 'STRAWBERRY_ICE':
                return "strawberry ice cubes"
            case 'SALT_RIM':
                return "salt on rim"
            case 'CHILI_SALT_RIM':
                return "chili salt on rim"
            case 'SUGAR_RIM':
                return "sugar on rim"
            case 'RED_SUGAR_RIM':
                return "red sugar on rim"
            case 'CARAMEL_STRIPE':
                return "caramel stripes"
            case 'CHOC_STRIPE':
                return "chocolate stripes"
            case 'GREEN_SUGAR_RIM':
                return "green sugar on rim"
            default:
                return prepString
        }

    }

    return (<Grid container item spacing={2} justifyContent='center'>
        <Grid item>
            <Typography variant='h6' align='center'>
                {flashCardContext.currentCard?.title}
            </Typography>
        </Grid>
        <Grid item container justifyContent='center'>
            <Typography variant='subtitle1' align='center'>
                {flashCardContext.currentCard?.glass.sizeOz}oz {flashCardContext.currentCard?.glass?.title}
            </Typography>
        </Grid>
        {
            flashCardContext.currentCard?.glassPrep && flashCardContext.currentCard?.glassPrep.length > 0 &&
            <Grid item container justifyContent='center' spacing={1}>
                {flashCardContext.currentCard?.glassPrep?.map((prep) => <Grid item><Chip color='secondary'
                                                                           label={<Typography variant='subtitle2'
                                                                                              align='center'>
                                                                               {getGlassPrep(prep)}
                                                                           </Typography>}></Chip></Grid>)}
            </Grid>
        }
        <Grid container item justifyContent='center'>
            <Grid item xs={8}>
                <Grid item container>
                    <Typography variant='body2'>
                        Ingredients:
                    </Typography>
                </Grid>
                <Grid container item>
                    <Grid container item style={{paddingLeft: "48px"}}>
                        {
                            flashCardContext.currentCard?.mixingGlass?.map((mixin: (SanityMixingGlass | SanityGarnish)) => {
                                if (mixin?._type === "MixingGlass") {
                                    return <Grid container item spacing={1}>
                                        <Grid item container xs={2}
                                              justifyContent='flex-end'>{mixin?.amount}oz</Grid>
                                        <Grid
                                            item>{mixin?.ingredient?.title}</Grid>
                                    </Grid>
                                }

                            })
                        }
                    </Grid>
                    <Grid container item>
                        {
                            flashCardContext.currentCard?.mixingGlassGarnishes?.map((mixin: (SanityGarnish)) => {
                                if (mixin) {
                                    return <Grid container item spacing={1}>
                                        <Grid item container xs={2}
                                              justifyContent='space-around' alignItems='center'
                                              alignContent='center'>1 <Close fontSize='small'/></Grid>
                                        <Grid item>{mixin?.title}</Grid>
                                    </Grid>
                                }

                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        {
            flashCardContext.currentCard?.garnish && flashCardContext.currentCard?.garnish.length > 0 &&
            <Grid container item justifyContent='center'>

                <Grid item justifyContent='flex-end' xs={8}>
                    <Grid item container>
                        <Typography variant='h6'>
                            Garnished By:
                        </Typography>
                    </Grid>
                    <Grid container item xs={11} style={{paddingLeft: "48px"}}>
                        {
                            flashCardContext.currentCard?.garnish?.map((garnishedBy: SanityGarnish) => {
                                return <Grid container item>
                                    <Grid item container>
                                        {garnishedBy.title}
                                    </Grid>
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        }
        <Grid container item justifyContent='center'>
            <Grid item container justifyContent='flex-end' xs={8}>
                <Grid item container>
                    <Typography variant='h6'>
                        Recipe:
                    </Typography>
                </Grid>
                <Grid container item xs={11}>
                    {
                        flashCardContext.currentCard?.instructions?.map((mixin: SanityMixingInstruction) => {
                            return <Grid container item>
                                <Grid item container>
                                    {`${mixin?.action} ${mixin?.instruction ? mixin?.instruction : ""}`}
                                </Grid>
                                <Grid item container style={{paddingLeft: "8px"}}>
                                    {
                                        mixin?.mixingGlass?.map((mixin: (SanityMixingGlass | SanityGarnish)) => {
                                            if (mixin?._type === "MixingGlass") {
                                                return <Grid container item spacing={1}>
                                                    <Grid item container xs={2}
                                                          justifyContent='flex-end'>{mixin?.amount}oz</Grid> <Grid
                                                    item>{mixin?.ingredient?.title}</Grid>
                                                </Grid>
                                            }

                                        })
                                    }
                                    {
                                        mixin?.mixingGlassGarnishes?.map((mixin: (SanityGarnish)) => {
                                            if (mixin) {
                                                return <Grid container item>
                                                    <Grid item>{mixin.title}</Grid>
                                                </Grid>
                                            }

                                        })
                                    }
                                </Grid>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>

    </Grid>)
}

export default FlashCardBack