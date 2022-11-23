// mark Renderers should only apply classes to inline elements (spans) not add html block elements.
// ex: if you add a typography tag here then the variant by default is body1
// if a header mark was included on the same block this would overwrite the variant.
// it would also block other html elements causing that mark to line break
import React, {PropsWithChildren} from 'react'
import {useCommonStyles} from './CommonStyles'
import {Grid, Typography} from '@material-ui/core'
import TransformHWTheme from "../../../../theme/transform-hw/TransformHWTheme";

export type TypographyVariantType =
  'button'
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

export const TextColorRender: React.FunctionComponent<PropsWithChildren> = (props, color) => {
  return <span style={{color: color}}>{props.children}</span>
}

export const HighlightRender: React.FunctionComponent<PropsWithChildren> = (props, color) => {
  return <span style={{background: `linear-gradient(${color} 80%, transparent 20%) no-repeat`}}>{props.children}</span>
}

export const UnderlineRender: React.FunctionComponent<PropsWithChildren> = (props, color) => {
  return <span style={{textDecoration: `${color} underline`}}>{props.children}</span>
}

export const NormalRender: React.FunctionComponent = (props: React.PropsWithChildren<{}> & { listItem?: string, level?: number }) => {
  const classes = useCommonStyles(TransformHWTheme)
  return <Typography className={classes.bodyText} style={{margin: '.5rem 0'}}>{props.children}</Typography>
}

export const TypographyRender: React.FunctionComponent<PropsWithChildren> = (props, variant: string) => {
  const classes = useCommonStyles(TransformHWTheme)
  return <Typography component="span" className={classes.typographyText}
                     variant={variant as TypographyVariantType}>{props.children}</Typography>
}

export const LargeBodyTextRender: React.FunctionComponent<PropsWithChildren> = (props) => {
  const classes = useCommonStyles(TransformHWTheme)
  return <Typography component="span" className={classes.largeBodyText}>{props.children}</Typography>
}

export const CenterRender: React.FunctionComponent<PropsWithChildren> = (props) => {
  return <Grid container item justifyContent="center" xs={12}><Grid item>{props.children}</Grid></Grid>
}

export default {
  LightRender,
  BoldRender,
  DropCapRender,
  HighlightRender: TextColorRender,
  UnderlineRender,
  TypographyRender,
  LargeBodyTextRender,
  CenterRender,
}