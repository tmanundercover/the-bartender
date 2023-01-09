import React from 'react';
import {CocktailDbResultType, SanityCocktailType} from "../sanityIo/Types";

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
    addFilter?: (newFilter:string)=> void
    removeFilter?: (filterToRemove?:string)=>void
    searchFilters?:string[]
    filteredCocktails?: SanityCocktailType[]
    isNonAlcoholic?: boolean
};

const SearchContext = React.createContext<SearchContextType>({});

export default SearchContext;
