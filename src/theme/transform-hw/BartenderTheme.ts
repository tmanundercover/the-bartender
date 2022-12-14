import {createTheme} from '@material-ui/core'
// import GrotescoLight from '../common/fonts/Grotesco/Grotesco-Web-Font/Grotesco-Light.ttf'
// import Feixen from '../common/fonts/Studio Feixen Sans Writer/Web/StudioFeixenSansWriter-Regular.ttf'
import Poppins from '../common/fonts/Poppins/Poppins-Medium.ttf'
import MontserratBold from '../common/fonts/Montserrat/Montserrat-Bold.ttf'
import MontserratBold2 from '../common/fonts/Montserrat/Montserrat-Bold.otf'
// import PoppinsBold from '../common/fonts/Poppins/Poppins-Bold.ttf'
import PoppinsXBold from '../common/fonts/Poppins/Poppins-ExtraBold.ttf'
// import PlexSans from '../common/fonts/IBM Plex/OpenType/IBM-Plex-Sans/IBMPlexSans-Regular.otf'

type FontFace = {
    fontDisplay?: any
    fontFamily?: any
    fontStyle?: any
    fontWeight?: number
    src?: string
}

// export const grotesco: FontFace = {
//     fontFamily: 'Grotesco',
//     fontStyle: 'normal',
//     fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
//     fontWeight: 400,
//     src: `
//     local('Grotesco'),
//     url(${Grotesco}) format('truetype')
//   `
// }

// const grotescoLight: FontFace = {
//     fontFamily: 'Grotesco Light',
//     fontStyle: 'normal',
//     fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
//     fontWeight: 400,
//     src: `
//     local('Grotesco Light'),
//     url(${GrotescoLight}) format('truetype')
//   `
// }

// const feixen: FontFace = {
//     fontFamily: 'Feixen',
//     fontStyle: 'normal',
//     fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
//     fontWeight: 400,
//     src: `
//     local('Feixen'),
//     url(${Feixen}) format('opentype')
//   `
// }

const poppins: FontFace = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 400,
    src: `
    local('Poppins'),
    url(${Poppins}) format('opentype')
  `
}

export const montserratBold: FontFace = {
    fontFamily: 'Montserrat',
    fontStyle: 'bold',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 700,
    src: `
    local('Montserrat'),
    url(${MontserratBold}) format('truetype'),
    url(${MontserratBold2}) format('opentype'),
    'sans-serif'
  `
}

// const poppinsBold: FontFace = {
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
//     fontWeight: 700,
//     src: `
//     local('Poppins'),
//     url(${PoppinsBold}) format('opentype')
//   `
// }
export const poppinsXBold: FontFace = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 900,
    src: `
    local('Poppins'),
    url(${PoppinsXBold}) format('opentype')
  `
}

// const plexSans: FontFace = {
//     fontFamily: 'Plex Sans',
//     fontStyle: 'normal',
//     fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
//     fontWeight: 400,
//     src: `
//     local('Plex Sans'),
//     url(${PlexSans}) format('opentype')
//   `
// }

const fonts = ['Poppins', 'Montserrat', 'sans-serif'].join(',')

// New Registration flow colors
export const PINK = '#FFA9E7'

// Marketplace colors

export enum COLORS {
    DARKBLUE = '#350002',
    BLUE = 'rgb(136,16,30)',
    DARK_GRAY = '#A8A9AC',
    GRAY = 'rgba(207, 207, 207, 1)',
    LIGHT_GRAY = '#E3E3E3',
    TRANSPARENTWHITE = 'rgba(255,255,255,0.75)'
}

const BartenderTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 980,
            lg: 1160,
            xl: 1320,
        }
    },
