import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationOn from "@mui/icons-material/LocationOn";



function Map(props) {
    useEffect(() => {
  console.log(process.env.REACT_APP_GOOGLE_MAP_KEY);
}, []);
    const location = {
        address: props?.location,
        lat: props?.lat,
        lng: props?.lng,
        name: props?.projectName,
    };
    return (
        <>
            <div style={{ height: `${props.height}` }}>
                {location?.lat && (
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.REACT_APP_GOOGLE_MAP_KEY,
                        }}
                        center={location}
                        defaultZoom={16}
                    >
                        <div
                            className="pin d-flex"
                            lat={location?.lat}
                            lng={location?.lng}
                        >
                            <LocationOn
                                style={{ fontSize: "2.5rem", color: "red" }}
                            />
                            {location?.address && (
                                <p
                                    className="pin-text mb-0 pb-1 pt-1"
                                    style={{
                                        fontSize: "16px",
                                        padding: "11px",
                                        borderRadius: "8px",
                                        color: "white",
                                        backgroundColor: "rgba(0,0,0,0.3)",
                                    }}
                                >
                                    {location?.name}
                                </p>
                            )}
                        </div>
                    </GoogleMapReact>
                )}
            </div>
        </>
    );
}

export default Map;
