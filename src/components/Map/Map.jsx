import GoogleMapReact from "google-map-react";
import "./Map.css"
import { handleApiLoaded } from "./Map.utils"

export default function Map() {
  const location = {
    center: {
      lat: -23.57673454284668,
      lng: -46.58407211303711,
    },
    zoom: 17,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map" data-testid="map">
      <GoogleMapReact
        defaultCenter={location.center}
        defaultZoom={location.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleApiLoaded}
      />
    </div>
  );
}
