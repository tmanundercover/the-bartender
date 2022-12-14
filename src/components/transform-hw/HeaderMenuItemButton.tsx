import React, {FunctionComponent, useState} from 'react'
import {Button, Typography} from '@material-ui/core'
import BartenderTheme from "../../theme/transform-hw/BartenderTheme";
import {SanityMenuItem} from "../../common/sanityIo/Types";


interface HeaderMenuItemButtonProps {
    menuItem: SanityMenuItem
}

const HeaderMenuItemButton: FunctionComponent<HeaderMenuItemButtonProps> = ({menuItem}) => {
    const [links, setLinks] = useState<any[]>([])

    // React.useEffect(() => {
    //     const potentialLinks = props.subMenu.links?.map(async (potentialLink) => {
    //         return cmsClient.fetchRef(potentialLink)
    //     })
    //     if (potentialLinks) {
    //
    //         Promise.all(potentialLinks).then((realizedLinks: SanityMenuItem[]) => {
    //             setLinks(realizedLinks)
    //         })
    //     }
    // }, [props.subMenu.links])

    return (<Button href={menuItem.url ?? ""}
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : "primary"}
                    style={{
                        borderRadius: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? BartenderTheme.shape.borderRadius : 0,
                        paddingLeft: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? BartenderTheme.spacing(4) : BartenderTheme.spacing(2),
                        paddingRight: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? BartenderTheme.spacing(4) : BartenderTheme.spacing(2),
                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? BartenderTheme.spacing(3) : 0,
                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? BartenderTheme.spacing(2) : 0,
                        height: menuItem.isOutlinedButton || menuItem.isContainedButton ? "48px" : "100%",
                        color: menuItem.isOutlinedButton || menuItem.isContainedButton ? 'white' : BartenderTheme.palette.secondary.main
                    }}
                    variant={menuItem.isContainedButton ? 'contained' : (menuItem.isOutlinedButton ? 'outlined' : 'text')}>
        <Typography noWrap
                    variant={menuItem.isOutlinedButton || menuItem.isContainedButton ? "button" : 'body2'}
                    style={{fontSize: "18px"}}>{menuItem.displayText}</Typography>
    </Button>)
}

export default HeaderMenuItemButton