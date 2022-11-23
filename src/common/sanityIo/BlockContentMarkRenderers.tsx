// mark Renderers should only apply classes to inline elements (spans) not add html block elements.
// ex: if you add a typography tag here then the variant by default is body1
// if a header mark was included on the same block this would overwrite the variant.
// it would also block other html elements causing that mark to line break
import React, {PropsWithChildren} from 'react'
import {useCommonStyles} from './CommonStyles'
import {CssBaseline, MuiThemeProvider, Typography} from '@material-ui/core'
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";

export type TypographyVariantType =
  'inherit'
  | 'button'
  | 'overline'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'srOnly'
  | undefined
export const LightRender: React.FunctionComponent<PropsWithChildren> = (props) => {
  const classes = useCommonStyles(TransformHWTheme)
  return <span className={classes.lightWeightFont}>{props.children}</span>
}

export const BoldRender: React.FunctionComponent<PropsWithChildren> = (props) => {
  const classes = useCommonStyles(TransformHWTheme)
  return <span className={classes.boldWeightFont}>{props.children}</span>
}

export const DropCapRender: React.FunctionComponent<PropsWithChildren> = (props) => {
  const classes = useCommonStyles(TransformHWTheme)
  return <span className={classes.dropCapLetter}>{props.children}</span>
}

export const KeystrokeRender: React.FunctionComponent<PropsWithChildren> = (props) => {
  const classes = useCommonStyles(TransformHWTheme)
  return <span className={classes.keystroke}>{props.children}</span>
}

export const TextColorRender: React.FunctionComponent<PropsWithChildren> = (props, color) => {
  return <MuiThemeProvider theme={TransformHWTheme}><CssBaseline/><span
    style={{color: color}}>{props.children}</span></MuiThemeProvider>
}

export const UnderlineRender: React.FunctionComponent<PropsWithChildren> = (props, color) => {
  return <span style={{textDecoration: `${color} underline`}}>{props.children}</span>
}

export const NormalRender: React.FunctionComponent<PropsWithChildren> = (props: React.PropsWithChildren<{}> & { listItem?: string, level?: number }) => {
  const classes = useCommonStyles(TransformHWTheme)
  return <p className={classes.bodyText}>{props.children}</p>
}

export const TypographyRender: React.FunctionComponent<PropsWithChildren> = (props, variant: string) => {
  const wrapWithHTag = (children: any) => {
    switch (variant) {
      case 'h1':
        return <h1>{children}</h1>
      case 'h6':
        return <h6>{children}</h6>
      case 'h2':
        return <h2>{children}</h2>
      case 'h3':
        return <h3>{children}</h3>
      case 'h4':
        return <h4>{children}</h4>
      case 'h5':
        return <h5>{children}</h5>
      default:
        return <Typography display='inline' component='p' style={{textDecoration: 'none'}}
                           variant={variant as TypographyVariantType}>{children}</Typography>
    }

  }

  return wrapWithHTag(props.children)
}

export const LargeBodyTextRender: React.FunctionComponent<PropsWithChildren> = (props) => {
  return <Typography component='p'
                     style={{fontSize: '21px'}}>{props.children}</Typography>
}

// export const ButtonRender: (props: any, color: string, variant: string, buttonText: string, buttonLink: string) => any = (props:any, color:string, variant:string, buttonText:string, buttonLink:string):any => {
//   return <Button variant={variant as 'text' | 'outlined' | 'contained'} color={color as PropTypes.Color} href={buttonLink}>{props.buttonText}</Button>
// }


export default {
  LightRender,
  BoldRender,
  DropCapRender,
  HighlightRender: TextColorRender,
  UnderlineRender,
  TypographyRender,
  LargeBodyTextRender,
  KeystrokeRender
}