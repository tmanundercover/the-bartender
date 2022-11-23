import {SanitySectionTitlesEnum} from "../sectionTitles";

export default {
    name: 'transformServicesSection',
    title: SanitySectionTitlesEnum.SERVICES,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'contentPreTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Large Title',
            type: 'string',
        },
        {
            name: 'contentText',
            title: 'Content Text',
            type: 'string',
        },
        {
            name: 'servicesList',
            title: 'List Items',
            type: 'array',
            of: [{type: 'reference', to: {type: 'transformServiceItem'}}]
        }
    ]
}



