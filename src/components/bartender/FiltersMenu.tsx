import React, {FunctionComponent, useContext, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {
    Button,
    CircularProgress,
    createStyles,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem, Typography,
    useTheme
} from '@material-ui/core'
import {Close, FilterList} from "@material-ui/icons";
import {MainMenuAnchorType} from "../../common/sanityIo/Types";
import apiClient from "../transform-hw/apiClient";
import LiquorBarFilter from "./LiquorBarFilter";
import Switch from '@material-ui/core/Switch';
import SearchContext from "../../common/search-context/SearchContext";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            // "& .MuiDrawer-paper": {
            //     backgroundColor: "transparent"
            // }
        },
        listItem: {
            "&.MuiListItem-gutters": {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            }
        }
    }),
);

interface MainMenuProps {
    anchor: MainMenuAnchorType
}

const FiltersMenu: FunctionComponent<MainMenuProps> = ({anchor}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()

    const toggleDrawer = (anchor: MainMenuAnchorType, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    const theme = useTheme()

    const classes = useStyles(theme)

    const {data, isLoading} = apiClient.useFetchAllBarIngredients()

    const searchContext = useContext(SearchContext)

    const list = (anchor: MainMenuAnchorType) => (
        <Grid xs={12} container item
              role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <Grid container item justifyContent='center'>
                Search the Bar
            </Grid>


            <Grid container item>
                <List style={{width: "100%"}}>
                    <ListItem>
                        <Grid container item justifyContent='center'>
                            <Switch checked={searchContext.isAndSearch}
                                    color='secondary'
                                    onChange={searchContext.handleIsAndSearchChange} size="small"/> <Typography variant='body1'>What can I make with only?</Typography>

                        </Grid>
                    </ListItem>
                    <ListItem>
                        {data && <LiquorBarFilter entireBar={data}/>}
                    </ListItem>
                    <Divider/>
                </List>
            </Grid>
            {/*{menu?.subMenus?.map((subMenu: any, index: number) => {*/}
            {/*    switch (subMenu._type) {*/}
            {/*        case 'menuGroup':*/}
            {/*            const menuGroup: SanityMenuGroup = subMenu*/}
            {/*            return <MainMenuSubMenu key={index} menuGroup={menuGroup}/>*/}
            {/*        case 'menuItem':*/}
            {/*        default:*/}
            {/*            const menuItem: SanityMenuItem = subMenu*/}
            {/*            return <List style={{padding: 0}} key={menuItem.displayText}>*/}
            {/*                <ListItem href={menuItem.url ?? ""} className={classes.listItem} button>*/}
            {/*                    <Button variant='text' href={menuItem.isModalButton ? undefined : menuItem.url}*/}
            {/*                            onClick={menuItem.isModalButton ? () => {*/}
            {/*                                console.log()*/}
            {/*                                if (menuItem.isModalButton) {*/}
            {/*                                    modalContext.openModal && modalContext.openModal(menuItem.modalRef)*/}
            {/*                                }*/}
            {/*                            } : undefined}*/}
            {/*                            style={{*/}
            {/*                                paddingTop: DigitalResumeTheme.spacing(2.25),*/}
            {/*                                paddingLeft: DigitalResumeTheme.spacing(2),*/}
            {/*                                paddingBottom: DigitalResumeTheme.spacing(2.25),*/}
            {/*                                height: "100%",*/}
            {/*                                margin: 0*/}
            {/*                            }} fullWidth>*/}
            {/*                        <ListItemText primary={menuItem.displayText}/>*/}
            {/*                    </Button>*/}

            {/*                </ListItem>*/}
            {/*                <Divider/>*/}
            {/*            </List>*/}
            {/*    }*/}

            {/*})}*/}
        </Grid>
    );

    return (<Grid item>
            <Button onClick={toggleDrawer(anchor, true)}>
                <FilterList/>
            </Button>

            <Drawer
                className={classes.drawer}
                anchor={anchor} open={isDrawerOpen}
                onClose={toggleDrawer(anchor, false)}
            >
                <Grid container alignItems='center' justifyContent='space-between'
                      style={{

                          position: "absolute",
                          zIndex: 1000,
                          // paddingLeft: theme.spacing(4),
                          // paddingRight: theme.spacing(6),
                      }}>

                    <Grid item xs={3}>
                        {/*<FilterList/>*/}
                    </Grid>
                    <Grid item xs={1}><Button onClick={() => {
                        setIsDrawerOpen(false)
                    }}><Close color='primary' fontSize='large'/></Button></Grid>
                </Grid>
                <Grid container item justifyContent='center'>
                    {isLoading ? <Grid container item justifyContent='center'>
                        <Grid
                            item>
                            <CircularProgress/>
                        </Grid>
                    </Grid> : list(anchor)}
                </Grid>
            </Drawer>
        </Grid>
    )
}

export default FiltersMenu