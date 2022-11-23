import React from 'react'
import {Grid, Link, Typography} from '@material-ui/core'
import {InsertLink, Public} from '@material-ui/icons'
// import dropCapImg from '../static/drop-cap-icon.png'
import {
  BoldRender,
  DropCapRender,
  KeystrokeRender,
  LargeBodyTextRender,
  LightRender,
  TextColorRender,
  TypographyRender,
  UnderlineRender
} from '../../src/common/sanityIo/BlockContentMarkRenderers'
import {ButtonRender, CtaRender, HeaderRender, HrRender} from '../../src/common/sanityIo/BlockContentRenderer'
import {ListRender, UtmLinkRender} from '../../src/common/sanityIo/BlockContentAnnotations'
import TransformHWLayout from "../../src/components/transform-hw/pages/TransformHWLayout";

const highlightIcon = color => {
  console.log("highlightIcon color", color)

  return (<Grid style={{
    width: '24px',
    height: '24px',
    backgroundColor: 'whitesmoke'
  }} container justifyContent='center' alignItems='center'>
    <Grid item style={{
      color: color, width: '32px',
      height: '14px'
    }}>text</Grid>
  </Grid>)
}

const lightIcon = () => {
  return (<Grid container style={{
    width: '24px',
    height: '24px',
    backgroundColor: 'whitesmoke'
  }} justifyContent='center' alignItems='center'>㏈</Grid>)
}

const LargeBodyTextIcon = () => {
  return (<Grid container style={{
    width: '24px',
    height: '24px',
    backgroundColor: 'whitesmoke'
  }} justifyContent='center' alignItems='center'
                style={{fontSize: 'smaller'}}>21px</Grid>)
}

const BoldIcon = () => {
  return (<Grid container style={{
    width: '24px',
    height: '24px',
    backgroundColor: 'whitesmoke'
  }} justifyContent='center' alignItems='center'>𝐇</Grid>)
}

const utmIcon = (props) => {

  return <Grid container style={{
    width: '24px',
    height: '24px',
    backgroundColor: 'whitesmoke'
  }} justifyContent='center' alignItems='center'><Public/></Grid>
}

const internalIcon = (props) => {

  return <Grid container style={{
    width: '24px',
    height: '24px',
    backgroundColor: 'whitesmoke'
  }} justifyContent='center' alignItems='center'><InsertLink/></Grid>
}

const underlineIcon = color => {
  return <Grid container style={{
    width: '24px',
    height: '24px',
    backgroundColor: 'whitesmoke'
  }} justifyContent='center' alignItems='center'>
    <u style={{textDecoration: `${color} underline`}}>U</u>
  </Grid>
}
//
// const dropCapIcon = (props) => {
//   return <Grid container style={{  width: '24px',
//     height: '24px',
//     backgroundColor: 'whitesmoke'}} justifyContent="center" alignItems="center">
//     <img src={dropCapImg} width={28} height={28}/>
//   </Grid>
// }

const internalLinkRender = props => {
  console.log('lik props', props)
  return <Link href={props.href}>
    <Typography
      style={{display: 'inline-block', color: TransformHWLayout.palette.primary.main}}>
      {props.children}
    </Typography>
  </Link>
}

const bodyRender = (props) => (
  <Typography variant='body1' style={{width: '100%'}}>{props.children}</Typography>
)

