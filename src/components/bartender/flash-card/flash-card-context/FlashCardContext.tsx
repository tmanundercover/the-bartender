import React from 'react';
import {CocktailDbResultType, SanityCocktailType} from "../../../../common/sanityIo/Types";

export type FlashCardContextType = {
    nextCard?: ()=>void,
    prevCard?: ()=> void,
    getCurrentCard?: ()=> SanityCocktailType|undefined,
    cardCounter?: number,
    isFlipped?:boolean,
    handleFlip?: (e: React.SyntheticEvent)=>void,
};

const FlashCardContext = React.createContext<FlashCardContextType>({});

export default FlashCardContext;
