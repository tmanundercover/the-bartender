import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import {SanityCocktailType} from "../../../common/sanityIo/Types";
import ReactCardFlip from "react-card-flip";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import firebaseAnalyticsClient from "../../../common/firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router-dom";
import FlashCardContext from "./flash-card-context/FlashCardContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        // height: 550,
        border: "1px solid black",
        padding: theme.spacing(6, 4)
    },
}))

interface IProps {
    // cocktail: SanityCocktailType
}

const FlashCard: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const flashCardContext = useContext(FlashCardContext)
    const [currentCard, setCurrentCard] = React.useState<SanityCocktailType>()

    React.useEffect(() => {
        const theCard = flashCardContext.getCurrentCard && flashCardContext.getCurrentCard()
        if(theCard)
            setCurrentCard(theCard)
    }, [flashCardContext.cardCounter])


    return (<Grid container item>
        <ReactCardFlip containerClassName={classes.root} isFlipped={flashCardContext.isFlipped}
                       flipDirection="vertical">
            <Grid container item onClick={flashCardContext.handleFlip} style={{height: "100%"}} alignContent='center'>
                <FlashCardFront currentCard={currentCard}/>
            </Grid>
            <Grid container item onClick={flashCardContext.handleFlip} style={{height: "100%"}} alignContent='center'>
                <FlashCardBack currentCard={currentCard}/>
            </Grid>
        </ReactCardFlip>
    </Grid>)
}

export default FlashCard