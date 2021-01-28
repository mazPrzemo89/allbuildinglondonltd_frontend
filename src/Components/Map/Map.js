import React, { Fragment, Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

let mapStyles = {}

if (window.innerWidth <= 415) {
  mapStyles = {
    width: '100%',
    height: '300px',
  }
} else {
  mapStyles = {
    width: '80%',
    height: '500px',
  }
}

console.log(window.innerWidth)

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{
            lat: 51.298048,
            lng: 22.578868,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'All Building London ltd'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </Fragment>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer)
