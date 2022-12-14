import {useQuery} from "react-query";
import sanityClient from "../../sanityClient";
import groqQueries from "../../utils/groqQueries";
import {redirect} from "react-router";
import {useParams} from "react-router-dom";
import GroqQueries from "../../utils/groqQueries";
import {SanityCocktailType, SanityMenuContainer} from "../../common/sanityIo/Types";
import {RoutesEnum} from "../../RoutesEnum";

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

export default {useFetchPageBySlugQuery, useFetchMenuBySlugQuery, useFetchAllFlashCards: useFetchAllCocktails}