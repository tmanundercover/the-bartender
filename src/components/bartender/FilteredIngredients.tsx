import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Chip, Grid, Typography} from '@material-ui/core'
import {SanityCocktailIngredient} from "../../common/sanityIo/Types";
import apiClient from "../transform-hw/apiClient";
import SearchContext from "../../common/search-context/SearchContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    // liquorType: SanityLiquorType
}

const FilteredIngredients: FunctionComponent<IProps> = (props: IProps) => {
    const searchContext = useContext(SearchContext)
    const [filteredBarIngredients, setFilteredBarIngredients] = React.useState<SanityCocktailIngredient[]>([])
    const {data, refetch} = apiClient.useFetchFilteredIngredients()

    React.useEffect(() => {
        if (data) {
            setFilteredBarIngredients(data)
        }
    }, [data])

    React.useEffect(() => {
        refetch()
    }, [searchContext.searchFilters])

    return (<Grid container item style={{height: "300px"}}>
        {
            filteredBarIngredients.map((liquorBarItem: SanityCocktailIngredient, index) => {
                return <Chip color='primary' key={index} label={<Grid item ><Typography>{liquorBarItem.title}</Typography></Grid>}/>
            })
        }
    </Grid>)
}

export default FilteredIngredients