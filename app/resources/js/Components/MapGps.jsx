import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

const MapGPS  = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXhvbnRlY2hsYWIiLCJhIjoiY2xtb3p5ODZ1MTJ4bTJqcG5yamV2aTAxOCJ9.KJiuYcot8bQ6qpHU0JbEsw';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/standard',
            center: [-49.20523,-25.56354],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions:{
                    enableHighAccuracy:true
                },
                trackUserLocation:true,
                showUserHeading:true
            })
        )

        return () => map.remove();
    }, []);

    return <div id="map" style={{  top: 0, bottom: 0, width: '100%', height:'100%', borderRadius:'10px'}} />;
};

export default MapGPS ;
