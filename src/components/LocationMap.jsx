import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./styles/map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function LocationMap({ coordinates, name }) {
  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={13}
      className="map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[coordinates.lat, coordinates.lng]}>
        <Popup>{name}'s location</Popup>
      </Marker>
    </MapContainer>
  );
}
export default LocationMap;