// @ts-ignore
    palette: {
        background: {
            default: COLORS.DARKBLUE,
            paper: COLORS.LIGHT_GRAY
        },
        primary: {
            main: COLORS.GRAY,
        },
        secondary: {
            main: COLORS.BLUE,
        },
        error: {
            main: '#840E0E',
            light: '#D79393',
            dark: '#640E0E'
        },
        success: {
            main: '#27AE60',
            light: '#93D7B0',
            dark: '#0E8433'
        },
        warning: {
            main: '#E2AB1F',
            light: '#F1D58F',
            dark: '#CF800A'
        },
        text: {
            primary: COLORS.DARKBLUE,
            // secondary: COLORS.LIGHT_GRAY,
            disabled: COLORS.LIGHT_GRAY
        }
    },
    typography: {
        fontFamily: fonts,
        h1: {
            // Title1
            fontSize: '66px',
            fontStyle: 'normal',
            fontWeight: "bold",
            lineHeight: 1.3,
            letterSpacing: '-0.03em'
        },
        h2: {
            // Title2
            fontSize: '53px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.03em'
        },
        h3: {
            // Title3
            fontSize: '44px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.03em'
        },
        h4: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '34px',
            lineHeight: 1.5
        },
        h6: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: 1.5
        },
        body1: {
            // Body
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 350,
            lineHeight: 1.5,
            letterSpacing: '-0.03em'
        },
        body2: {
            // Large
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '-0.03em'
        },
        button: {
            // Button
            fontSize: '19px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            textTransform: 'none'
        },
        subtitle1: {
            // Small
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 750,
            lineHeight: 1.45,
            letterSpacing: '-0.03em'
        },
        subtitle2: {
            // Micro
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.45,
            letterSpacing: '-0.03em'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [poppins, poppinsXBold]
            },
        },
        MuiInputBase: {
            root: {
                // color: "#FAFAFA",
                "&:focus": {
                    borderBottom: 0
                }
            },
            input: {
                // borderBottom: "4px solid " + COLORS.MAIN,
                "& :before": {
                    // borderBottom: "1px solid "+ COLORS.MAIN,
                }
            }
        },
        MuiFilledInput: {
            root: {
                backgroundColor: "rgba(0,0,0,.3)",
                // borderBottom: "1px solid "+ COLORS.MAIN,
                "& .Mui-focused": {
                    borderBottomWidth: '0px solid black'
                }
            },
            // notchedOutline: {
            //     "& :after":{
            //             borderColor: "red"
            //     }
            //     // "& :after": {
            //     //     borderBottom: "2px solid red",
            //     //     borderColor:  COLORS.MAIN,
            //     // }
            // },
        },
        MuiInputLabel: {
            root: {
                // color:"black",
            }
        },
        MuiButton: {
            root: {
                // color: '#FFFFFF',
                // height: '35px',
                // padding: '8px 16px 8px 16px',
                borderRadius: '5px',
                paddingTop: "16px",
                paddingBottom: "16px"
            },
            contained: {
                boxShadow: "none",
            },
            containedPrimary: {
                border: '1px solid white',
                // backgroundColor: "rgba(207, 207, 207, .8)",
                // color: '#FCE3CC',
                // backgroundColor: '#FF4122',
                // '&:hover': {
                //   backgroundColor: '#BD1A00',
                //   color: '#FCE3CC'
                // },
                '&$disabled': {
                    // backgroundColor: '#79582d',
                    // color: '#969284'
                },
                // '&:focus': {
                //   color: '#FCE3CC',
                //   backgroundColor: '#FF4122'
                // }
            },
            containedSecondary: {
                border: '1px solid whitesmoke',
                // color: '#FEF1E6',
                // backgroundColor: 'rgba(16, 43, 136, .7)',
                // '&:hover': {
                //   backgroundColor: '#2412AE',
                //   color: '#FCE3CC'
                // },
                '&$disabled': {
                    // color: 'rgba(207, 207, 207, .5)',
                    // backgroundColor: 'rgba(16, 43, 136, .5)'
                },
                // '&:focus': {
                //   color: '#FCE3CC',
                //   backgroundColor: '#4C2FCD'
                // }
            },
            outlinedPrimary: {
                borderWidth: '3px',
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "64px",
                paddingRight: "64px"
                // color: '#FF4122',
                // borderColor: '#FF4122',
                // '&:hover': {
                //   backgroundColor: '#FF4122',
                //   color: '#FCE3CC'
                // },
                // '&:disabled': {
                //   borderColor: '#FFA091',
                //   color: '#FFA091'
                // },
                // '&:focus': {
                //   backgroundColor: 'transparent',
                //   borderColor: '#FF4122',
                //   color: '#FF4122'
                // }
            },
            outlinedSecondary: {
                borderWidth: '3px',
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "64px",
                paddingRight: "64px",
            }
        },
        MuiCircularProgress: {
            // colorPrimary: {
            //   color: '#A697E6'
            // }
        }
    }
})

export default BartenderTheme
