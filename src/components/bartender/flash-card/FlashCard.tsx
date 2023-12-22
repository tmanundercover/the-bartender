import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import ReactCardFlip from "react-card-flip";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import SearchContext from "../../../common/search-context/SearchContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        // height: 550,
        // minWidth: "423px",
        border: "1px solid black",
        padding: theme.spacing(6, 4)
    },
}))

interface IProps {
    // cocktail: SanityCocktailType
}

const FlashCard: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const searchContext = useContext(SearchContext)

    return (<Grid container item style={{minWidth: "423px"}}>
        <ReactCardFlip containerClassName={classes.root} isFlipped={searchContext.isFlipped}
                       flipDirection="vertical">
            <Grid container item onClick={searchContext.handleFlip} style={{height: "100%"}} alignContent='center'>
                <FlashCardFront currentCard={searchContext.currentCard}/>
            </Grid>
            <Grid container item onClick={searchContext.handleFlip} style={{height: "100%"}} alignContent='center'>
                <FlashCardBack currentCard={searchContext.currentCard}/>
            </Grid>
        </ReactCardFlip>
    </Grid>)
}

export default FlashCard