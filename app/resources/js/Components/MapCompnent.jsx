import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Mapakkk = () => {
    useEffect(() => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiYXhvbnRlY2hsYWIiLCJhIjoiY2xtb3p5ODZ1MTJ4bTJqcG5yamV2aTAxOCJ9.KJiuYcot8bQ6qpHU0JbEsw';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [ -25.5307,  -49.1958],
            minZoom: 2,
            zoom: 2
        });

        map.on('load', () => {
  
            map.addSource('counties', {
                'type': 'vector',
                'url': 'mapbox://mapbox.82pkq93d'
            });

            map.addLayer(
                {
                    'id': 'counties',
                    'type': 'fill',
                    'source': 'counties',
                    'source-layer': 'original',
                    'paint': {
                        'fill-outline-color': 'rgba(0,0,0,0.1)',
                        'fill-color': 'rgba(0,0,0,0.1)'
                    }
                },
                'building'
            );

            map.addLayer(
                {
                    'id': 'counties-highlighted',
                    'type': 'fill',
                    'source': 'counties',
                    'source-layer': 'original',
                    'paint': {
                        'fill-outline-color': '#484896',
                        'fill-color': '#6e599f',
                        'fill-opacity': 0.75
                    },
                    'filter': ['in', 'FIPS', '']
                },
                'building'
            );

            map.on('click', (e) => {
                const bbox = [
                    [e.point.x - 5, e.point.y - 5],
                    [e.point.x + 5, e.point.y + 5]
                ];
                const selectedFeatures = map.queryRenderedFeatures(bbox, {
                    layers: ['counties']
                });
                const fips = selectedFeatures.map(
                    (feature) => feature.properties.FIPS
                );
        
                map.setFilter('counties-highlighted', ['in', 'FIPS', ...fips]);
            });
        });

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });

        map.addControl(geocoder);

        return () => map.remove();
    }, []);

    return (
        <div id="map" style={{ top: 0, bottom: 0, width: "100%", height: 500, backgroundColor:'blue' }}/>
      );
};

export default Mapakkk;
