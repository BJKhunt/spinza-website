import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container,Paper } from '@material-ui/core';
import { Card, CardContent,CardActionArea,CardMedia } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image:{
        justifyContent:'center',
        height:410,
        width:1024,
        [theme.breakpoints.down('xs')]: {
            height:200,
            width:300
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height:370,
            width:700
        },
    }
}));

export default function NavBar() {
    const classes = useStyles();
    useEffect(() => {
    }, [])

    var items = ['1.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg']

    return (
        <>
        <Carousel autoplay interval={3000}
        NextIcon={<ArrowForwardIosSharpIcon />}
        PrevIcon={<ArrowBackIosSharpIcon />} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        <hr/>
        </>
    )
}

function Item(props)
{
    const classes = useStyles();
    const photo = require(`../../images/${props.item}`).default;
    console.log(photo);
    return (
        <Grid container direction="row" justifyContent="center">
            <img src={photo} alt="icon" className={classes.image}/>
        </Grid>
    )
}