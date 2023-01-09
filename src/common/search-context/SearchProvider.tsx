import React, {FunctionComponent, PropsWithChildren, useReducer,} from 'react';
import SearchContext from "./SearchContext";
import externalCocktailClient from "../../components/bartender/search-box/ExternalCocktailClient";
import {CocktailDbResultType, SanityCocktailType} from "../sanityIo/Types";
import apiClient from "../../components/transform-hw/apiClient";

type IProps = {};

type SearchStateType = {
    cocktails?: SanityCocktailType[]
    allCocktails?: SanityCocktailType[]
    additionalResults?: CocktailDbResultType[]
    cardCount?: number
    searchString?: string
    loading?: boolean
};

const initialState: SearchStateType = {
    cocktails: [],
    allCocktails: [],
    additionalResults: [],
    cardCount: 0,
    loading: false,
    searchString: ""
};

enum BOOLEAN_FILTERS {
    IS_NON_ALCOHOLIC = "non-alcholic",
}

const reducer = (state: any, action: any): SearchStateType => {
    switch (action.type) {
        case 'INITIAL':
            return initialState;
        case 'START_SEARCH':
            return {
                ...state,
                loading: true,
                searchString: "",
                cocktails: [],
                currentCard: action.payload.allCocktails[0],
                cardCount: 0
            };
            ;
        case 'SET_COCKTAILS':
            return {
                ...state,
                loading: false,
                cocktails: [...action.payload.cocktails],
                allCocktails: [...action.payload.cocktails],
                currentCard: action.payload.cocktails[0],
                cardCount: 0
            };
        case 'UPDATE_SEARCH_RESULTS':
            return {
                ...state,
                cocktails: [...action.payload.cocktails],
                loading: false,
                additionalResults: [...action.payload.additionalResults],
                cardCount: 0,
                searchString: action.payload.searchString
            };
        case 'RESET_SEARCH_RESULTS':
            return {
                ...state,
                searchString: "",
                loading: false,
                cocktails: [...state.allCocktails],
                additionalResults: [],
                cardCount: 0
            };
        default:
            throw new Error();
    }
}

const SearchProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // search string
    // const [searchString, setSearchString] = React.useState<string>("")
    // the raw search resutls
    // const [searchResults, setSearchResults] = React.useState<SanityCocktailType[]>([])
    // unique tags from search results
    const [tagFilters, setTagFilters] = React.useState<string[]>([])

    // const [loading, setLoading] = React.useState<boolean>()


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


    const {data, isLoading} = apiClient.useFetchAllFlashCards()

    React.useEffect(() => {
        if (data && data !== state.allCocktails) {
            dispatch({type: "SET_COCKTAILS", payload: {cocktails: data}})
        }
    }, [data])

    const submitSearch = async (terms?: string) => {
        if (terms && terms.length > 0) {
            const appResults = await searchAppCocktails(terms)
            const externalResults: any[] | undefined = await getExternalResults(terms)

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
    // React.useEffect(() => {
    //
    //     // setLoading(true)
    //     // setSearchResults([])
    //     if (state.searchString && state.searchString.length > 0) {
    //         searchClient.search(state.searchString).then((results: SanityCocktailType[]) => {
    //             //Get all the genres from the results
    //
    //             //de-dup the genres
    //             const uniqueGenres: Set<string> = getUniqueTagsFromResults(results)
    //             setTagFilters(Array.from(uniqueGenres))
    //             setSearchResults(results)
    //             setSearchFilters([])
    //             setLoading(false)
    //         }).catch((err: Error) => {
    //             console.error(err)
    //             setLoading(false)
    //             setSearchResults([])
    //             setSearchFilters([])
    //             setTagFilters([])
    //         })
    //     } else {
    //         setLoading(false)
    //         setSearchResults([])
    //         setSearchFilters([])
    //         setTagFilters([])
    //     }
    // }, [state.searchString])

    const [searchFilters, setSearchFilters] = React.useState<string[]>([])
    const [isNonAlcoholic, setIsNonAlcoholic] = React.useState<boolean>()

    const addFilter = (newFilter: string) => {
        // if it's non alcoholic
        if (newFilter === BOOLEAN_FILTERS.IS_NON_ALCOHOLIC) {
            setIsNonAlcoholic(true)
        }

        if (!searchFilters.includes(newFilter))
            setSearchFilters(state => state.concat(newFilter))
    }
    const removeFilter = (filterToRemove?: string) => {
        if (filterToRemove === BOOLEAN_FILTERS.IS_NON_ALCOHOLIC) {
            setIsNonAlcoholic(false)
        }
        if (filterToRemove)
            setSearchFilters((state: string[]) => {
                return state.filter((searchFilter) => {
                    if (searchFilter === filterToRemove)
                        return false
                    return true
                })
            })
    }

    const [filteredCocktails, setFilteredCocktails] = React.useState<SanityCocktailType[] | undefined>([])

    const newlyFilteredResults = apiClient.useFetchFilteredCocktails()

    React.useEffect(() => {
        if (newlyFilteredResults.data) {

            const remainingCocktails = state.cocktails?.filter((cocktail: SanityCocktailType) => {
                const foundCocktailInFiltered = newlyFilteredResults.data.find((filteredResult: SanityCocktailType) => {
                    if (filteredResult._id === cocktail._id) {
                        return true
                    }
                    return false
                })

                if (foundCocktailInFiltered) return true
                return false
            })

            if (remainingCocktails)
                setFilteredCocktails(remainingCocktails)
            else
                setFilteredCocktails(state.cocktails)
        }
    }, [newlyFilteredResults.data])

    return (
        <SearchContext.Provider value={
            {
                searchString: state.searchString,
                searchResults: state.cocktails,
                additionalResults: state.additionalResults,
                tagFilters,
                searchFilters,
                addFilter,
                removeFilter,
                isNonAlcoholic,
                loading: isLoading || state.loading,
                filteredCocktails,
                submitSearch,
            }
        }>
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
