import GoogleMapReact from "google-map-react";
import "./Map.css"

export default function Map() {
  const location = {
    center: {
      lat: -23.57673454284668,
      lng: -46.58407211303711,
    },
    zoom: 17,
  };

  // https://stackoverflow.com/questions/41405343/adding-marker-to-google-maps-in-google-map-react
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: location.center,
      map,
      title: "Garbelini Funilaria e Pintura",
    });
    return marker;
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDOIPQaE89bcna8yrbnsMrFmC6HFas-TfI" }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  );
}
