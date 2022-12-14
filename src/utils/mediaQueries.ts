import {useMediaQuery} from "@material-ui/core";
import BartenderTheme from "../theme/transform-hw/BartenderTheme";

const smDown = BartenderTheme.breakpoints.down('sm')
const xsDown = BartenderTheme.breakpoints.down('xs')
const mdUp = BartenderTheme.breakpoints.up('md')
const mdDown = BartenderTheme.breakpoints.down('md')
const xsOnly = BartenderTheme.breakpoints.only('xs')

const useSmDown = ()=>{
    const smDownQuery = useMediaQuery(smDown)
    return smDownQuery
}

const useXsDown = ()=>{
    const xsDownQuery = useMediaQuery(xsDown)
    return xsDownQuery
}

const useMdDown = ()=>{
    const mdDownQuery = useMediaQuery(mdDown)
    return mdDownQuery
}

const useMdUp = ()=>{
    const mdUpQuery = useMediaQuery(mdUp)
    return mdUpQuery
}

const useXsOnly = ()=>{
    const xsQuery = useMediaQuery(xsOnly)
    return xsQuery
}

export default {useSmDown, useXsDown, useMdUp, useMdDown, useXsOnly}