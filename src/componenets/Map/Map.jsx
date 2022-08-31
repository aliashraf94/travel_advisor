import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './styles'


const Map = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = { lat: 41.3874, lng: 2.1686 }

    return (
        <div className={classes.mapContainer} >
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBlkGLtPF_q7VRePyx1r8kZpvCpcrQcD_4" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;