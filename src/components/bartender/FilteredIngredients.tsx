import React, {FunctionComponent, SyntheticEvent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Chip, Grid, Typography} from '@material-ui/core'
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
    }, [searchContext.searchFilters, searchContext.ingredientFilters])

    const processIngredient = (filter: SanityCocktailIngredient) => {
        if (searchContext.isIngredientIncluded && !searchContext.isIngredientIncluded(filter))
            searchContext.addIngredientFilter && searchContext.addIngredientFilter(filter._id ?? "")
        else
            searchContext.removeIngredientFilter && searchContext.removeIngredientFilter(filter._id ?? "")
    }

    return (<Grid container item style={{height: "300px"}}>
        {
            filteredBarIngredients.map((liquorBarItem: SanityCocktailIngredient, index) => {
                return <Button key={index} onClick={() => processIngredient(liquorBarItem)}><Chip
                    color={searchContext.isIngredientIncluded && searchContext.isIngredientIncluded(liquorBarItem) ? 'secondary' : 'primary'}
                    label={<Grid
                        item><Typography>{liquorBarItem.title}</Typography></Grid>}/></Button>
            })
        }
    </Grid>)
}

export default FilteredIngredients