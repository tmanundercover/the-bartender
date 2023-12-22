import React, {FunctionComponent, PropsWithChildren} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import {FlashCardSectionType} from "../BlockContentTypes";
import FlashCard from "./flash-card/FlashCard";
import SearchBox from "./search-box/SearchBox";
import FlashCardNav from "./FlashCardNav";
import CocktailDbResults from "./CocktailDbResults";
import FiltersMenu from "./FiltersMenu";

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
                                 style={{overflow: 'hidden',}}>
            <Grid container justifyContent='center' style={{minWidth: "423px"}}>
                <Grid item container xs={2} alignContent='center' justifyContent='flex-end'>
                    <FiltersMenu  anchor={'bottom'}/>
                </Grid>
                <Grid item container xs={10}>
                    <SearchBox/>
                </Grid>
            </Grid>
            <Grid container item spacing={1}>
                <Grid item container xs={12}>
                    <FlashCardNav><FlashCard/></FlashCardNav>
                </Grid>
                <Grid item container xs={12} spacing={1}>
                    <CocktailDbResults/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FlashCardsContentSection