import React, { Fragment, Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

let mapStyles = {}

if (window.innerWidth <= 415) {
  mapStyles = {
    width: '100%',
    height: '300px',
    marginBottom: '0 !important;',
  }
} else {
  mapStyles = {
    width: '80%',
    height: '30rem',
    marginBottom: '0 !important;',
  }
}

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
            lat: 51.35847401835117,
            lng: -0.09567829554754996,
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
  apiKey: 'AIzaSyDL4b3FXEA6JfGNavuL0Mf8iw6o33O2w10',
})(MapContainer)
