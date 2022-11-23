// block renderers can return JSX Elements that are block or inline elements since they will be the top level element
import {makeStyles, Theme} from '@material-ui/core/styles'

export const useThwCommonStyles = makeStyles((theme: Theme) => ({
    layoutContainer: {
        marginBottom: '32px',
    },
    primaryTextColor: {
        color: theme.palette.primary.main,
    },
    secondaryTextColor: {
        color: theme.palette.secondary.main,
    },
    bold: {
        fontWeight: 700,
    },
    bodyText: {
        // fontFamily: 'DTL Documenta',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '28px',
        letterSpacing: '0.5px',
        color: '#333333',
        padding: theme.spacing(1, 0),
    },
    callToAction: {
        borderTop: '1px solid rgba(0,0,0,.12)',
        borderBottom: '1px solid rgba(0,0,0,.12)',
        width: '100%',
        padding: theme.spacing(3, 0),
    },
    root: {
        width: '1050px',
        padding: '40px',
        overflow: 'visible'
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
    keystroke: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #6D6D6D',
        backgroundColor: '#3D3D3D',
        color: 'whitesmoke',
        borderRadius: '8px',
        // display: "inline-block",
        width: '50px !important',
        height: '50px !important',
        ...theme.typography.h4,
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
        fontSize: '10px',
    },
    bulletIconContainer: {
        marginTop: theme.spacing(1.5),
        minWidth: '20px',
    },
    orderedListIndex: {
        marginTop: theme.spacing(-1.25),
        // fontFamily: 'DTL Documenta ST Regular',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '28px',
        letterSpacing: '0.5px',
    },
    listItemRoot: {
        paddingLeft: '8px',
    },
}))

export default useThwCommonStyles
