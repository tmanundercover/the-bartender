import {CssBaseline, Grid, Link, makeStyles, MuiThemeProvider, Theme, useTheme} from '@material-ui/core'
import React, {FunctionComponent, useState} from 'react'
import BlockContentLayoutContainer from '../../BlockContentLayoutContainer'
import cmsClient from '../../block-content-ui/cmsClient'
import BartenderTheme from "../../../theme/transform-hw/BartenderTheme";
import UnderConstruction from "./under-construction-page/UnderConstruction";
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import FourOhFour from "./error-page/FourOhFour";
import {useScrollPosition} from "../../../utils/useScrollPosition";
import LoadingPage from "./loading-page/LoadingPage";
import thwClient from "../thwClient";
import {redirect} from "react-router";
import {RoutesEnum} from "../../../RoutesEnum";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        height: "max-content",
        overflowY: "scroll"
    }
}))

export type PageLayoutProps = {}

const PageLayout: FunctionComponent<PageLayoutProps> = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [homePage, setHomePage] = React.useState<SanityTransformHwHomePage | undefined>()
    const [realizedContent, setRealizedContent] = React.useState<any[]>([])

    const {isLoading, isError, data, isRefetching} = thwClient.useFetchPageBySlugQuery()

    React.useEffect(() => {
        if (data)
            setHomePage(data[0])
    }, [data])

    React.useEffect(() => {
        // These Content sections are references and must be retrieved from Sanity
        console.log("Homepage changed", homePage)
        if(homePage && homePage.status === 404) {
            redirect(RoutesEnum.ERROR)
        }
        homePage?.pageContent?.content?.map && Promise.all(homePage?.pageContent?.content.map((contentBlock: any) => {
            return cmsClient.fetchRef(contentBlock).then((response) => {
                return response
            })
        })).then(contentRealized => {
            setRealizedContent(contentRealized)
        })
    }, [homePage])

    React.useEffect(() => {
            if(isError){
                redirect(RoutesEnum.ERROR)
            }
        }, [isError])

    const [hideOnScroll, setHideOnScroll] = useState(true)

    useScrollPosition(({prevPos, currPos}: any) => {
        const isShow = currPos.y > -100
        if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    }, [hideOnScroll])

    const PageLayout = () => {
        const theme = useTheme()
        return <Grid container direction='column' className={classes.root} justifyContent='space-between'>
            <Grid container item>
                <BlockContentLayoutContainer
                    isOpaque={hideOnScroll}
                    homePage={homePage}
                    content={realizedContent}/>
            </Grid>
            <Grid container item
                  alignContent='center'
                  alignItems='stretch'
                  style={{
                      backgroundColor: "white",
                      position: "static",
                      bottom: 0,
                      padding: theme.spacing(1)
                  }}
                  justifyContent='space-between'>
                <Grid item container alignContent='center' style={{paddingTop: theme.spacing(.75)}}>
                    <Link href='https://thehandsomestnerd.com' color='textPrimary' variant='subtitle2'>© 2022
                        TheHandsomestNerd, LLC.</Link>
                </Grid>

            </Grid>
        </Grid>
    }


    const PageContents = () => {
        if (isLoading || (realizedContent.length < 1 && !homePage?.underConstructionPageRef) || isRefetching)
            return <LoadingPage/>

        if (!homePage?.isUnderConstruction) {
            return <PageLayout></PageLayout>
        } else if (homePage.underConstructionPageRef) {
            return <UnderConstruction underConstructionPageRef={homePage.underConstructionPageRef}
                                      email={homePage?.email}/>
        }

        if (isError) {
            return <FourOhFour/>
        }

        return <FourOhFour/>
    }

    return (<MuiThemeProvider theme={BartenderTheme}>
        <CssBaseline/>
        {/*<MetaTagsComponent structuredData={homePage?.structuredData && homePage.structuredData[0]}*/}
        {/*                   title={homePage?.title ?? ''}*/}
        {/*                   description={homePage?.description ?? ''} imgSrc={homePage?.metaImage}/>*/}
        <PageContents/>
    </MuiThemeProvider>)
}

export default PageLayout