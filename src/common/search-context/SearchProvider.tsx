import React, {FunctionComponent, PropsWithChildren, useReducer,} from 'react';
import SearchContext from "./SearchContext";
import externalCocktailClient from "../../components/bartender/search-box/ExternalCocktailClient";
import {CocktailDbResultType, SanityCocktailIngredient, SanityCocktailType} from "../sanityIo/Types";
import apiClient from "../../components/transform-hw/apiClient";
import firebaseAnalyticsClient from "../firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router-dom";

type IProps = {};

type SearchStateType = {
    cocktails?: SanityCocktailType[]
    allCocktails?: SanityCocktailType[]
    additionalResults?: CocktailDbResultType[]
    searchString?: string
    isNonAlcoholic?: boolean
    loading?: boolean
    cardCounter?: number
    isFlipped?: boolean
    currentCard?: SanityCocktailType
    tagFilters?: string[]
    searchFilters?: string[]
    ingredientFilters?: string[]
    isAndSearch?: boolean
};

const initialState: SearchStateType = {
    cocktails: [],
    allCocktails: [],
    additionalResults: [],
    loading: true,
    searchString: "",
    cardCounter: 0,
    isFlipped: false,
    currentCard: undefined,
    searchFilters: [],
    ingredientFilters: [],
    isAndSearch: false
};

enum BOOLEAN_FILTERS {
    IS_NON_ALCOHOLIC = "non-alcholic",
}


const SearchProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const reducer = (state: any, action: any): SearchStateType => {
        switch (action.type) {
            case 'INITIAL':
                console.log("Action n stuff", action, state)
                return {
                    ...initialState,
                    allCocktails: [...action.payload.allCocktails],
                    cocktails: [...action.payload.allCocktails],
                    currentCard: action.payload.allCocktails[0],
                    searchString: action.payload.searchString,
                    loading: false
                };
            case 'RESET_SEARCH_RESULTS':
                return {
                    ...state,
                    searchString: "",
                    loading: false,
                    cocktails: state.allCocktails ? state.allCocktails : [],
                    additionalResults: [],
                    currentCard: state.allCocktails ? state.allCocktails[0] : undefined
                };
            case 'UPDATE_SEARCH_RESULTS':
                return {
                    ...state,
                    cocktails: [...action.payload.cocktails],
                    loading: false,
                    additionalResults: action.payload.additionalResults ? action.payload.additionalResults : state.additionalResults,
                    cardCount: 0,
                    currentCard: action.payload.cocktails[0],
                    searchString: action.payload.searchString ?? state.searchString
                };
            case 'ADD_SEARCH_FILTER':
                return {
                    ...state,
                    searchFilters: state.searchFilters.concat(action.payload.searchFilterToAdd),
                    isNonAlcoholic: action.payload.isNonAlcoholic ? action.payload.isNonAlcoholic : undefined
                };
            case 'REMOVE_SEARCH_FILTER':
                return {
                    ...state,
                    searchFilters: state.searchFilters.filter((searchFilter: string) => {
                        if (searchFilter === action.payload.filterToRemove)
                            return false
                        return true
                    }),
                    isNonAlcoholic: action.payload.isNonAlcoholic ? action.payload.isNonAlcoholic : undefined
                };
            case 'ADD_INGREDIENT_FILTER':
                return {
                    ...state,
                    ingredientFilters: state.ingredientFilters.concat(action.payload.ingredientFilterToAdd),
                };
            case 'REMOVE_INGREDIENT_FILTER':
                return {
                    ...state,
                    ingredientFilters: state.ingredientFilters.filter((ingredientFilter: string) => {
                        if (ingredientFilter === action.payload.filterToRemove)
                            return false
                        return true
                    }),
                };
            case 'HANDLE_AND_SEARCH_CHANGE':
                return {
                    ...state,
                    isAndSearch: action.payload.checked,
                };
            case 'FLIP_CARD':
                return {
                    ...state,
                    isFlipped: !state.isFlipped,
                };
            case 'PREV_CARD':
                let updatedCount = state.cardCounter

                if (updatedCount === 0) {
                    updatedCount = (state.cocktails?.length ?? 1) - 1
                } else {
                    updatedCount = (state.cardCounter ?? 1) - 1
                }

                const currentCard = state.cocktails && state.cocktails[updatedCount]

                return {
                    ...state,
                    cardCounter: updatedCount,
                    currentCard
                };
            case 'NEXT_CARD':
                let updatedNextCount = state.cardCounter ?? 0

                if (updatedNextCount >= (state.cocktails?.length ?? 1) - 1) {
                    updatedNextCount = 0
                } else {
                    updatedNextCount = (state.cardCounter ?? 0) + 1
                }

                const nextCard = state.cocktails && state.cocktails[updatedNextCount]

                return {
                    ...state,
                    cardCounter: updatedNextCount,
                    currentCard: nextCard
                };
            default:
                console.log("Action error:", action)
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const getExternalResults = async (terms: string) => {
        if (terms === "") {
            return state.allCocktails
        }
        const tokenizedTerms = terms.split(" ")
        const allSearchResults = tokenizedTerms.map((term: string) => {
            return externalCocktailClient.search(term)
        })

        return Promise.all(allSearchResults).then((allResults) => {
            const flatResults = [].concat(...allResults)

            return flatResults
        })

    }

    const dedupArr = (arr: SanityCocktailType[]) => {
        return arr.filter((c, index) => {
            return arr.indexOf(c) === index;
        });
    }

    const searchAppCocktails = async (terms: string) => {
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


    // const {
    //     data,
    //     isLoading,
    //     refetch
    // } = useQuery(
    //     ["search-cocktails-by-criteria", state.searchString, state.searchFilters],
    //     apiClient.getProduct
    // );
    //
    //
    //
    //
    // React.useEffect(() => {
    //     console.log("Fetched searched and filtered cocktails", data, state)
    //     if (data) {
    //         dispatch({type: "INITIAL", payload: {allCocktails: data}})
    //     }
    // }, [data])

    const submitSearch = async (terms?: string) => {
        if (terms && terms.length > 0) {
            const appResults = await searchAppCocktails(terms)
            const externalResults: any[] | undefined = await getExternalResults(terms)

            console.log(externalResults)
            dispatch({
                type: "UPDATE_SEARCH_RESULTS",
                payload: {
                    cocktails: appResults,
                    additionalResults: externalResults && externalResults[0].drinks,
                    searchString: terms
                }
            })
        } else if (!terms || (terms && terms.length === 0)) {
            dispatch({type: "RESET_SEARCH_RESULTS"})

        }
    }


    // const getUniqueTagsFromResults = (searchResults: SanityCocktailType[]) => {
    //     const tagCategories = searchResults.reduce((accumulated: string[], productResult: SanityCocktailType) => {
    //         console.log(productResult)
    //         const newTags = accumulated
    //
    //         // TODO: Add tags to Sanity cocktail schema
    //         // productResult.tags?.forEach((tag:string) => {
    //         //     newTags.push(tag)
    //         // })
    //         return newTags
    //     }, [])
    //
    //     //de-dup the genres
    //     const uniqueGenres: Set<string> = new Set(tagCategories)
    //
    //     return uniqueGenres
    // }

    //update the search when the user changes the string
    React.useEffect(() => {
        console.log("Redoing query for cocktails", state)
        apiClient.getProduct(state.searchString, state.searchFilters ?? [], state.ingredientFilters ??[], state.isAndSearch).then((results) => {
            console.log("done query for cocktails", results)
            dispatch({type: "UPDATE_SEARCH_RESULTS", payload: {cocktails: results}})
        })
    }, [state.searchString, state.searchFilters, state.ingredientFilters, state.isAndSearch])

    const location = useLocation()

    const addFilter = (newFilter: string) => {
        // if it's non alcoholic
        let isNonAlcoholic = false
        if (newFilter === BOOLEAN_FILTERS.IS_NON_ALCOHOLIC) {
            isNonAlcoholic = true
        }

        if (!state.searchFilters?.includes(newFilter))
            dispatch({
                type: "ADD_SEARCH_FILTER",
                payload: {searchFilterToAdd: newFilter, isNonAlcoholic: isNonAlcoholic}
            })
    }
    const removeFilter = (filterToRemove?: string) => {
        let isNonAlcoholic = false

        if (filterToRemove === BOOLEAN_FILTERS.IS_NON_ALCOHOLIC) {
            isNonAlcoholic = false
        }
        if (filterToRemove)
            dispatch({
                type: "REMOVE_SEARCH_FILTER",
                payload: {filterToRemove: filterToRemove, isNonAlcoholic: isNonAlcoholic}
            })
    }
    const addIngredientFilter = (newFilter: string) => {
        console.log("adding to", newFilter, state.ingredientFilters)
        if (!state.ingredientFilters?.includes(newFilter))
            dispatch({
                type: "ADD_INGREDIENT_FILTER",
                payload: {ingredientFilterToAdd: newFilter}
            })
    }
    const removeIngredientFilter = (filterToRemove?: string) => {
        console.log("removing", filterToRemove)

        if (filterToRemove)
            dispatch({
                type: "REMOVE_INGREDIENT_FILTER",
                payload: {filterToRemove: filterToRemove}
            })
    }

    // const [filteredCocktails, setFilteredCocktails] = React.useState<SanityCocktailType[] | undefined>([])

    // const newlyFilteredResults = apiClient.useFetchFilteredCocktails()

    // React.useEffect(() => {
    //     if (newlyFilteredResults.data) {
    //
    //         const remainingCocktails = state.cocktails?.filter((cocktail: SanityCocktailType) => {
    //             const foundCocktailInFiltered = newlyFilteredResults.data.find((filteredResult: SanityCocktailType) => {
    //                 if (filteredResult._id === cocktail._id) {
    //                     return true
    //                 }
    //                 return false
    //             })
    //
    //             if (foundCocktailInFiltered) return true
    //             return false
    //         })
    //
    //         if (remainingCocktails) {
    //             console.log("remaining", remainingCocktails)
    //             dispatch({type: 'FILTER_RESULTS', payload: {filteredCocktails: remainingCocktails}})
    //         } else {
    //             console.log("state.cocktails", state.cocktails)
    //             dispatch({type: 'FILTER_RESULTS', payload: {filteredCocktails: state.cocktails}})
    //         }
    //     }
    // }, [newlyFilteredResults.data])


    // React.useEffect(() => {
    //     console.log("Search filters changed", state.searchFilters)
    //     refetch()
    // }, [state.searchFilters])

    React.useEffect(() => {
        if (state.cardCounter && state.cocktails && state.cocktails[state.cardCounter])
            state.cardCounter && firebaseAnalyticsClient.analyticsPageView(
                location.pathname,
                location.search,
                `${state.cocktails[state.cardCounter].title} | Cocktail`,
            );
    }, [state.cardCounter])

    const nextCard = async () => {
        return dispatch({type: "NEXT_CARD"})
    }

    const prevCard = async () => {
        return dispatch({type: "PREV_CARD"})
    }

    const handleFlip = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch({type: "FLIP_CARD"})
    }

    const isIngredientIncluded = (ingredient: SanityCocktailIngredient) => {
        const foundIngredient = state.ingredientFilters?.find((currentIngredient: string) => {
            console.log(currentIngredient, ingredient._id)
            if (currentIngredient === ingredient._id) {
                return true
            }
            return false
        })
        if (foundIngredient) {
            return true
        }
        return false
    }
const isFilterIncluded = (filter: string) => {
        const foundFilter = state.searchFilters?.find((currentFilter: string) => {
            console.log(currentFilter, filter)
            if (currentFilter === filter) {
                return true
            }
            return false
        })
        if (foundFilter) {
            return true
        }
        return false
    }

    const handleIsAndSearchChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "HANDLE_AND_SEARCH_CHANGE", payload: {checked: event.target.checked}})
    }

    return (
        <SearchContext.Provider value={
            {
                searchString: state.searchString,
                searchResults: state.cocktails,
                additionalResults: state.additionalResults,
                tagFilters: state.tagFilters,
                ingredientFilters: state.ingredientFilters,
                isIngredientIncluded,
                isFlipped: state.isFlipped,
                isFilterIncluded,
                nextCard,
                prevCard,
                currentCard: state.currentCard,
                cardCounter: state.cardCounter,
                handleFlip,
                searchFilters: state.searchFilters,
                addFilter,
                removeFilter,
                isNonAlcoholic: state.isNonAlcoholic,
                loading: state.loading,
                submitSearch,
                addIngredientFilter,
                removeIngredientFilter,
                isAndSearch: state.isAndSearch,
                handleIsAndSearchChange
            }
        }>
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
