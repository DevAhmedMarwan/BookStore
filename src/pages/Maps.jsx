import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const containerStyle = {
    width: "100%",
    height: "695px",
  };

  const defaultPosition = { lat: 24.7136, lng: 46.6753 };

  const [position, setPosition] = useState(defaultPosition);

  const goToMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setPosition({
            lat: 31.6941,
            lng: 38.6716,
          });
        },
        (error) => {
          console.error("خطأ في تحديد الموقع:", error);
          alert("لم نستطع الحصول على موقعك.");
        }
      );
    } else {
      alert("متصفحك لا يدعم تحديد الموقع.");
    }
  };

  return (
    <div className="relative">
      <LoadScript googleMapsApiKey="AIzaSyCBhjI2rfH-NojDq34LBlaeh5E-3YA8CdE">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={10}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          className="absolute top-2.5 right-15"
          onClick={goToMyLocation}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
          }}
        >
          انتقل لموقعي
        </button>
      </div>
    </div>
  );
};

export default Maps;
