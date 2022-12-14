import React from 'react';
import {CocktailDbResultType, SanityCocktailType} from "../../../../common/sanityIo/Types";

export type FlashCardContextType = {
    nextCard?: ()=>void,
    prevCard?: ()=> void,
    cardCount?: number,
    currentCard?: SanityCocktailType,
    cocktails?: SanityCocktailType[],
    additionalResults?: CocktailDbResultType[],
    isFlipped?:boolean,
    handleFlip?: (e: React.SyntheticEvent)=>void,
    submitSearch?: (terms?:string)=>Promise<void>
};

const FlashCardContext = React.createContext<FlashCardContextType>({});

export default FlashCardContext;
