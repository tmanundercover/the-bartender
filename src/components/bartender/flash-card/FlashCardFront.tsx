import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import {SanityCocktailType} from "../../../common/sanityIo/Types";
import ImageWIthButtonOverlay from "../../image-with-button-overlay/ImageWithButtonOverlay";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    currentCard?: SanityCocktailType
}

const FlashCardFront: FunctionComponent<IProps> = ({currentCard}: IProps) => {

    return (<Grid container item direction='column' justifyContent='center' alignItems='center' alignContent='center'
                  spacing={3}>
        <Grid item>
            {currentCard?.title}
        </Grid>
        <Grid item>
            {currentCard?.imageSrc && <ImageWIthButtonOverlay imageSrc={currentCard.imageSrc} height={200} width={200}/>}
        </Grid>
        <Grid item>
            {currentCard?.title}
        </Grid>
        <Grid item>
            Drink Count: {currentCard?.drinkCount}
        </Grid>

    </Grid>)
}

export default FlashCardFront