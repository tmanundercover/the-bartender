import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import {urlFor} from "../../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";
import logoImg from './transformhw-logo.png'

interface CssProps {
    logoImageSrc?: SanityImageSource
    height?: number
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: (props: CssProps) => ({
        backgroundImage: `url(${props.logoImageSrc ? urlFor(props.logoImageSrc).url() : logoImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        minWidth: "100px",
        height: `${props.height ?? 68}px`,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }),
}))

interface LogoProps {
    logoImageSrc?: SanityImageSource
    height?: number
    isCenter?: boolean
}

const Logo: FunctionComponent<LogoProps> = (props) => {
    const classes = useStyles({logoImageSrc: props.logoImageSrc, height: props.height})

    return (
        <Grid item container className={classes.root} style={{backgroundPosition: props.isCenter ? "center" : "left"}}/>
    )
}

export default Logo