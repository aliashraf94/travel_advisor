import React from 'react'
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './componenets/Header/Header';
import List from './componenets/List/List';
import Map from './componenets/Map/Map';
import PlaceDetails from './componenets/PlaceDetails/PlaceDetails';


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: '100%'}} >
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
