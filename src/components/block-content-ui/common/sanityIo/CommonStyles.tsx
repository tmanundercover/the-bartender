// block renderers can return JSX Elements that are block or inline elements since they will be the top level element
import {makeStyles, Theme} from '@material-ui/core/styles'
import React from 'react'

export const useCommonStyles = makeStyles((theme: Theme) => ({
  layoutContainer: {
    marginBottom: '32px',
  },
  primaryTextColor: {
    color: theme.palette.primary.main,
  },
  secondaryTextColor: {
    color: theme.palette.secondary.main,
  },
  accentTextBlue: {
    // TODO: use palette colors without breaking tests
    color: '#565190',
  },
  accentTextGreen: {
    color: '#5C7F61',
  },
  bold: {
    fontWeight: 700,
  },
  bodyText: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '28px',
    letterSpacing: '0.5px',
    color: '#333333',
    padding: theme.spacing(1, 0),
    whiteSpace: 'pre-wrap',
  },
  homePageH3: {
    fontWeight: 300,
  },
  lightWeightFont: {
    fontWeight: 300,
    letterSpacing: '-1.5px',
  },
  boldWeightFont: {
    fontWeight: 700,
  },
  dropCapLetter: {
    float: 'left',
    padding: theme.spacing(1),
    fontSize: '59px',
    fontWeight: 400,
    lineHeight: '30px',
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
  },
  hr: {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    width: '100%',
    height: '1px',
  },
  bulletIcon: {
    color: '#333333',
    fontSize: '10px',
  },
  bulletIconContainer: {
    // PS: Need !important tag because webpack build loads CSS in different order on production vs local
    marginTop: `${theme.spacing(1.5)}px !important`,
    minWidth: '20px !important',
  },
  orderedListIndex: {
    marginTop: theme.spacing(.75),
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '0.5px',
    marginRight: theme.spacing(2),
  },
  listItemRoot: {
    paddingLeft: '8px',
  },
  preFormattedText: {
    whiteSpace: 'pre-wrap',
  },
  largeBodyText: {
    fontSize: '21px',
    fontFamily: 'DTL Documenta',
    whiteSpace: 'pre-wrap',
    letterSpacing: 0,
    lineHeight: '165%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '150%',
    },
  },
  typographyText: {
    textDecoration: 'none',
    whiteSpace: 'pre-wrap',
  },
  noListPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  headerRender: {
    margin: '1rem 0',
    display: 'inline-block',
    width: '100%',
  },
}))

export default {
  useCommonStyles,
}