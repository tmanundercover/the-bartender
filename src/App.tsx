import './App.css'
import {Grid} from '@material-ui/core'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import React from 'react'
import TransformHWLayout from "./components/transform-hw/pages/TransformHWLayout";
import {QueryClient, QueryClientProvider} from 'react-query';
import TransformHWTheme from "./theme/transform-hw/TransformHWTheme";
import FourOhFour from "./components/transform-hw/pages/error-page/FourOhFour";

export enum RoutesEnum {
    TRANSFORM_HW = "/transformative-healing-and-wellness/:pageSlug",
    COMING_SOON = "/transformative-healing-and-wellness/:pageSlug",
    ERROR = '/error'
}

function App() {
    const queryClient = new QueryClient();

    // useEffect(() => {
    //     redirect('/transformative-healing-and-wellness/coming-soon')
    // }, [])

    return (
        <QueryClientProvider client={queryClient}>

            <BrowserRouter>
                <Grid container item direction="column" alignItems="center"
                      style={{backgroundColor: TransformHWTheme.palette.background.default, overflow: "scroll"}}>
                    <Grid item>
                        <Routes>
                            <Route path={RoutesEnum.TRANSFORM_HW} element={<TransformHWLayout/>}/>
                            <Route path={RoutesEnum.ERROR} element={<FourOhFour/>}/>
                            <Route path={"/*"} element={<Navigate to={'/transformative-healing-and-wellness/coming-soon'} />}/>
                        </Routes>
                    </Grid>
                </Grid>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
