import React, {FunctionComponent, PropsWithChildren, useContext, useMemo, useReducer,} from 'react';
import FlashCardContext from './FlashCardContext';
import {SanityCocktailType} from "../../../../common/sanityIo/Types";
import firebaseAnalyticsClient from "../../../../common/firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router-dom";
import SearchContext from "../../../../common/search-context/SearchContext";

type IProps = {
    setLoginFlashCard?: (isOpen: boolean) => void
    setFlashCardMessage?: (message: string) => void
};

type FlashCardStateType = {
    isFlipped?: boolean
    cardCounter?: number
};
const initialState: FlashCardStateType = {
    cardCounter:0,
    isFlipped:false
};

const FlashCardProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const searchContext = useContext(SearchContext)
    const reducer = (state: FlashCardStateType, action: any): FlashCardStateType => {
        switch (action.type) {
            case 'INITIAL':
                return initialState;
            case 'FLIP_CARD':
                return {
                    ...state,
                    isFlipped: !state.isFlipped,
                };
            case 'PREV_CARD':
                let updatedCount = state.cardCounter

                if (updatedCount === 0) {
                        updatedCount = (searchContext.searchResults?.length ?? 1) - 1
                } else {
                    updatedCount = (state.cardCounter ?? 1) - 1
                }

                return {
                    ...state,
                    cardCounter: updatedCount
                };
            case 'NEXT_CARD':
                let updatedNextCount = state.cardCounter ?? 0

                if (updatedNextCount >= (searchContext.searchResults?.length ?? 1) - 1) {
                    updatedNextCount = 0
                } else {
                    updatedNextCount = (state.cardCounter ?? 0) + 1
                }

                return {
                    ...state,
                    cardCounter: updatedNextCount
                };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const location = useLocation()

    React.useEffect(() => {
        if (state.cardCounter && searchContext.filteredCocktails && searchContext.filteredCocktails[state.cardCounter])
            state.cardCounter && firebaseAnalyticsClient.analyticsPageView(
                location.pathname,
                location.search,
                `${searchContext.filteredCocktails[state.cardCounter].title} | Cocktail`,
            );
    }, [state.cardCounter, searchContext.filteredCocktails])

    React.useEffect(() => {
        dispatch({type: "FLIP_CARD"})
    }, [searchContext.filteredCocktails])

    const nextCard = async () => {
        return dispatch({type: "NEXT_CARD"})
    }

    const prevCard = async () => {
        return dispatch({type: "PREV_CARD"})
    }

    const getCurrentCard = (): SanityCocktailType | undefined => {
        if (searchContext.searchResults && state.cardCounter)
            return searchContext.searchResults[state.cardCounter]
        if (!state.cardCounter && searchContext.searchResults)
            return searchContext.searchResults[0]
        return undefined
    }

    const handleFlip = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch({type: "FLIP_CARD"})
    }

    const newValue = useMemo(
        () => ({
            cardCounter: state.cardCounter,
            isFlipped: state.isFlipped,
            nextCard,
            prevCard,
            getCurrentCard,
            handleFlip,
        }),
        [state]
    );

    return (
        <FlashCardContext.Provider value={newValue}>
            {props.children}
        </FlashCardContext.Provider>
    );
};

export default FlashCardProvider;
