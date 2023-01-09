import {useQuery} from "react-query";
import sanityClient from "../../sanityClient";
import groqQueries from "../../utils/groqQueries";
import {redirect} from "react-router";
import {useParams} from "react-router-dom";
import GroqQueries from "../../utils/groqQueries";
import {
    SanityCocktailIngredient,
    SanityCocktailType,
    SanityLiquorType,
    SanityMenuContainer
} from "../../common/sanityIo/Types";
import {RoutesEnum} from "../../RoutesEnum";
import {useContext} from "react";
import SearchContext from "../../common/search-context/SearchContext";

const useFetchPageBySlugQuery = () => {
    const urlParams: { pageSlug?: string } = useParams()

    return useQuery(
        ['fetchPageBySlug'],
        async () => {
            const pageSlug = urlParams.pageSlug
            if (pageSlug) {
                return sanityClient
                    .fetch(
                        `*[slug.current == $pageSlug]{
          ${groqQueries.HOMEPAGE}
       }`, {pageSlug})
                    .then((result) => {
                        if (result.length === 0) {
                            redirect(RoutesEnum.ERROR)
                        }
                        return result
                    }).catch(() => {
                        redirect(RoutesEnum.ERROR)
                    })
            } else {
                redirect(RoutesEnum.COMING_SOON)
            }
        }
    );
}
const useFetchMenuBySlugQuery = (menuSlug: string) => {
    console.log("fetching menu with slug", menuSlug)
    return useQuery(
        [menuSlug],
        () => {
            return sanityClient
                .fetch(
                    `*[slug.current == $menuSlug]{
          ${GroqQueries.MENUGROUPCONTAINER}
       }`, {menuSlug: menuSlug ?? 'header-menu'}
                )
                .then((data: SanityMenuContainer[]) => {
                    return data[0]
                })
        }
    );
}

const useFetchAllCocktails = () => {
    console.log("fetching cocktails", )
    return useQuery(
        ["all-cocktails"],
        () => {
            return sanityClient
                .fetch(
                    `*[_type == "Cocktail"]{
          ${GroqQueries.COCKTAIL}
       }`,)
                .then((data: SanityCocktailType[]) => {
                    return data
                })
        }
    );
}

const useFetchAllBarIngredients = () => {
    console.log("fetching bar ingredients", )
    return useQuery(
        ["all-bar-ingredients"],
        () => {
            return sanityClient
                .fetch(
                    `*[_type == "Ingredient"]{
          ${GroqQueries.INGREDIENT}
       }`,)
                .then((data: SanityCocktailIngredient[]) => {
                    return data
                })
        }
    );
}

const useFetchAllLiquorTypes = () => {
    console.log("fetching liquor types", )
    return useQuery(
        ["all-liquor-types"],
        () => {
            return sanityClient
                .fetch(
                    `*[_type == "LiquorType"]{
          ${GroqQueries.INGREDIENT}
       }`,)
                .then((data: SanityLiquorType[]) => {
                    return data
                })
        }
    );
}
const useFetchFilteredIngredients = () => {
    const searchContext = useContext(SearchContext)

    const liquorTypes = searchContext.searchFilters
    console.log("fetching ingredients filtered by liquor type ", liquorTypes)

    return useQuery(
        ["filter-bar-ingredients-by-liq-type"],
        () => {
            if(liquorTypes && liquorTypes.length > 0 )
                return sanityClient
                    .fetch(
                        `*[_type == "Ingredient" && references($liquorTypeId)]{
              ${GroqQueries.INGREDIENT}
           }`,{
                            liquorTypeId:liquorTypes
                        })
                    .then((data: SanityCocktailIngredient[]) => {
                        return data
                    })

            return sanityClient
                .fetch(
                    `*[_type == "Ingredient"]{
              ${GroqQueries.INGREDIENT}
           }`,{
                        liquorTypeId:liquorTypes
                    })
                .then((data: SanityCocktailIngredient[]) => {
                    return data
                })
        }
    );
}
const useFetchFilteredCocktails = () => {
    const searchContext = useContext(SearchContext)

    const liquorTypes = searchContext.searchFilters

    // include the search string in the search

    return useQuery(
        ["filter-bar-ingredients-by-liq-type"],
        () => {
    console.log("fetching cocktails filtered by liquor type ", liquorTypes)
            if(liquorTypes !== undefined && liquorTypes.length > 0 )
                return sanityClient
                    .fetch(
                        `*[_type == "Cocktail" && references($liquorTypeId)]{
              ${GroqQueries.COCKTAIL}
           }`,{
                            liquorTypeId:liquorTypes
                        })
                    .then((data: SanityCocktailType[]) => {
                        return data
                    })

            return sanityClient
                .fetch(
                    `*[_type == "Cocktail"]{
              ${GroqQueries.COCKTAIL}
           }`,{
                        liquorTypeId:liquorTypes
                    })
                .then((data: SanityCocktailType[]) => {
                    return data
                })
        }
    );
}
//
// const fetchLandingPageFooterMenu = (footerSlug?: string): Promise<SanityMenuContainer> => {
//     const slug = footerSlug ?? 'footer-menu'
//
//     return sanityClient
//         .fetch(
//             `*[_type=="menuContainer" && slug.current == $slug]{
//           ${GroqQueries.MENUGROUPCONTAINER}
//        }`, {slug}
//         )
//         .then((data: SanityMenuContainer[]) => {
//             return data[0]
//         })
// }

export default {useFetchPageBySlugQuery, useFetchMenuBySlugQuery, useFetchAllFlashCards: useFetchAllCocktails, useFetchAllBarIngredients, useFetchAllLiquorTypes, useFetchFilteredIngredients, useFetchFilteredCocktails}