import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'
import Countdown from "react-countdown";
import TransformHWTheme, {COLORS} from "../../../../theme/transform-hw/TransformHWTheme";

export const useStyles = makeStyles((theme: Theme) => ({
    counterSection: {
        height: "155px",
        width: "155px",
        borderRadius: "85px",
        backgroundColor: "rgba(16, 43, 136, .7)",
        border: `4px solid ${theme.palette.primary.main}`
    }
}))


interface IProps {
    launchDate: Date
}

const CountdownToLaunch: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(TransformHWTheme)
    const Completionist = () => <span>Site should be launched!</span>

    const smDown = useMediaQuery(TransformHWTheme.breakpoints.down('sm'))

    const pluralize = (subject: string) => {
        return subject + 's'
    }

    const CounterNumberRender = (props: { value: number, units: string }) => {
        return <Grid container item alignItems='center' justifyContent='center' direction='column'
                     className={classes.counterSection}>
            <Grid item><Typography variant='h1' color='primary'
                                   style={{textTransform: "uppercase"}}>{props.value}</Typography></Grid>
            <Grid item><Typography variant='h6' color='primary'
                                   style={{textTransform: "uppercase"}}>{props.value !== 1 ? pluralize(props.units) : props.units}</Typography></Grid>
        </Grid>
    }

    const renderer = (date: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        if (date.completed) {
            // Render a complete state
            return <Completionist/>;
        } else {
            // Render a countdown
            return (
                <Grid container item spacing={smDown ? 1 : 6} justifyContent='center'>
                    <Grid item xs={6} md={3} container justifyContent='center'>
                        <CounterNumberRender value={date.days} units={'day'}/>
                    </Grid>
                    <Grid item xs={6} md={3} container justifyContent='center'>
                        <CounterNumberRender value={date.hours} units={'hour'}/>
                    </Grid>
                    <Grid item xs={6} md={3} container justifyContent='center'>
                        <CounterNumberRender value={date.minutes}
                                             units={'minute'}/>
                    </Grid>
                    <Grid item xs={6} md={3} container justifyContent='center'>
                        <CounterNumberRender
                            value={date.seconds} units={'second'}/>
                    </Grid>
                </Grid>
            );
        }
    };

    return (
        <Grid item container justifyContent='center'>
                <Countdown date={props.launchDate} renderer={renderer}/>
        </Grid>
    )
}

export default CountdownToLaunch