export const blockContentConfig = {
  title: 'Column 1',
  type: 'block',
  styles: [
    {
      title: 'Normal',
      value: 'normal',
      blockEditor: {
        render: (props) => bodyRender(props)
      }
    },
    {
      title: 'H1',
      value: 'h1',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h1')
      }
    },
    {
      title: 'H2',
      value: 'h2',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h2')
      }
    },
    {
      title: 'H3',
      value: 'h3',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h3')
      }
    },
    {
      title: 'H4',
      value: 'h4',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h4')
      }
    },
    {
      title: 'H5',
      value: 'h5',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h5')
      }
    },
    {
      title: 'H6',
      value: 'h6',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h6')
      }
    },
    {title: 'Quote', value: 'blockquote'},
    {
      title: 'Call To Action',
      value: 'cta',
      blockEditor: {
        render: CtaRender
      }
    },
    {
      title: 'Horizontal Rule',
      value: 'hr',
      blockEditor: {
        render: HrRender
      }
    }
  ],
  lists: [
    {
      title: 'Bullet',
      value: 'bullet',
      blockEditor: {
        render: ListRender
      }
    },
    {title: 'Numbered', value: 'number'}
  ],
  marks: {
    decorators: [
      {title: 'Strong', value: 'strong'},
      {
        title: 'Subtitle',
        value: 'subtitle',
        blockEditor: {
          icon: () => <>S</>,
          render: (props) => TypographyRender(props, 'subtitle1')
        }
      },
      {
        title: 'Overline',
        value: 'overline',
        blockEditor: {
          icon: () => <>O</>,
          render: (props) => TypographyRender(props, 'overline')
        }
      },
      {
        title: 'Heavy',
        value: 'bold',
        blockEditor: {
          icon: BoldIcon,
          render: BoldRender
        }
      },
      {title: 'Emphasis', value: 'em'},
      {
        title: 'Light',
        value: 'light',
        blockEditor: {
          icon: () => lightIcon(TransformHWLayout.palette.primary.main),
          render: LightRender
        }
      },
      {
        title: 'Primary Text Color',
        value: 'primaryTextColor',
        blockEditor: {
          icon: () => highlightIcon(TransformHWLayout.palette.primary.main),
          render: (props) => (TextColorRender(props, TransformHWLayout.palette.primary.main))
        }
      },
      {
        title: 'Secondary Text Color',
        value: 'secondaryTextColor',
        blockEditor: {
          icon: () => highlightIcon(TransformHWLayout.palette.secondary.main),
          render: (props) => (TextColorRender(props, TransformHWLayout.palette.secondary.main))
        }
      },
      {
        title: 'Underline Primary Color',
        value: 'underlinePrimaryColor',
        blockEditor: {
          icon: () => underlineIcon(TransformHWLayout.palette.primary.main),
          render: (props) => UnderlineRender(props, TransformHWLayout.palette.primary.main)
        }
      },
      {
        title: 'Drop Cap',
        value: 'dropCap',
        blockEditor: {
          icon: () => <>Dc</>,
          render: DropCapRender
        }
      },
      {
        title: 'Key Stroke',
        value: 'keyStroke',
        blockEditor: {
          icon: () => <>Ks</>,
          render: KeystrokeRender
        }
      },
      {
        title: 'Large Body Text',
        value: 'largeBodyText',
        blockEditor: {
          icon: LargeBodyTextIcon,
          render: LargeBodyTextRender
        }
      }
    ],
    annotations: [
      {
        name: 'internalLink',
        type: 'object',
        title: 'Internal Link',
        fields: [
          {
            name: 'item',
            type: 'reference',
            to: [
              {type: 'homePage'},
            ]
          }
        ],
        blockEditor: {
          icon: internalIcon,
          render: internalLinkRender
        }
      },
      {
        title: 'URL',
        name: 'utmLink',
        type: 'object',
        fields: [
          {
            title: 'URL',
            description: 'utm params will be appended to this URL',
            name: 'href',
            type: 'url'
          }
        ],
        blockEditor: {
          icon: utmIcon,
          render: UtmLinkRender
        }
      },
      {
        title: 'Button',
        value: 'button',
        blockEditor: {
          icon: utmIcon,
          render: ButtonRender
        },
        name: 'button',
        type: 'object',
        fields: [
          {
            title: 'Variant',
            description: 'The type of Button(Only Text, Contained, Outlined)',
            name: 'variant',
            type: 'string',
            options: {
              list: [
                {title: 'Text', value: 'text'},
                {title: 'Contained', value: 'contained'},
                {title: 'Outlined', value: 'outlined'}
              ]
            }
          },
          {
            title: 'Color',
            description: 'Color of the Button(Primary, Secondary, Blue)',
            name: 'color',
            type: 'string',
            options: {
              list: [
                {title: 'Primary', value: 'primary'},
                {title: 'Secondary', value: 'secondary'},
                {title: 'Mint', value: 'mint'}
              ]
            }
          },
          {
            title: 'Button Link',
            description: 'Url',
            name: 'buttonLink',
            type: 'url'
          }
        ]
      }
    ]
  }
}

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [blockContentConfig,
    {
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      type: 'lineBreak'
    }
  ]
}