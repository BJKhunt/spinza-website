import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import logo from '../../images/index.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img:{
        height:50,
        [theme.breakpoints.down('xs')]: {
            height:20,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height:35,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'rgba(255, 255, 255,0.5)',
        marginBottom:theme.spacing(3),
        borderRadius: 20,
    },
    offset: theme.mixins.toolbar,
    appBarSolid: {
        backgroundColor: 'rgba(255, 255, 255)',
        marginBottom:theme.spacing(3),
        borderRadius: 20,
    },
    button:{
        marginRight:theme.spacing(8),
        color:'rgb(0,0,0)',
        fontSize:'18px',
        cursor: "pointer",
        '&:hover': {
            opacity: "0.3 !important"
        },
    }
}));

export default function NavBar() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={logo} alt="logo" className={classes.img}/>
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        Spinza Steel
                    </Typography>
                    <Button className={classes.button} size="large">Home</Button>
                    <Button className={classes.button}>Products</Button>
                    <Button className={classes.button}>About Us</Button>
                    <Button className={classes.button}>Contact US</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </div>
    );
}