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
    leadName?: string,
    leadPhone?: string,
    leadMessage?: string,
    source?: string
}

export type SanityTransformHwHomePage = {
    status?: number
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
    _type: string
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

export type SanityDrinkGetReqParamsType = {
    drinkSlug: string
}

export type SanityGlass = {
    title: string,
    sizeOz: number,
    rim: string,
    isIced: boolean,
    imageSrc: SanityImageAsset,
}

export type SanityCocktailIngredient = {
    title: string,
    product: string,
    isLiquor: boolean,
    isCordial: boolean,
    isJuice: boolean
}

// export type SanityCocktailIngredientContainer ={
//   amount: string,
//   ingredient: SanityCocktailIngredient,
// }

export type SanityMixingGlass = {
    _type: "MixingGlass"
    amount: number,
    ingredient: SanityCocktailIngredient,
}

export type SanityGarnish = {
    _type: "Garnish",
    title: string,
    imageSrc: SanityImageAsset
}
export type SanityMixingInstruction = {
    title: string,
    tool: string
    action: string
    instruction: string
    mixingGlass: (SanityMixingGlass)[],
    mixingGlassGarnishes: (SanityGarnish)[],
}

export type SanityCocktailType = {
    title: string,
    slug: SanitySlug,
    description: string,
    imageSrc: SanityImageAsset,
    glassPrep: string[],
    glass: SanityGlass,
    garnish: SanityGarnish[],
    mixingGlass: (SanityMixingGlass)[],
    mixingGlassGarnishes: (SanityGarnish)[],
    instructions: SanityMixingInstruction[],
    drinkCount: number,
    isOnMenu: boolean
}

export type CocktailDbResultType = {
    [key:string]:any,
    "idDrink": string,
    "strDrink": string,
    "strDrinkAlternate": string,
    "strTags": string, // comma separated string
    "strVideo": string,
    "strCategory": string,
    "strIBA": string,
    "strAlcoholic": string,
    "strGlass": string,
    "strInstructions": string,
    "strDrinkThumb": string,
    "strIngredient1": string,
    "strIngredient2": string,
    "strIngredient3": string,
    "strIngredient4": string,
    "strIngredient5": string,
    "strIngredient6": string,
    "strIngredient7": string,
    "strIngredient8": string,
    "strIngredient9": string,
    "strIngredient10": string,
    "strIngredient11": string,
    "strIngredient12": string,
    "strIngredient13": string,
    "strIngredient14": string,
    "strIngredient15": string,
    "strMeasure1": string, // fraction formatted string with oz string
    "strMeasure2": string,// fraction formatted string with oz string
    "strMeasure3": string,// fraction formatted string with oz string
    "strMeasure4": string,
    "strMeasure5": string,
    "strMeasure6": string,
    "strMeasure7": string,
    "strMeasure8": string,
    "strMeasure9": string,
    "strMeasure10": string,
    "strMeasure11": string,
    "strMeasure12": string,
    "strMeasure13": string,
    "strMeasure14": string,
    "strMeasure15": string,
    "strImageSource": string,
    "strImageAttribution": string,
    "strCreativeCommonsConfirmed": string, // yes or no
    "dateModified": Date
}