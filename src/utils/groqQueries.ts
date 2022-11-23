const HOMEPAGE = `
          title,
          isUnderConstruction,
          releaseDate,
          slug,
          address,
          email,
          phone,
          description,
          metaImage,
          pageContent,
          underConstructionPageRef,
          structuredData,
          facebook,
          facebookIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          twitter,
          twitterIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          instagram,
          instagramIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          }
`
// const MENUGROUP = `
//           title,
//           slug,
//           logoImage,
//           menuGroupTitle,
//           "links": links[]->{title, displayText, url, isOutlinedButton, isContainedButton}
// `

const MENUGROUP = `
          title,
          _type,
          slug,
          menuGroupTitle,
          "links":links[]->{
            _type,
            displayText,
            url,
            isOutlinedButton,
            isContainedButton,
          },
          displayText,
          url,
          isOutlinedButton,
          isContainedButton,
`

const MENUGROUPCONTAINER = `
          title,
          slug,
          displayText,
          "subMenus":subMenus[]->{
            ${MENUGROUP}
          },
          logoImageSrc,
          logoImageAltText
`


const defaultObj = {HOMEPAGE, MENUGROUPCONTAINER, MENUGROUP}


export default defaultObj