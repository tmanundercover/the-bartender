import {SanityImageSource} from "@sanity/asset-utils";
import {SanityRef, SanitySlug} from "../common/sanityIo/Types";

export type HeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground: SanityImageAsset
    contentTitle: string
    contentBullets: string[]
    ctaButtonTitle: string
    ctaButtonLink: string
}


export type AboutAndaCardSectionType = {
    name: string
    title: string
    cardImage: SanityImageAsset
    cardImageAltText: string
    cardImageBackground: SanityImageAsset
    contentTitle: string
    contentLeft: string
    contentRight: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type WhySwitchReasonType = {
    icon: SanityImageAsset
    iconAlt: string
    text: string
}

export type WhySwitchSectionType = {
    _id:string
    imageSrc: SanityImageAsset
    imageAlt: string
    reasons: WhySwitchReasonType[]
}

export type CryptoInYourPocketSectionType = {
    name: string
    title: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    bullets: WhySwitchReasonType[]
    ctaHeader1: string
    ctaText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type SanityImageAsset = SanityImageSource | {
    _type:string,
    asset: {
        _ref:string,
        _type:"reference"
    }
}

// Transform Types
export type ThwHeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground?: SanityImageAsset
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type ThwPositivePsychologySectionType = {
    name: string
    superTitle:string
    contentTitle: string
    contentText: string
    contentBullets: string[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwAboutProprietorSectionType = {
    name: string
    proprietorName:string
    proprietorTitle: string
    contentTitle: string
    contentText: string
    proprietorImage: SanityImageAsset
    proprietorImageAltText: string
    proprietorSignatureImage: SanityImageAsset
    proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwMottoSectionType = {
    name: string
    contentText: string
    parallaxImage: SanityImageAsset
    contentSuperTitle:string
}

export type ThwServiceItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
}


export type ThwServicesSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    servicesList: SanityRef[]
}
export type ThwWhyChooseUsSectionType = {
    name: string
    sectionTitle: string
    prosList: SanityRef[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwWhyChooseUsItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
}

export type ThwContactUsSectionType = {
    name: string
    bgImageSrc: SanityImageAsset
    lhsTitle: string
    lhsContentText: string
    phone?: string
    email?: string,
    facebook?: string,
    twitter?: string,
    linkedIn?: string,
    youtube?: string,
    rhsTitle:string,
    formSubmitButtonText: string
}

// Bartender Types
export type FlashCardSectionType = {
    name: string
    title: string
    slug: SanitySlug
}