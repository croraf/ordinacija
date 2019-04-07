import React from 'react';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';


class MapContainer extends React.Component {

    state = {
        center: [45.815, 15.9819],
        zoom: 13,
        twoFingerDrag: false,
        animate: true,
        animating: false,
        zoomSnap: true,
        minZoom: 1,
        maxZoom: 18,
    };

    zoomIn = () => {
        this.setState({
            zoom: Math.min(this.state.zoom + 1, 18)
        });
    }

    zoomOut = () => {
        this.setState({
            zoom: Math.max(this.state.zoom - 1, 1)
        });
    }

    handleBoundsChange = ({ center, zoom, bounds, initial }) => {
        if (initial) {
            console.log('Got initial bounds: ', bounds);
        }
        this.setState({ center, zoom });
    }

    render() {

        const { center, zoom, animate, metaWheelZoom, twoFingerDrag, zoomSnap, 
            minZoom, maxZoom } = this.state;

        return (
            <div style={{width: '500px', border: '1px solid black'}}>
                <Map 
                    limitBounds='edge'
                    center={center}
                    zoom={zoom}
                    onBoundsChanged={this.handleBoundsChange}
                    animate={animate}
                    twoFingerDrag={twoFingerDrag}
                    zoomSnap={zoomSnap}
                    mouseEvents={true}
                    touchEvents={true}
                    minZoom={minZoom}
                    maxZoom={maxZoom}
                    defaultWidth={500}
                    height={500}
                    style={{border: '1px solid black'}}
                >
                    <Marker anchor={[45.815, 15.9819]} payload={1} onClick={({ event, anchor, payload }) => {}} />
                </Map>
            </div>
        
        );
    }

}

export {MapContainer};