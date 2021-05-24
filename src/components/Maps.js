import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';


export class Maps extends React.Component {
    render() {
        const style = {
            maxWidth: "100%",
            height: "100%",

        };
        const containerStyle = {
            maxWidth: "700px",
            height: "500px",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)"
        };
        return (
            <div>
                <Map
                    google={this.props.google}
                    style={style}
                    containerStyle={containerStyle}
                    zoom={8}
                    initialCenter={{ lat: 43.32708986088349, lng: 45.69223522140019 }}
                >
                    <Marker position={{ lat: 43.32708986088349, lng: 45.69223522140019 }} />
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD1u0db8_AaJ8FlRJRj9l0aQR4v0NCYg2M'
})(Maps);