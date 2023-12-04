// https://stackoverflow.com/questions/41405343/adding-marker-to-google-maps-in-google-map-react

export const handleApiLoaded = ({ map, maps }) => {
  let marker = new maps.Marker({
    position: location.center,
    map,
    title: "Garbelini Funilaria e Pintura",
  });
  return marker;
};
