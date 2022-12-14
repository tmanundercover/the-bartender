import {makeStyles} from "@material-ui/core";
import BartenderTheme from "../../../theme/transform-hw/BartenderTheme";

export const useThwStyles = makeStyles({
    fullscreen: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
        position: "relative"
    },
    fullscreenPlus: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
        position: "relative"
    },
    endAdornedInput: {
        "& .MuiFilledInput-adornedEnd": {
            border: "1px solid white",
            paddingRight: 0,
            borderTopRightRadius: BartenderTheme.shape.borderRadius,
            borderBottomRightRadius: BartenderTheme.shape.borderRadius
        },
        "& .MuiOutlinedInput-adornedEnd": {
            border: "1px solid white",
            paddingRight: 0,
            borderTopRightRadius: BartenderTheme.shape.borderRadius,
            borderBottomRightRadius: BartenderTheme.shape.borderRadius
        },
        "& .MuiInputBase-input": {
            borderRightWidth: 0,
            "&:hover": {
                borderBottomColor: "white"
            },
        },
        "& .MuiButton-containedSecondary":{
            border: 0,
            borderLeft: '1px solid white'
        }
    },
    spacer: {
        marginBottom: "40px"
    },
    fullscreenOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .5)`
    },
    fullScreenImage: {
        position: "relative",
        backgroundImage: (props: any) => `url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: BartenderTheme.palette.background.default
    },
    fullSection: {
        width: 'calc(100vw)',
        height: '100%',
        position: "relative",
        zIndex: 0
    },
    fullSectionOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .4)`,
        minHeight: '512px',
        height: '100%',
        width: "100%",
        zIndex: 1
    },
    fullContainer: {
        width: '100%',
        height: '100%'
    }
})

export default {useThwStyles}