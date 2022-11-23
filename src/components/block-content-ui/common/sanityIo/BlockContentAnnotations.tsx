import React from 'react'
import queryString from 'querystring'
import {useLocation} from 'react-router-dom'
import {BlockContentPropsType, LinkType} from './BlockContentRenderer'
import {Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import {FiberManualRecord} from '@material-ui/icons'
import {useCommonStyles} from './CommonStyles'
import {TypographyVariantType} from './BlockContentMarkRenderers'
import TransformHWTheme from "../../../../theme/transform-hw/TransformHWTheme";

export const UtmLinkRender: React.FunctionComponent = (props: React.PropsWithChildren<{}> & BlockContentPropsType<LinkType>) => {
  let href = props?.mark?.href

  try {
    const location = useLocation()

    const {utmSource, utmCampaign, utmMedium} = queryString.parse(location.search.slice(1))

    const utmQueryParams =
      '?' + 'utmSource=' + utmSource
      + '&' + 'utmMedium=' + utmMedium
      + '&' + 'utmCampaign=' + utmCampaign
    if (utmSource && utmMedium && utmCampaign && props?.mark?.isAddUtm === true) {
      href += utmQueryParams
    }
  } catch (e) {
  }
  return <Link href={href} style={{color: props?.mark?.color ? props.mark.color.value:TransformHWTheme.palette.primary.main}}>{props.children}</Link>
}

export const ListRender: React.FunctionComponent = (props: React.PropsWithChildren<{}>) => {
  const classes = useCommonStyles(props)
  return <List classes={{root: classes.noListPadding}}>{props.children}</List>
}

export const ListItemRender: React.FunctionComponent = (props: React.PropsWithChildren<{ node?: any, index?: number }>) => {
  const classes = useCommonStyles(props)
  const variant : TypographyVariantType = props.node.style
  return (<Grid item>
    <ListItem className={classes.listItemRoot}>
      <Grid container wrap="nowrap" alignItems="stretch">
        <Grid item>
          <Grid container alignItems="center">
            {props.node?.listItem && props.node?.listItem === 'bullet' ?
              <ListItemIcon className={classes.bulletIconContainer}>
                <FiberManualRecord className={classes.bulletIcon}/>
              </ListItemIcon>
              : <Typography variant="subtitle1"
                            className={classes.orderedListIndex}>{(props?.index ?? 0) + 1}.</Typography>}
          </Grid>

        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            <ListItemText>
              <Typography variant={variant.toString() !== 'normal'? variant: 'body1'} style={{margin: '0.13rem 0'}}>{props.children}</Typography>
            </ListItemText>
          </Grid>

        </Grid>
      </Grid>

    </ListItem>
  </Grid>)
}

export default {
  UtmLinkRender,
  ListRender,
  ListItemRender,
}
