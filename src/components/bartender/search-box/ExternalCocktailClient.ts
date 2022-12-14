import clientUtils from "../../transform-hw/pages/under-construction-page/clientUtils";

const search = async (searchTerm:string) =>{
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+searchTerm ?? "")
            .then((response: any) => {
                return clientUtils.processResponse(response, 'cocktaildbresponse');
            })
            .catch((e: any) => {
                // console.error(LOG, 'ERROR', 'error', e);
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject({attempt: Error(e)});
            })
    }

    const convertFromCocktailDbResultsToCocktails = (cocktailDbResults:any[]) =>{

        // const cocktailResults =
    }

    export default {search, convertFromCocktailDbResultsToCocktails}
