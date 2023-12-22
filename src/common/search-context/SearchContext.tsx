import React from 'react';
import {CocktailDbResultType, SanityCocktailIngredient, SanityCocktailType} from "../sanityIo/Types";

/*
    Context to store changes in the search state.

    searchString - current string that search applies to
    setSearchString - change the search string and update search
    searchResults - the raw results from the search
    genreFilters - The unique list of Genres from the results list
 */
export type SearchContextType = {
    searchString?: string
    loading?: boolean
    submitSearch?: (searchString?: string) => any
    searchResults?: SanityCocktailType[]
    additionalResults?: CocktailDbResultType[]
    tagFilters?: string[]
    ingredientFilters?: string[]
    isIngredientIncluded?: (ingredient: SanityCocktailIngredient)=>boolean,
    isFilterIncluded?: (filter: string)=>boolean,
    addFilter?: (newFilter:string)=> void
    removeFilter?: (filterToRemove?:string)=>void
    addIngredientFilter?: (newFilter:string)=> void
    removeIngredientFilter?: (filterToRemove?:string)=>void
    searchFilters?:string[]
    isNonAlcoholic?: boolean
    nextCard?: ()=>void,
    prevCard?: ()=> void,
    getCurrentCard?: ()=> SanityCocktailType|undefined,
    currentCard?: SanityCocktailType,
    cardCounter?: number,
    isFlipped?:boolean,
    handleFlip?: (e: React.SyntheticEvent)=>void,
    isAndSearch?: boolean
    handleIsAndSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) =>void
};

const SearchContext = React.createContext<SearchContextType>({});

export default SearchContext;
