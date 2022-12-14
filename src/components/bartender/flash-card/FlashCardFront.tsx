import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import {SanityCocktailType} from "../../../common/sanityIo/Types";
import ImageWIthButtonOverlay from "../../image-with-button-overlay/ImageWithButtonOverlay";
import FlashCardContext from "./flash-card-context/FlashCardContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    // cocktail: SanityCocktailType
}

const FlashCardFront: FunctionComponent<IProps> = (props: IProps) => {

    const flashCardContext = useContext(FlashCardContext)


    return (<Grid container item direction='column' justifyContent='center' alignItems='center' alignContent='center'
                  spacing={3}>
        <Grid item>
            {flashCardContext.currentCard?.title}
        </Grid>
        <Grid item>
            {flashCardContext.currentCard?.imageSrc && <ImageWIthButtonOverlay imageSrc={flashCardContext.currentCard.imageSrc} height={200} width={200}/>}
        </Grid>
        <Grid item>
            {flashCardContext.currentCard?.title}
        </Grid>
        <Grid item>
            Drink Count: {flashCardContext.currentCard?.drinkCount}
        </Grid>

    </Grid>)
}

export default FlashCardFront