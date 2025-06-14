import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const mapOptions = {
  styles: [
    {
      elementType: "geometry",
      stylers: [{ color: "#1d2c4d" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#8ec3b9" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1a3646" }],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ color: "#4b6878" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#023e58" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#283d6a" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#304a7d" }],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [{ color: "#98a5be" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0e1626" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#4e6d70" }],
    },
  ],
};

const locationData = [
  {
    city: "Rajkot",
    position: { lat: 22.2733, lng: 70.7829 },
  },
  {
    city: "Ahmedabad",
    position: { lat: 23.0225, lng: 72.5714 },
  },
  {
    city: "Bengaluru",
    position: { lat: 12.9716, lng: 77.5946 },
  },
  {
    city: "Veraval",
    position: { lat: 20.9085, lng: 70.3606 },
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 21.7679,
  lng: 72.8716,
};

export function OfficeMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC4fDaz9e1DokMCTru8ldQzwQCuHVBnxRA">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        options={mapOptions}
        center={center}
        zoom={5}
      >
        {locationData.map((loc, idx) => (
          <Marker key={idx} position={loc.position} title={loc.city} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
