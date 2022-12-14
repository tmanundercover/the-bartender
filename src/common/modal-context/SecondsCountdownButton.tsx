import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {CircularProgress, Grid, IconButton, Typography} from '@material-ui/core'
import {Close} from "@material-ui/icons";
import SnackbarContext from "./SnackbarContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    date: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }
}

const SecondsCountdownButton: FunctionComponent<IProps> = ({date}: IProps) => {
    const snackbarContext = useContext(SnackbarContext)

    return (<IconButton
        aria-label="close"
        color='primary'
        onClick={snackbarContext.handleSnackbarClose}
    >
        {
            date.completed ?
                <Grid container justifyContent='center' alignContent='flex-end' alignItems='flex-end'
                      style={{position: "relative", minWidth: "32px", height: "48px"}}>
                    <Grid item>
                        <Typography color='textSecondary' variant={'subtitle2'}>closing...</Typography>
                    </Grid>
                </Grid> :
                <Grid
                    item
                    container
                    justifyContent='center'
                    alignContent='center'
                    style={{
                        position: "relative",
                        minWidth: "32px",
                        height: "32px"
                    }}>
                    <Grid item style={{
                        position: "absolute",
                        top: 3
                    }}>
                        <Grid
                            container
                            item
                            justifyContent='center'
                            alignContent='center'
                            alignItems='center'>
                            <Close color='secondary'/>
                        </Grid>
                    </Grid>
                    <Grid item style={{position: "absolute", top: 0}}>
                        <Grid container item justifyContent='center' alignContent='center' alignItems='center'>
                            <CircularProgress color='secondary' variant='determinate' size={30} value={(date.seconds / 15) * 100}/>
                        </Grid>
                    </Grid>
                </Grid>
        }</IconButton>)
}

export default SecondsCountdownButton