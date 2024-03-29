import './App.css'
import {Grid, useTheme} from '@material-ui/core'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query';
import FourOhFour from "./components/transform-hw/pages/error-page/FourOhFour";
import PageLayout from "./components/transform-hw/pages/PageLayout";
import {RoutesEnum} from "./RoutesEnum";
import 'prevent-pull-refresh';
import SnackbarProvider from "./common/modal-context/SnackbarProvider";
import SearchProvider from "./common/search-context/SearchProvider";


function App() {
    const queryClient = new QueryClient();
    const theme = useTheme()

    return (
        <QueryClientProvider client={queryClient}>
            <SnackbarProvider>
                <BrowserRouter>
                    <SearchProvider>
                            <Grid md={6} container item direction="column" alignItems="center"
                                  style={{
                                      backgroundColor: theme.palette.background.default,
                                      // minWidth: "423px",
                                      // height: "100vh",
                                      // width: "100vw"
                                  }}>
                                <Grid item container justifyContent='center'>
                                    <Routes>
                                        <Route path={RoutesEnum.BARTENDER_HOME} element={<PageLayout/>}/>
                                        <Route path={RoutesEnum.ERROR} element={<FourOhFour/>}/>
                                        <Route path={"/*"} element={<Navigate to={'/bartender-concierge/home'}/>}/>
                                    </Routes>
                                </Grid>
                            </Grid>
                    </SearchProvider>
                </BrowserRouter>
            </SnackbarProvider>
        </QueryClientProvider>
    )
}

export default App
