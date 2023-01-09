import React, {FunctionComponent, useEffect} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {AppBar, Grid, Hidden, withWidth} from '@material-ui/core'
import BartenderTheme, {COLORS} from "../../../theme/transform-hw/BartenderTheme";
import Logo from "../logo/Logo";
import mediaQueries from "../../../utils/mediaQueries";
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../filtered-menu-items/FilteredMenuItems";
import clsx from "clsx";
import {SanityMenuContainer} from "../../../common/sanityIo/Types";
import apiClient from "../apiClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 'max-content',
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: theme.spacing(4)
    },
    opaque: {
        backgroundColor: `${theme.palette.primary.main} !important`,
    }
}))

export type HeaderProps = {
    menuSlug?: string
    isOpaque?: boolean
    updateIsLoading?: (value:boolean) => void
}

const ThwHeader: FunctionComponent<HeaderProps> = (props) => {
    const classes = useStyles()

    const { data } = apiClient.useFetchMenuBySlugQuery(props.menuSlug ?? "")

    useEffect(()=>{
        props.updateIsLoading && props.updateIsLoading(!data)
    }, [data])

    const mdDown = mediaQueries.useMdDown()

    return (
        <AppBar className={clsx({[classes.opaque]: !props.isOpaque && !mdDown}, classes.root)}>{data?.title ?
            <Grid item xs={12} container justifyContent="space-between" spacing={mdDown ? 3 : 0}>
                <Grid item container xs={2} md={2} lg={4} justifyContent='flex-start'>
                    {
                        data?.logoImageSrc && <Logo logoImageSrc={data.logoImageSrc}/>
                    }
                </Grid>
                <Grid item container xs={10} md={10} lg={8} justifyContent='space-between'>
                    {/*// @ts-ignore*/}
                    <Hidden xsDown>
                        <Grid xs={4} md={10} lg={12} container item justifyContent='flex-end'
                              alignItems='stretch'
                              style={{
                                  height: "100%",
                                  paddingRight: mdDown ? BartenderTheme.spacing(0) : BartenderTheme.spacing(4)
                              }}>
                            <FilteredMenuItems
                                bgColor={!props.isOpaque && !mdDown ? BartenderTheme.palette.primary.main : COLORS.TRANSPARENTWHITE}
                                 subMenus={data.subMenus ?? []} onlyButtons={mdDown}
                                includeMenuItems={!mdDown} includeMenuGroups={!mdDown}/>
                        </Grid>
                    </Hidden>
                    {/*// @ts-ignore*/}
                    <Hidden lgUp>
                        <Grid item xs={12} sm={2} container justifyContent='flex-end'>
                            <Grid container item
                                  justifyContent='flex-end'
                                  alignItems='center'
                            >
                                <Grid item>
                                    <MainMenu menu={data} anchor='top'/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            : <></>
        }</AppBar>
    )
}

export default ThwHeader