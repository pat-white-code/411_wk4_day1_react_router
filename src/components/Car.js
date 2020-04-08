import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import {Container, Paper, Chip, Typography, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../src/car.css';
// Container, Paper, Chip //

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(300),
            height: theme.spacing(15),
            }
        },
    title: {
        textTransform: 'capitalize',
    }
    }));

const Car = (props) => {
    let id = props.match.params.id;
    let car = cars.filter(car => car.id === parseInt(id))[0];
    const createChips = () => {
        let chips = []
        for(let property in car){
            chips.push(`${property}: ${car[property]}`)
        }
        return chips
    }
    const classes = useStyles();
    console.log('ID', id);
    console.log('CAR', car);
    return (
        <div className='car-container'>
            <Container maxWidth="sm">
                <Paper className={classes.root} elevation={3}>
                    <Typography className={classes.title} variant={'h4'}>
                        {car.Name}
                    </Typography>
                    <div>
                        {createChips().map((chip, index) => (
                            <Link key={index} to='/'>
                                <Chip 
                                    key={index} 
                                    label={chip} />
                            </Link>
                            ))}
                    </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Car