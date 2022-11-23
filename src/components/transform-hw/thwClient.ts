import {useQuery} from "react-query";
import sanityClient from "../../sanityClient";
import groqQueries from "../../utils/groqQueries";
import {redirect} from "react-router";
import {RoutesEnum} from "../../App";
import {useParams} from "react-router-dom";
import GroqQueries from "../../utils/groqQueries";
import {SanityMenuContainer} from "../../common/sanityIo/Types";

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

export default {useFetchPageBySlugQuery, useFetchMenuBySlugQuery}