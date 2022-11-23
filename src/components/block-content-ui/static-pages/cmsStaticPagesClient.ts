import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../../sanityClient'
import {SanityImageAsset, SanityImageSource} from "@sanity/asset-utils";
import {SanityMenuGroup, SanitySlug} from "../../../common/sanityIo/Types";

const builder = imageUrlBuilder(sanityClient)

export type SanityHomePage = {
  slug?: SanitySlug,
  heroImage?: SanityHeroImageWithText,
  introduction?: string
  specializationsMenuGroup?: SanityMenuGroup,
  weWorkWithSection?: SanityWeWorkWith,
  ourServicesSection?: SanityOurServices,
  solutions?: SanitySolutions
}

export type SanitySolutions = {
  sectionHeader?: string,
  solutionList?: ListItemType[]
}

export type SanityWeWorkWith = {
  title?: string,
  sectionHeader?: string,
  description?: string,
  companyPartnerLogos?: SanityImageAssetProj[]
}

export type ListItemType = {
  title?: string,
  description?: string
}

export type SanityOurServices = {
  title?: string,
  sectionHeader?: string,
  serviceList?: ListItemType[]
}

export type SanityGradient = {
  color1?: { title: string, value: string }
  color2?: { title: string, value: string }
}

export type SanityHeroImageWithText = {
  slug?: SanitySlug
  mainImage?: SanityImageAsset
  gradient?: SanityGradient
}

export type SanitySimpleHeroImage = {
  slug?: SanitySlug
  text?: string
  mainImage?: SanityImageAsset
  gradient?: SanityGradient
}

export type SanityBrandQuoteItem = {
  title?: string
  description?: string
  image?: SanityImageAsset
}

export type SanityOurStoryPage = {
  slug?: SanitySlug
  titleText?: string
  mainImage?: SanityImageAsset
  gradient?: SanityGradient
  introduction?: string
  storyStartTitle?: string
  storyStartLeft1?: string
  storyStartLeft2?: string
  storyStartLeft3?: string
  storyStartRightImage?: SanityImageAsset
  brandQuotesTitle?: string
  brandQuotesList?: SanityBrandQuoteItem[]
  howWeGrowBrandsTitle?: string
  howWeGrowBrandsContent?: string
}

export type SanityCommunityPage = {
  slug?: SanitySlug
  titleText?: string
  mainImage?: SanityImageAsset
  gradient?: SanityGradient
  introduction?: string
  howWeGrowBrandsTitle?: string
  howWeGrowBrandsContent?: string
  weWorkWithSection?: SanityWeWorkWith,
  callToAction?: string
}

export type SanityImageAssetProj = {
  title?: string
  slug?: SanitySlug
  mainImage?: SanityImageSource
  caption?: string
}

export type SanityImageCarousel = {
  title?: string
  slug?: SanitySlug
  images?: SanityImageAssetProj[]
}

export type SanityStaticPage = {
  title?: string
  slug?: SanitySlug
  body?: string
}

export type SanityEvergreenPage = {
  mainImage?: SanityImageAsset
  title?: string
  pageContent?: any
}

const fetchHomePage = (): Promise<SanityHomePage> => {
  return sanityClient
    .fetch(
      `*[_type=="abHomePage" && slug.current == "home"]{
          slug,
          heroImage->{
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            gradient
          },
          introduction,
          specializationsMenuGroup->{
            menuGroupTitle,
            links[] -> {displayText, url}
          },
          weWorkWithSection {
            title,
            sectionHeader,
            description,
            companyPartnerLogos[]{
              asset->{
                _id,
                url
              }
            }
          },
          ourServicesSection {
            title,
            sectionHeader,
            serviceList[]{
              title,
              description
            }
          },
          solutions {
            sectionHeader,
            solutionList[] {
              title,
              description
            }
          }
       }[0]`,
    ).then((data: SanityHomePage) => {
      return data
    })
}

const fetchCommunityPage = (): Promise<SanityCommunityPage> => {
  return sanityClient
    .fetch(
      `*[_type=="communityPage" && slug.current == "community"]{
          slug,
          titleText,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          gradient,
          introduction,
          howWeGrowBrandsTitle,
          howWeGrowBrandsContent{
            content
          },
          weWorkWithSection {
            title,
            sectionHeader,
            description,
            companyPartnerLogos[]{
              asset->{
                _id,
                url
              }
            }
          },
          callToAction
       }[0]`,
    ).then((data: SanityCommunityPage) => {
      return data
    })
}


const fetchOurStoryPage = (): Promise<SanityOurStoryPage> => {
  return sanityClient
    .fetch(
      `*[_type=="ourStoryPage" && slug.current == "our-story"]{
          slug,
          titleText,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          gradient,
          introduction,
          storyStartTitle,
          storyStartLeft1,
          storyStartLeft2,
          storyStartLeft3,
          storyStartRightImage{
              asset->{
                _id,
                url
              }
            },
          brandQuotesTitle,
          brandQuotesList[]{
            title,
            description,
            image{
              asset->{
                _id,
                url
              }
            }
          },
          howWeGrowBrandsTitle,
          howWeGrowBrandsContent{
            content
          }
       }[0]`,
    ).then((data: SanityOurStoryPage) => {
      return data
    })
}

const fetchHomePageSpecializationsMenu = (): Promise<SanityMenuGroup> => {
  return sanityClient
    .fetch(
      `*[_type=="menuGroup" && slug.current == 'specializations']{
          slug,
          displayText,
         "links": links[]->{displayText, url}
       }[0]`,
    )
    .then((data: SanityMenuGroup) => {
      return data
    })
}

const fetchImageCarousel = (slug: string): Promise<SanityImageCarousel> => {
  return sanityClient
    .fetch(
      `*[_type=="imageCarousel" && slug.current == $slug]{
          title,
          slug,
          images[] -> { title, mainImage{
            asset->{
              _id,
              url
             }
           }}
       }[0]`,
      {slug},
    ).then((data: SanityImageCarousel) => {
      return data
    })
}

const fetchEvergreenPage = (slug: string): Promise<SanityEvergreenPage> => {
  return sanityClient
    .fetch(
      `*[_type=="abEvergreenPage" && slug.current == $slug]{
          title,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          pageContent {
            content
          }
       }[0]`,
      {slug},
    ).then((data: SanityEvergreenPage) => {
      return data
    })
}

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

// const sanityCredentials = {projectId: "", dataset: "production"}
//
// export const metaDataFor = (source: any)=>{
//   console.log("get metaDataFor", source)
//   const step:any = getImageAsset(source, sanityCredentials)
//
//
//   // console.log("got metaDataFor", step)
//   // console.log("docId metaDataFor", docId)
//   //
//   //
//   // return step.toString()
//   return sanityClient
//     .getDocument(step.assetId).then((data: any) => {
//       console.log("metadataFor", data, step.assetId)
//       return data
//     })
// }

export default {
  fetchHomePage,
  fetchOurStoryPage,
  fetchCommunityPage,
  fetchHomePageSpecializationsMenu,
  urlFor,
  fetchImageCarousel,
  fetchEvergreenPage,
}