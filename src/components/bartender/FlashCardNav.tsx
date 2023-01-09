import React, {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, IconButton} from '@material-ui/core'
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import FlashCardContext from "./flash-card/flash-card-context/FlashCardContext";
import SearchContext from "../../common/search-context/SearchContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps { }


const FlashCardNav: FunctionComponent<PropsWithChildren> = (props2) => {
    const flashCardContext = useContext(FlashCardContext)
    const searchContext = useContext(SearchContext)

    return <Grid container item style={{position: "relative"}}>
        <Grid container item xs={12} justifyContent='center' alignContent='center' style={{position: "relative"}}>
            <Grid item style={{position: "absolute", paddingTop: "16px"}}>
                {`${(flashCardContext.cardCounter ?? 0)+1} / ${searchContext.searchResults?.length}`}

            </Grid>
            <Grid item container>

                {props2.children}
            </Grid>
        </Grid>
        <Grid item xs={2} container alignContent='center' style={{position: "absolute", height: "100%"}}>
            <IconButton color='secondary' onClick={flashCardContext.prevCard}>
                <ArrowLeft style={{fontSize: 32}}/>
                {/*Prev*/}
            </IconButton>
        </Grid>
        <Grid item xs={2} container alignContent='center' justifyContent='flex-end'
              style={{position: "absolute", right: 0, height: "100%"}}>
            <IconButton color='secondary' onClick={flashCardContext.nextCard}>
                {/*Next*/}
                <ArrowRight style={{fontSize: 32}}/>
            </IconButton>
        </Grid>
    </Grid>
}

export default FlashCardNav