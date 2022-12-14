import React, {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Chip, Grid, IconButton, Tooltip, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {FlashCardSectionType, ThwHeroContentSectionType} from "../BlockContentTypes";
import clsx from "clsx";
import {useThwStyles} from "../transform-hw/pages/Styles";
import BartenderTheme from "../../theme/transform-hw/BartenderTheme";
import FlashCard from "./flash-card/FlashCard";
import {CocktailDbResultType, SanityCocktailType} from "../../common/sanityIo/Types";
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import thwClient from "../transform-hw/thwClient";
import SearchBox from "./search-box/SearchBox";
import externalCocktailClient from "./search-box/ExternalCocktailClient";
import SnackbarContext from "../../common/modal-context/SnackbarContext";
import snackbarContext from "../../common/modal-context/SnackbarContext";
import firebaseAnalyticsClient from "../../common/firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router-dom";
import FlashCardProvider from "./flash-card/flash-card-context/FlashCardProvider";
import FlashCardContext from "./flash-card/flash-card-context/FlashCardContext";
import FlashCardNav from "./FlashCardNav";
import CocktailDbResults from "./CocktailDbResults";

interface IProps {
    sectionData: FlashCardSectionType
}

interface CSSProps {
    heroBaseImageUrl: string,
    heroOverlay?: string | null
}

export const useStyles = makeStyles((theme: Theme) => ({
    contentSection: {
        // height: '500px',
        // marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))

const FlashCardsContentSection: FunctionComponent<IProps & PropsWithChildren> = (props) => {
    return (
        <Grid container item alignItems='center' alignContent='center' direction='column'
                                 style={{overflow: 'hidden'}}>
            <Grid container justifyContent='center'>
                <Grid item container xs={11} sm={8} lg={6}>
                    <SearchBox/>
                </Grid>
            </Grid>
            <Grid container item spacing={1}>
                <Grid item container xs={12} sm={8} lg={6}>
                    <FlashCardNav><FlashCard/></FlashCardNav>
                </Grid>
                <Grid item container xs={12} sm={8} lg={6} spacing={1}>
                    <CocktailDbResults/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FlashCardsContentSection