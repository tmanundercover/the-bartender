import React, {FunctionComponent, PropsWithChildren, useContext, useMemo,} from 'react';
import SnackbarContext from './SnackbarContext';
import {CircularProgress, Grid, IconButton, LinearProgress, Slide, Snackbar, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import Countdown from "react-countdown";
import GridItem
    from "@sanity/types/parts/part.@sanity/components/build-snapshot/__legacy/@sanity/components/lists/grid/GridItem";
import SecondsCountdownButton from "./SecondsCountdownButton";

type IProps = {
    setLoginSnackbar?: (isOpen: boolean) => void
    setSnackbarMessage?: (message: string) => void
};

export interface SnackbarMessage {
    message: string;
    key: number;
}

const SnackbarProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false)
    const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>([]);
    const [messageInfo, setMessageInfo] = React.useState<SnackbarMessage | undefined>(
        undefined,
    );

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({...snackPack[0]});
            setSnackPack((prev) => (prev.slice(1)));

            setSnackbarOpen(true);
        } else if (snackPack.length && messageInfo && snackbarOpen) {
            // Close an active snack when a new one is added
            setSnackbarOpen(false);
        }
    }, [snackPack, messageInfo, snackbarOpen]);

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false)
    }

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    const openSnackbar = (message: any) => {
        setSnackPack((prev) => [...prev, {message, key: new Date().getTime()}]);
        setSnackbarOpen(true)
    }

    const newValue = useMemo(
        () => ({
            openSnackbar,
            handleSnackbarClose
        }),
        []
    );
    return (
        <SnackbarContext.Provider value={newValue}>
            <Grid container item>
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                TransitionProps={{onExited: handleExited}}
                open={snackbarOpen}
                autoHideDuration={15000}
                onClose={handleSnackbarClose}
                message={messageInfo ? messageInfo.message : undefined}
                action={
                    <Grid item container alignContent='center' alignItems='center'>
                        <Grid item>
                            <Countdown
                                date={(new Date(Date.now() + 14000))}
                                renderer={
                                    (date) => (<SecondsCountdownButton date={date}/>)
                                }
                            />
                        </Grid>
                    </Grid>
                }
            />
            </Grid>
            <Grid container item>
            {props.children}
            </Grid>
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;
