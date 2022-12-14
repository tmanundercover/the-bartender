import {Button, CircularProgress, makeStyles, PropTypes} from '@material-ui/core'
import React, {FunctionComponent, PropsWithChildren} from 'react'
import BartenderTheme from "../../theme/transform-hw/BartenderTheme";
import {ButtonGroupMemberEnum} from "./ButtonGroupMemberEnum";


type CssProps = {
    buttonGroupiness?: ButtonGroupMemberEnum, width?: number
}

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: (props: any) => props.width ? `${props.width}px`: 'unset',
        borderRadius: "0 5px 5px 0",
        borderTopLeftRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                default:
                    return BartenderTheme.shape.borderRadius
            }
        },
        borderTopRightRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                default:
                    return BartenderTheme.shape.borderRadius
            }
        },
        borderBottomRightRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                default:
                    return BartenderTheme.shape.borderRadius

            }
        },
        borderBottomLeftRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                default:
                    return BartenderTheme.shape.borderRadius
            }
        },
    }
}))


interface LoadingButtonProps {
    disabled?: boolean
    clickHandler: (e: any) => void
    isLoading?: boolean
    color?: PropTypes.Color
    groupiness?: ButtonGroupMemberEnum
    width?: number
    variant?: 'text' | 'outlined' | 'contained'
}

const LoadingButton: FunctionComponent<PropsWithChildren<LoadingButtonProps>> = (props) => {
    const classes = useStyles({buttonGroupiness: props.groupiness, width: props.width})
    const getProgressContrastColor = ()=>{
        switch (props.color) {
            case 'primary':
                return  BartenderTheme.palette.primary.main
            case 'secondary':
                return BartenderTheme.palette.secondary.main
            default:
                return '#FFFFFF'
        }
    }
    return (
        <Button
            disabled={props.disabled}
            onClick={props.clickHandler}
            className={classes.root}
            fullWidth={!props.width}
            color={props.color ?? 'primary'}
            variant={props.variant ?? 'contained'}>
            {
                props.isLoading ?
                    <CircularProgress style={{
                        color: BartenderTheme.palette.getContrastText(getProgressContrastColor()),
                        width: "22px",
                        height: "22px"
                    }}/>
                    : props.children
            }</Button>

    )
}

export default LoadingButton