import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  design:{
    Width:'100%',
    height:50,
    backgroundColor: 'rgba(27, 19, 180)',
  },
  div:{
    marginBottom:theme.spacing(5),
    marginTop:theme.spacing(5),
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
    <>
        <Navbar />
        <div className={classes.div}>
        <Switch>
          <Route exact path="/" render={() => (
              <Home />
          )} />
        </Switch>
        </div>
      </>
    </BrowserRouter>
  )
};

export default App;