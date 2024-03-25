import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { Marker } from "react-map-gl";
import { useState } from 'react';

const TOKEN = 'pk.eyJ1IjoiYXhvbnRlY2hsYWIiLCJhIjoiY2xtb3p5ODZ1MTJ4bTJqcG5yamV2aTAxOCJ9.KJiuYcot8bQ6qpHU0JbEsw'
const URL = 'https://api.mapbox.com/directions/v5/mapbox/driving-traffic/-122.42,37.78;-77.03,38.91'

function Mapakkk() {
    const [novoLuagr, setNovoLugar] = useState(null)
    const [viewPort, setViewPort] = useState({
        latitude: -25.546528439361037,
        longitude: -49.20364772101283,
        zoom: 9,
        // -25.546528439361037, -49.20364772101283
    });

    function quandoClicar(e) {
        const latitude = e.lngLat.lat;
        const longitude = e.lngLat.lng;

        setNovoLugar({
            lat: latitude,
            long: longitude
        });
    }

    console.log(novoLuagr);
    return (
        <div style={{ width: "100vw", height: "500px", zIndex: 999, backgroundColor: "red" }}>

            <ReactMapGl
                {...viewPort}
                mapboxAccessToken={TOKEN}
                transitionDuration="200"
                mapStyle="mapbox://styles/mapbox/streets-v12"
                onViewportChange={(viewPort) => {
                    setViewPort(viewPort)
                }}
                onClick={quandoClicar}
            >

                {novoLuagr ? (
                    <>
                        <Marker
                            latitude={novoLuagr?.lat}
                            longitude={novoLuagr?.long} 
                            offsetLeft={-3.5 * viewPort.zoom}
                            offsetTop={-7 * viewPort.zoom}
                        >
                            
                            {/* <Room style={{
                                fontSize: 7 * viewPort.zoom,
                                color: "tomate",
                                cursor: "pointer"
                            }}
                            /> */}
                        </Marker>
                    </>
                ) : null}
            </ReactMapGl>
        </div>
    )
}


export default Mapakkk; 