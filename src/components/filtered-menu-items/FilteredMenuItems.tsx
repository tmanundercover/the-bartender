import React, {FunctionComponent, useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, useMediaQuery} from '@material-ui/core'
import MediaQueries from "../../utils/mediaQueries";
import HeaderMenuItemButton from "../transform-hw/HeaderMenuItemButton";
import PopupStateWrapper from "./PopupStateWrapper";
import {SanityMenuContainer, SanityMenuGroup, SanityMenuItem} from "../../common/sanityIo/Types";
import mediaQueries from "../../utils/mediaQueries";


export const useStyles = makeStyles((theme: Theme) => ({}))

interface FilteredMenuItemsProps {
    subMenus: SanityMenuContainer[]
    includeMenuItems?: boolean
    includeMenuGroups?: boolean
    onlyButtons?: boolean
    anchorRef?: any
    bgColor?: any
}

type HeaderMenuButtonType = {
    group?: SanityMenuGroup,
    item?: SanityMenuItem,
    index: number
    popup?: (popupState: any) => JSX.Element
    button: any
}
const FilteredMenuItems: FunctionComponent<FilteredMenuItemsProps> = ({
                                                                 bgColor,
                                                                 subMenus,
                                                                 onlyButtons,
                                                                 includeMenuItems,
                                                                 includeMenuGroups,
                                                             }) => {
    // const anchorRef = useRef<HTMLButtonElement | null>(null)
    const mdDown = mediaQueries.useMdDown()

    return (<Grid item container justifyContent={mdDown ? 'flex-start' : 'flex-end'} alignItems='stretch'>
            {
                subMenus?.reduce(
                    (accumulated: JSX.Element[], menuButton:any, index) => {
                        if (menuButton?._type === "menuItem" && (includeMenuItems || (onlyButtons && (menuButton.isOutlinedButton || menuButton.isContainedButton)))) {
                            return accumulated.concat([<Grid item key={uuidv4()}>
                                <HeaderMenuItemButton menuItem={menuButton}/>
                            </Grid>])
                        } else if (menuButton?._type === "menuGroup" && includeMenuGroups) {
                            return accumulated.concat([<Grid item key={uuidv4()}>
                                <PopupStateWrapper menuGroup={menuButton} bgColor={bgColor}/>
                            </Grid>])
                        }
                        return accumulated
                    }, [])
            }
            {/*{*/}
            {/*    menuButtons.reduce(*/}
            {/*        (accumulated: JSX.Element[], menuButton: any) => {*/}
            {/*            if (menuButton?.group && includeMenuGroups) {*/}
            {/*                return accumulated.concat([<Grid item key={uuidv4()}>{menuButton.popup(anchorRef.current, open)}</Grid>])*/}
            {/*            }*/}
            {/*            return accumulated*/}
            {/*        }, [])*/}
            {/*}*/}
        </Grid>
    )
}

export default FilteredMenuItems