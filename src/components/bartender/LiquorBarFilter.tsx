import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Chip, Grid, Typography} from '@material-ui/core'
import {SanityCocktailIngredient, SanityCocktailType, SanityLiquorType} from "../../common/sanityIo/Types";
import apiClient from "../transform-hw/apiClient";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import SearchContext from "../../common/search-context/SearchContext";
import FilteredIngredients from "./FilteredIngredients";
import {Close} from "@material-ui/icons";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    entireBar?: SanityCocktailIngredient[]
}

const LiquorBarFilter: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const [theLiquor, setTheLiquor] = React.useState<SanityCocktailIngredient[]>([])
    const [liquorTypes, setLiquorTypes] = React.useState<SanityLiquorType[]>([])

    const {data} = apiClient.useFetchAllLiquorTypes()

    React.useEffect(() => {
        if (data) {
            setLiquorTypes(data)
        }
    }, [data])


    // React.useEffect(() => {
    //     if (props.entireBar) {
    //         const justLiquorFromTheBar = props.entireBar.filter((ingredient: SanityCocktailIngredient) => {
    //             return ingredient.isLiquor
    //         })
    //         setTheLiquor(justLiquorFromTheBar)
    //     }
    // }, [props.entireBar])
    const searchContext = useContext(SearchContext)

    return (<Grid container item>
        <Grid item>
            <Typography>Menu({searchContext.searchFilters?.length})</Typography>
        </Grid>
        <Grid container item style={{height: "50px", overflowX: 'scroll'}} direction='column'>
            {searchContext.searchFilters?.map((filter) => <Typography>
                {
                    liquorTypes.filter((liqType) => {
                        return liqType._id === filter
                    }).map((filteredLiqType) => {
                        return <Typography onClick={()=>searchContext.removeFilter && searchContext.removeFilter(filteredLiqType._id)}><Chip label={<Grid container item alignItems='center' alignContent='center'><Typography>{filteredLiqType.title}</Typography><Close fontSize='small'/></Grid>}/></Typography>
                    })
                }
            </Typography>)}
        </Grid>
        <Grid item>
            <Typography>Store({props.entireBar?.length})</Typography>
        </Grid>
        <Grid item container style={{height: "170px", overflowX: "scroll"}} direction='column'>
            {
                liquorTypes.map((liquorTypes: SanityLiquorType, index) => {
                    return <Grid item xs={4}>

                        <Grid container key={index} onClick={() => searchContext.addFilter && searchContext.addFilter(liquorTypes._id ?? "")}>
                            <Grid container item justifyContent='center'>
                                <img width={100} src={urlFor(liquorTypes.imageSrc ?? "").url() ?? ""}/>
                            </Grid>
                            <Grid container item justifyContent='center'>
                                <Typography align='center'>{liquorTypes.title}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                })
            }
        </Grid>
        <Grid container item>
            <FilteredIngredients/>
        </Grid>

    </Grid>)
}

export default LiquorBarFilter