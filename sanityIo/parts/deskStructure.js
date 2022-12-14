// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import {createSuperPane} from 'sanity-super-pane'
// eslint-disable-next-line import/no-unresolved
import S from '@sanity/desk-tool/structure-builder'
import {SanitySectionTitlesEnum} from "../schemas/sections/transform-hw/sectionTitles";

export default () =>
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title('Page')
                .child(createSuperPane('homePage', S)),
            S.listItem()
                .title('Cocktail')
                .child(createSuperPane('Cocktail', S)),
            S.listItem()
                .title('Garnish')
                .child(createSuperPane('Garnish', S)),
            S.listItem()
                .title('Glass')
                .child(createSuperPane('Glass', S)),
            S.listItem()
                .title('Ingredient')
                .child(createSuperPane('Ingredient', S)),
            S.listItem()
                .title('Instruction')
                .child(createSuperPane('Instruction', S)),
            S.listItem()
                .title('Menu Container')
                .child(createSuperPane('menuContainer', S)),
            S.listItem()
                .title('Menu Group')
                .child(createSuperPane('menuGroup', S)),
            S.listItem()
                .title('Menu Item')
                .child(createSuperPane('menuItem', S)),
            S.listItem()
                .title('Page Section: Custom 1 column')
                .child(createSuperPane('column1BlockContent', S)),
            S.listItem()
                .title('Page Section: Custom 2 column')
                .child(createSuperPane('column2BlockContent', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.HERO_CONTENT)
                .child(createSuperPane('transformHeroContentSection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.POSITIVE_PSYCHOLOGY)
                .child(createSuperPane('transformPositivePsychologySection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.MOTTO)
                .child(createSuperPane('transformMottoSection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.ABOUT_PROPRIETOR)
                .child(createSuperPane('transformAboutProprietorSection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.SERVICES)
                .child(createSuperPane('transformServicesSection', S)),
            S.listItem()
                .title("THW Service Item")
                .child(createSuperPane('transformServiceItem', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.WHY_CHOOSE_US)
                .child(createSuperPane('transformWhyChooseUsSection', S)),
            S.listItem()
                .title("THW Why Choose Us Item")
                .child(createSuperPane('transformWhyChooseUsItem', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.CONTACT_US)
                .child(createSuperPane('transformContactUsSection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.UNDER_CONSTRUCTION)
                .child(createSuperPane('transformUnderConstructionPage', S)),
            S.listItem()
                .title('Page Section: Hero + Content')
                .child(createSuperPane('heroContentSection', S)),
            S.listItem()
                .title('Page Section: Image + 6 Bullets')
                .child(createSuperPane('whySwitchSection', S)),
            S.listItem()
                .title('Page Section: Pink Image + Content')
                .child(createSuperPane('aboutAndaCardSection', S)),
            S.listItem()
                .title('Page Section: Image + 3 Bullets + Banner w/CTA')
                .child(createSuperPane('cryptoInYourPocketSection', S)),
            S.listItem()
                .title('Structured Data Product')
                .child(createSuperPane('structuredDataProduct', S)),
            S.listItem()
                .title('Structured Data Event')
                .child(createSuperPane('structuredDataEvent', S)),
            S.listItem()
                .title('Cold Lead')
                .child(createSuperPane('coldLead', S)),
            S.listItem()
                .title('Media Tags')
                .child(createSuperPane('media.tag', S))
        ]);
