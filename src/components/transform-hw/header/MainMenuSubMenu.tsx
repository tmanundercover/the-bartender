import React, {FunctionComponent} from 'react'
import {Collapse, createStyles, Divider, List, ListItem, ListItemText} from '@material-ui/core'
import {makeStyles, Theme} from "@material-ui/core/styles";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import BartenderTheme from "../../../theme/transform-hw/BartenderTheme";
import {SanityMenuGroup} from "../../../common/sanityIo/Types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);


interface MainMenuSubMenuProps {
    menuGroup: SanityMenuGroup
}

const MainMenuSubMenu: FunctionComponent<MainMenuSubMenuProps> = ({menuGroup}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = (e: any) => {
        e.stopPropagation()
        setOpen(!open);
    };

    return (
        <List
            style={{padding: 0}}
            key={menuGroup.menuGroupTitle}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button style={{
                paddingTop: BartenderTheme.spacing(2.25),
                paddingBottom: BartenderTheme.spacing(2.25),
            }} onClick={handleClick}>
                <ListItemText primary={menuGroup.menuGroupTitle}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        menuGroup.links?.map((menuLink:any,index:number) => (
                            <ListItem key={index} button style={{
                                paddingTop: BartenderTheme.spacing(2.25),
                                paddingLeft: BartenderTheme.spacing(6),
                                paddingBottom: BartenderTheme.spacing(2.25),
                            }}>
                                <ListItemText primary={menuLink.displayText}/>
                            </ListItem>
                        ))
                    }
                </List>
            </Collapse>
            <Divider/>
        </List>
    );
}

export default MainMenuSubMenu