import React, {FunctionComponent, PropsWithChildren, useMemo, useReducer,} from 'react';
import FlashCardContext from './FlashCardContext';
import {CocktailDbResultType, SanityCocktailType} from "../../../../common/sanityIo/Types";
import thwClient from "../../../transform-hw/thwClient";
import externalCocktailClient from "../../search-box/ExternalCocktailClient";
import firebaseAnalyticsClient from "../../../../common/firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router-dom";

type IProps = {
    setLoginFlashCard?: (isOpen: boolean) => void
    setFlashCardMessage?: (message: string) => void
};

const dedupArr = (arr: SanityCocktailType[]) => {
    return arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
}


type FlashCardStateType = {
    isFlipped?: boolean
    cocktails?: SanityCocktailType[]
    allCocktails?: SanityCocktailType[]
    additionalResults?: CocktailDbResultType[]
    cardCount?: number
    currentCard?: SanityCocktailType
};
const initialState: FlashCardStateType = {};

const reducer = (state: any, action: any): FlashCardStateType => {
    switch (action.type) {
        case 'INITIAL':
            return initialState;
        case 'FLIP_CARD':
            return {
                ...state,
                isFlipped: !state.isFlipped,
            };
        case 'SET_COCKTAILS':
            return {
                ...state,
                cocktails: [...action.payload.cocktails],
                allCocktails: [...action.payload.cocktails],
                currentCard: action.payload.cocktails[0],
                cardCount: 0
            };
        case 'PREV_CARD':
            // state.currentAmenities && delete state.currentAmenities
            let updatedCount = state.cardCount

            if (updatedCount === 0) {
                updatedCount = state.cocktails.length - 1
            } else {
                updatedCount = state.cardCount - 1
            }

            return {
                ...state,
                cardCount: updatedCount,
                currentCard: state.cocktails[updatedCount]
            };
        case 'NEXT_CARD':
            // state.currentAmenities && delete state.currentAmenities
            let updatedNextCount = state.cardCount

            if (updatedNextCount === state.cocktails.length - 1) {
                updatedNextCount = 0
            } else {
                updatedNextCount = state.cardCount + 1
            }

            return {
                ...state,
                cardCount: updatedNextCount,
                currentCard: state.cocktails[updatedNextCount]
            };
        case 'UPDATE_SEARCH_RESULTS':
            return {
                ...state,
                cocktails: [...action.payload.cocktails],
                additionalResults: [...action.payload.additionalResults],
                cardCount: 0
            };
        case 'RESET_SEARCH_RESULTS':
            return {
                ...state,
                cocktails: [...state.allCocktails],
                additionalResults: [],
                cardCount: 0
            };
        default:
            throw new Error();
    }
}
const FlashCardProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const {data} = thwClient.useFetchAllFlashCards()

    React.useEffect(() => {
        if (data && data !== state.allCocktails) {
            dispatch({type: "SET_COCKTAILS", payload: {cocktails: data}})
        }
    }, [data])

    const nextCard = async () => {
        return dispatch({type: "NEXT_CARD"})
    }

    const prevCard = async () => {
        return dispatch({type: "PREV_CARD"})
    }

    const getExternalResults = async (terms: string) => {
        if (terms === "") {
            return state.allCocktails
        }
        const tokenizedTerms = terms.split(" ")
        const searchResults = tokenizedTerms.map((term: string) => {
            return externalCocktailClient.search(term)
        })

        return Promise.all(searchResults).then((allResults) => {
            const flatResults = [].concat(...allResults)

            return flatResults
        })

    }

    const filterCocktails = async (terms: string) => {
        if (terms === "") {
            return state.allCocktails
        }
        const tokenizedTerms = terms.split(" ")
        const inAppCocktails = state.allCocktails?.reduce((accumulated: SanityCocktailType[], cocktail: SanityCocktailType) => {
            const partialResults = tokenizedTerms.reduce((accumulatedIn: SanityCocktailType[], term: string) => {
                if (cocktail.title.toLowerCase().includes(term.toLowerCase())) {
                    accumulatedIn.push(cocktail)
                }
                return accumulatedIn
            }, [])

            if (partialResults) {
                accumulated.push(...partialResults)
            }

            return dedupArr(accumulated)
        }, [])


        return inAppCocktails
    }
    // const [additionalResults, setAdditionalResults] = React.useState<CocktailDbResultType[]>([])
    // const [isFlipped, setIsFlipped] = React.useState<boolean>()

    const handleFlip = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch({type: "FLIP_CARD"})

    }
    const submitSearch = async (terms?: string) => {
        if (terms && terms.length > 0) {
            const filteredCocktails = await filterCocktails(terms)
            const fromExternal: any[] | undefined = await getExternalResults(terms)
            // console.log("from db", fromExternal[0].drinks)
            if (fromExternal)
                dispatch({
                    type: "UPDATE_SEARCH_RESULTS",
                    payload: {cocktails: filteredCocktails, additionalResults: fromExternal[0].drinks}
                })
        } else if (!terms || (terms && terms.length === 0)) {
            dispatch({type: "RESET_SEARCH_RESULTS"})

        }
    }

    const location = useLocation()

    React.useEffect(() => {
        state.currentCard && firebaseAnalyticsClient.analyticsPageView(
            location.pathname,
            location.search,
            `${state.currentCard?.title} | Cocktail`,
        );
    }, [state.currentCard])

    const newValue = useMemo(
        () => ({
            cardCount: state.cardCount,
            currentCard: state.currentCard,
            cocktails: state.cocktails,
            isFlipped: state.isFlipped,
            additionalResults: state.additionalResults,
            nextCard,
            prevCard,
            handleFlip,
            submitSearch
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
