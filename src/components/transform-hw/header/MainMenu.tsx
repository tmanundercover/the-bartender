import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Divider, Drawer, Grid, List, ListItem, ListItemText} from '@material-ui/core'
import {Close, Menu} from "@material-ui/icons";
import TransformHWTheme from "../../../theme/transform-hw/TransformHWTheme";
import Logo from "../logo/Logo";
import MainMenuSubMenu from "./MainMenuSubMenu";
import {MainMenuAnchorType, SanityMenuContainer, SanityMenuGroup, SanityMenuItem} from "../../../common/sanityIo/Types";


export const useStyles = makeStyles((theme: Theme) => ({}))

interface MainMenuProps {
    menu: SanityMenuContainer
    anchor: MainMenuAnchorType
}

const MainMenu: FunctionComponent<MainMenuProps> = ({menu, anchor}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()
    const toggleDrawer = (anchor: MainMenuAnchorType, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };


    const list = (anchor: MainMenuAnchorType) => (
        <Grid item
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider/>
            {menu?.subMenus?.map((subMenu:any, index: number) => {
                switch (subMenu._type) {
                    case 'menuGroup':
                        const menuGroup: SanityMenuGroup = subMenu
                        return <MainMenuSubMenu key={index} menuGroup={menuGroup}/>
                    case 'menuItem':
                    default:
                        const menuItem: SanityMenuItem = subMenu
                        return <List style={{padding: 0}} key={menuItem.displayText}>
                            <ListItem button style={{
                                paddingTop: TransformHWTheme.spacing(2.25),
                                paddingBottom: TransformHWTheme.spacing(2.25),
                            }}>
                                <ListItemText primary={menuItem.displayText}/>
                            </ListItem>
                            <Divider/>
                        </List>
                }

            })}
        </Grid>
    );

    return (<Grid item>
            <Button onClick={toggleDrawer(anchor, true)}>
                <Menu color='secondary'
                      fontSize='large'/>
            </Button>
            <Drawer anchor={anchor} open={isDrawerOpen}
                    onClose={toggleDrawer(anchor, false)}
            >
                <Grid container alignItems='center' justifyContent='space-between'
                      style={{
                          paddingLeft: TransformHWTheme.spacing(4),
                          paddingRight: TransformHWTheme.spacing(6),
                      }}>

                    <Grid item xs={3}>

                        {menu.logoImageSrc && <Logo logoImageSrc={menu.logoImageSrc}/>}
                    </Grid>
                    <Grid item xs={1}><Button onClick={() => {
                        setIsDrawerOpen(false)
                    }}><Close color='primary' fontSize='large'/></Button></Grid>
                </Grid>
                {list(anchor)}
            </Drawer></Grid>
    )
}

export default MainMenu