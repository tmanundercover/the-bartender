import {Grid, Typography} from '@material-ui/core'
import React from 'react'
import {useCommonStyles} from './CommonStyles'
import {
  BoldRender,
  CenterRender,
  DropCapRender,
  HighlightRender,
  LargeBodyTextRender,
  LightRender,
  NormalRender,
  TextColorRender,
  TypographyRender,
  UnderlineRender,
} from './BlockContentMarkRenderers'
import BlockContent from '@sanity/block-content-to-react'
import {ListItemRender, ListRender, UtmLinkRender} from './BlockContentAnnotations'
import {urlFor} from '../../static-pages/cmsStaticPagesClient'
import {TypographyVariantType} from '../../../../common/sanityIo/BlockContentMarkRenderers'
import {SanityImageSource} from "@sanity/asset-utils";
import BartenderTheme from "../../../../theme/transform-hw/BartenderTheme";

export type HeaderVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type LinkType = { href: string, isAddUtm: boolean, color: { title: string, value: string } }

export type BlockPropsType = { _type: string, listItem?: string, level?: number }
export type BlockContentPropsType<T> = { mark?: T }

export const HeaderRender = (props: any, variant: HeaderVariantType) => {
  const classes = useCommonStyles(BartenderTheme)

  const wrapWithHTag = (children: any) => {
    switch (variant) {
      case 'h1':
        return <h1>{children}</h1>
        break
      case 'h6':
        return <h6>{children}</h6>
        break
      case 'h2':
        return <h2>{children}</h2>
        break
      case 'h3':
        return <h3>{children}</h3>
        break
      case 'h4':
        return <h4>{children}</h4>
        break
      case 'h5':
        return <h5>{children}</h5>
        break
      default:
        return <Typography display='inline'  className={classes.headerRender} color="inherit" variant={variant as TypographyVariantType}
                           component="span">{children}</Typography>
    }

  }

  return wrapWithHTag(props.children)
}

export const ImageAssetRender = (image?: SanityImageSource, caption?: string, className?: any) => {
  return image ?
    <figure style={{overflow: 'hidden'}}>
      <img className={className ?? ''} src={urlFor(image).url() ?? ''}/>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
    : <></>
}

export const HrRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(BartenderTheme)

  return <Grid container item>
    <hr className={classes.hr}/>
  </Grid>
}

export const BlockContainerRender: React.FunctionComponent = (props: React.PropsWithChildren<{}>) => {
  const classes = useCommonStyles(BartenderTheme)
  return <Typography className={classes.preFormattedText} component="span"
                     style={{...BartenderTheme.typography.body1}}>{props.children}</Typography>
}

export const abBlockSerializers: any = {
  list: ListRender,
  listItem: ListItemRender,
  types: {
    block: (props: any) => {
      switch (props.node.style as string) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return HeaderRender(props, props.node.style as HeaderVariantType)
        case 'normal':
          return NormalRender(props)
        default:
          //@ts-ignore
          return BlockContent.defaultSerializers.types.block(props)
      }
    },
    image: (props: any) => {
      return <figure style={{overflow: 'hidden'}}><img src={urlFor(props.node).url() ?? ''}/></figure>
    },
    lineBreak: (props: any) => {
      const {style} = props.node
      if (style === 'horizontalRule') {
        return <HrRender/>
      }
      return null
    },
    imageAsset: (props: any) => {
      return ImageAssetRender(props.node.mainImage, props.node.caption)
    },
  },
  marks: {
    light: LightRender,
    dropCap: DropCapRender,
    primaryTextColor: (props: any) => (TextColorRender(props, BartenderTheme.palette.primary.main)),
    secondaryTextColor: (props: any) => (TextColorRender(props, BartenderTheme.palette.secondary.main)),
    accentTextBlue: (props: any) => (TextColorRender(props, '#565190')),
    accentTextGreen: (props: any) => (TextColorRender(props, '#5C7F61')),
    underlinePrimaryColor: (props: any) => (UnderlineRender(props, BartenderTheme.palette.primary.main)),
    utmLink: UtmLinkRender,
    bold: BoldRender,
    subtitle: (props: any) => TypographyRender(props, 'subtitle1'),
    overline: (props: any) => TypographyRender(props, 'overline'),
    largeBodyText: (props: any) => LargeBodyTextRender(props),
    centerAlign: CenterRender,
    backgroundHighlightPeach: (props: any) => HighlightRender(props, BartenderTheme.palette.background.default),
  },
  container: BlockContainerRender,
}


export default {
  HeaderRender,
  BlockContainerRender,
}
