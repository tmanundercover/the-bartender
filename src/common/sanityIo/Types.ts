import {SanityImageSource} from "@sanity/asset-utils";
import {SanityImageAsset} from "../../components/BlockContentTypes";
import {Slug} from "@sanity/types";

export type SanitySlug = Slug

export declare type SanityRef = {
  _type: string;
  _ref: string;
  _key?: string;
};


export declare type SanityColdLead = {
  email: string,
  leadName?:string,
  leadPhone?:string,
  leadMessage?:string,
  source?: string
}

export type SanityTransformHwHomePage = {
  title?: string
  description?: string
  imgSrc?: SanityImageSource
  metaImage?: SanityImageSource
  slug?: any
  pageContent?: any
  structuredData?: any
  address?: string
  email?: string
  phone?: string
  facebook?: string
  facebookIconSrc?: SanityImageSource
  twitter?: string
  twitterIconSrc?: SanityImageSource
  instagram?: string
  instagramIconSrc?: SanityImageSource
  androidPlayStoreLink?: string
  androidPlayStoreIconSrc?: string
  appStoreLink?: string
  appStoreIconSrc?: string
  fdicDisclaimer?: string
  fdicImage?: string
  isUnderConstruction?: boolean
  underConstructionPageRef?: SanityRef
}

export type SanityUnderConstructionPageType = {
  name: string
  bgImage: SanityImageAsset
  contentTitle: string
  releaseDate: Date
  contentText: string
  subscribeText: string
  emailFieldText: string
  emailButtonText: string
  footerTextLines: string[]
}

export type SanityBlogCategory = {
  title: string
  description?: string | null
  color: { title: string, value: string }
}

export type SanityLandingPage = {
  welcomeMessage?: string,
  mainImage?: SanityImageAsset,
  headerText?: string,
  body?: string,
  form?: { abFormType: { title: string }, instructionBlock: string },
  utmSource?: string,
  utmMedium?: string,
  utmCampaign?: string
}

export type SanityBlog = {
  title?: string
  slug?: SanitySlug
  mainImage?: SanityImageAsset
  mainImageCaption?: string
  category?: SanityBlogCategory
  body?: string
  _createdAt?: string
}

export type SanityBlogGroup = {
  title?: string
  posts?: SanityBlogPreview[]
}

export type SanityBlogPreview = {
  title?: string
  slug?: SanitySlug
  mainImage?: SanityImageAsset
  mainImageCaption?: string
  category?: SanityBlogCategory
  snippet?: string
  _createdAt?: string
}
//
// export type BlockContentElement = {
//   _key: string
//   children: BlockContentElementChild[]
// }

// export type BlockContentElementChild = {
//   _key: string
//   text?: string
// }

export type SanityMenuItem = {
  _type: string
  title?: string,
  displayText?: string,
  url?: string,
  isContainedButton?: boolean,
  isOutlinedButton?: boolean
}

export type SanityMenuGroup = {
  _type:string
  title?: string,
  slug?: SanitySlug,
  menuGroupTitle?: string,
  links?: SanityMenuItem[],
  logoImage?: any
  displayText?: string
}

export type SanityMenuContainer = {
  title?: string,
  slug?: SanitySlug,
  displayText?: string,
  subMenus?: SanityMenuGroup & SanityMenuItem[]
  logoImageAltText?: string
  logoImageSrc?: SanityImageAsset
}

export type MainMenuAnchorType = 'left' | 'top' | 'right' | 'bottom'