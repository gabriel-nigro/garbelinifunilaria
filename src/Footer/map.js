import GoogleMapReact from "google-map-react";

export default function SimpleMap() {
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
    <div style={{ height: "25vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  );
}
