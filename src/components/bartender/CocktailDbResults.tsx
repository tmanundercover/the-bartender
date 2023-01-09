import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Chip, Grid, Typography} from '@material-ui/core'
import {CocktailDbResultType} from "../../common/sanityIo/Types";
import FlashCardContext from "./flash-card/flash-card-context/FlashCardContext";
import SnackbarContext from "../../common/modal-context/SnackbarContext";
import {useLocation} from "react-router-dom";
import firebaseAnalyticsClient from "../../common/firebase/FirebaseAnalyticsClient";
import SearchContext from "../../common/search-context/SearchContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps { }

const CocktailDbResults: FunctionComponent<IProps> = (props:IProps) => {
    const snackBar = useContext(SnackbarContext)
    const location = useLocation()

    const searchContext = useContext(SearchContext)

    const getIngredientsFromCocktailDbCocktail = (cocktailDbCocktail: CocktailDbResultType) => {
        const numIngredients = [...Array(10).keys()]

        return numIngredients.map((ingredientNumber: number) => {
            return <Grid container item spacing={1}>
                <Grid item>
                    <Typography variant={"subtitle2"}>{cocktailDbCocktail["strMeasure" + ingredientNumber]}</Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant={"subtitle2"}>{cocktailDbCocktail["strIngredient" + ingredientNumber]}</Typography>

                </Grid>
            </Grid>
        })

    }

    const openNotification = (cocktailDbResult: CocktailDbResultType) => {
        const snack = <Grid container spacing={2}>
            <Grid item container xs={12}>
                <img src={cocktailDbResult.strDrinkThumb} height={200}/>
            </Grid>
            <Grid item container xs={12}>
                <Typography variant={"body2"}>{cocktailDbResult.strDrink}</Typography>
            </Grid>
            <Grid item container xs={12}>
                <Typography variant={"subtitle2"}>{
                    cocktailDbResult.strGlass
                }</Typography>
            </Grid>
            <Grid item container xs={12}>
                {
                    getIngredientsFromCocktailDbCocktail(cocktailDbResult)
                }
            </Grid>
            <Grid item container xs={12}>
                <Typography variant={"subtitle2"}>{
                    cocktailDbResult.strInstructions
                }</Typography>
            </Grid>
            <Grid item container xs={12}>
                {
                    <Chip size='small' label={cocktailDbResult.strCategory}/>
                }
            </Grid>
            <Grid item container xs={12}>
                {
                    cocktailDbResult.strTags?.split(',')?.map((tag) => {
                        return <Chip size='small' label={tag}></Chip>
                    })
                }
            </Grid>

        </Grid>

        snackBar.openSnackbar && snackBar.openSnackbar(snack)
        cocktailDbResult && firebaseAnalyticsClient.analyticsPageView(
            location.pathname,
            location.search,
            `${cocktailDbResult.strDrink} | Cocktail from cocktailDb`)
    }

    const flashCardContext = useContext(FlashCardContext)
    return (<Grid item container spacing={1}>
        {
            searchContext.additionalResults?.map((cocktailDbResult: CocktailDbResultType) => {
                return <Grid item><Chip onClick={() => openNotification(cocktailDbResult)}
                                        label={cocktailDbResult.strDrink}></Chip></Grid>
            })
        }
    </Grid>)
}

export default CocktailDbResults