import React, {FunctionComponent} from 'react'
import {v4 as uuidv4} from 'uuid'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Grid, Popover, Typography, useMediaQuery} from '@material-ui/core'
import {ArrowDropDown} from "@material-ui/icons";
import TransformHWTheme, {COLORS} from "../../../theme/transform-hw/TransformHWTheme";
import SubMenu from "./SubMenu";
import MediaQueries from "../../../utils/mediaQueries";
import {SanityMenuGroup, SanityMenuItem} from "../../../common/sanityIo/Types";
import mediaQueries from "../../../utils/mediaQueries";


export const useStyles = makeStyles((theme: Theme) => ({}))

interface MainMenuProps {
    subMenus: any[]
    includeMenuItems?: boolean
    includeMenuGroups?: boolean
    onlyButtons?: boolean
}

const FilteredMenuItems: FunctionComponent<MainMenuProps> = ({
                                                                 subMenus,
                                                                 onlyButtons,
                                                                 includeMenuItems,
                                                                 includeMenuGroups
                                                             }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClose = () => {
        setAnchorEl(null);
    };

    const mdDown = mediaQueries.useMdDown()

    return (<Grid item container justifyContent={mdDown?'flex-start':'flex-end'}>{
            subMenus?.map(
                (menuLink: any, index) => {
                    console.log(menuLink._type)
                    if (menuLink["_type"] === "menuItem" && (includeMenuItems || (onlyButtons && (menuLink.isOutlinedButton || menuLink.isContainedButton)))) {
                        const menuItem: SanityMenuItem = menuLink
                        return <Grid item key={uuidv4()}>
                            <Button href={menuItem.url ?? ""}
                                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : "primary"}
                                    style={{
                                        borderRadius: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.shape.borderRadius : 0,
                                        paddingLeft: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(4) : TransformHWTheme.spacing(2),
                                        paddingRight: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(4) : TransformHWTheme.spacing(2),
                                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(3) : 0,
                                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(2) : 0,
                                        height: menuItem.isOutlinedButton || menuItem.isContainedButton ? "48px" : "100%",
                                        color: menuItem.isOutlinedButton || menuItem.isContainedButton ? 'white' : TransformHWTheme.palette.secondary.main
                                    }}
                                    variant={menuItem.isContainedButton ? 'contained' : (menuItem.isOutlinedButton ? 'outlined' : 'text')}>
                                <Typography noWrap
                                            variant={menuItem.isOutlinedButton || menuItem.isContainedButton ? "button" : 'body2'}
                                            style={{fontSize: "18px"}}>{menuItem.displayText}</Typography>
                            </Button>
                        </Grid>
                    } else if (menuLink["_type"] === "menuGroup" && includeMenuGroups) {
                        const menuGroup: SanityMenuGroup = menuLink
                        return <Grid item key={uuidv4()} ref={() => {
                            console.log("anchor", anchorEl)
                            return anchorEl
                        }}>
                            <Button
                                key={uuidv4()}

                                color={"secondary"}
                                style={{
                                    borderRadius: 0,
                                    paddingLeft: TransformHWTheme.spacing(2),
                                    paddingRight: TransformHWTheme.spacing(3),
                                    height: "100%",
                                    color: TransformHWTheme.palette.secondary.main
                                }}
                                onClick={handleClick}
                                endIcon={<ArrowDropDown ></ArrowDropDown>}
                            >
                                <Typography variant='body2'
                                            style={{fontSize: "18px"}}>{menuGroup.menuGroupTitle}</Typography>
                            <Popover
                                // id={menuLink._type + "-" + menu + "-" + index}
                                id={uuidv4()}
                                open={open}
                                elevation={1}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                PaperProps={{style: {borderTopLeftRadius: 0, borderTopRightRadius: 0}}}
                                anchorOrigin={{
                                    vertical: anchorEl?.offsetHeight??0,
                                    horizontal: anchorEl?.offsetLeft??0,
                                }}
                            >
                                <Grid container item style={{backgroundColor: COLORS.GRAY}}>
                                    <SubMenu subMenu={menuGroup}/>
                                </Grid>
                            </Popover>
                            </Button>
                        </Grid>
                    }

                }) ?? <></>
        }</Grid>
    )
}

export default FilteredMenuItems