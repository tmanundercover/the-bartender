import React, {FunctionComponent, RefObject, useState} from 'react'
import {Grid, Popover, PropTypes} from '@material-ui/core'
import {COLORS} from "../../theme/transform-hw/TransformHWTheme";
import SubMenu from "../transform-hw/header/SubMenu";

import {v4 as uuidv4} from 'uuid'
import {bindPopover} from "material-ui-popup-state";
import {SanityMenuGroup} from "../../common/sanityIo/Types";
interface FilteredMenuItemsPopupProps {
    // uuid:any
    menuGroup: SanityMenuGroup
    bgColor?: PropTypes.Color
    popupState?:any
}

const FilteredMenuItemsPopup: FunctionComponent<FilteredMenuItemsPopupProps> = ({popupState,menuGroup, bgColor}) => {
    const handleResize = () =>{
        popupState.handleClose && popupState.handleClose({})
    }

    window.addEventListener('resize', handleResize)


    return (<Popover
        key={uuidv4()}
        {...bindPopover(popupState)}
        elevation={1}
        onClose={popupState.handleClose}
        PaperProps={{style: {borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor: bgColor}}}
        anchorOrigin={{
            // vertical: 100,
            vertical: "top",
            // horizontal: popupState.anchorRef?.offsetLeft ?? 0 - 32 ??0
            horizontal: "left"
        }}
    >
        <Grid container item>
            <SubMenu subMenu={menuGroup} handleClose={popupState.handleClose}/>
        </Grid>
    </Popover>)
}

export default FilteredMenuItemsPopup