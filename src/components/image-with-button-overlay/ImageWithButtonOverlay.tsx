import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, PropTypes, Typography} from '@material-ui/core'
import CssFadeToColor from "../css-fade-to-color/CssFadeToColor";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";
import {CssFadeToColorDirectionEnum} from "../css-fade-to-color/CssFadeToColorDirectionEnum";
import {ImageWithButtonOverlayAligmentEnum} from "./ImageWithButtonOverlayAligmentEnum";

export const useStyles = makeStyles((theme: Theme) => ({
    contentBullets: {
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    fromColor?: string
    toColor?: string
    isResponsive?: boolean
    direction?: CssFadeToColorDirectionEnum
    imageSrc: SanityImageSource
    imageAltText?: string
    ctaButtonLink?: string
    ctaButtonText?: string
    variant?: 'text' | 'contained' | 'outlined'
    height: number
    width?: number
    buttonAlignment?: ImageWithButtonOverlayAligmentEnum
    buttonColor?: PropTypes.Color
}


const ImageWIthButtonOverlay: FunctionComponent<IProps> = (props) => {
    const getButtonAlignment = ()=>{
        switch (props.buttonAlignment){
            case ImageWithButtonOverlayAligmentEnum.RIGHT:
                return 'flex-end'
            case ImageWithButtonOverlayAligmentEnum.LEFT:
                return 'flex-start'
            case ImageWithButtonOverlayAligmentEnum.CENTER:
            default:
                return 'center'
        }
    }

    return (
        <Grid item container direction='column'
              style={{position: "relative"}}>
            {props.toColor &&
                props.direction !== undefined &&
                <CssFadeToColor toColor={props.toColor}
                                direction={props.direction}
                                isResponsive={props.isResponsive}/>}
            <Grid item container style={{
                backgroundImage: `url(${urlFor(props.imageSrc).height(props.height).url() ?? ''})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: props.height,
                width: props.width,
            }}>
            </Grid>
            <Grid container item style={{
                position: "absolute",
                bottom: 32,
                left: 0,
                paddingRight: "32px"
            }} justifyContent={getButtonAlignment()}>
                {props.ctaButtonText?.length && props.ctaButtonText?.length > 0 && <Button variant={props.variant ? props.variant : 'outlined'}
                         color={props.buttonColor ? props.buttonColor : 'primary'}
                         href={props.ctaButtonLink ?? ''}
                         style={{
                             color: "#FAFAFA"
                         }}
                >
                    <Typography variant='button'
                                color='secondary'>{props.ctaButtonText}</Typography>
                </Button>}
            </Grid>
        </Grid>
    )
}

export default ImageWIthButtonOverlay