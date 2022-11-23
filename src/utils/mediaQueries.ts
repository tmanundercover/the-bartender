import {useMediaQuery} from "@material-ui/core";
import TransformHWTheme from "../theme/transform-hw/TransformHWTheme";

const smDown = TransformHWTheme.breakpoints.down('sm')
const xsDown = TransformHWTheme.breakpoints.down('xs')
const mdUp = TransformHWTheme.breakpoints.up('md')
const mdDown = TransformHWTheme.breakpoints.down('md')
const xsOnly = TransformHWTheme.breakpoints.only('xs')

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