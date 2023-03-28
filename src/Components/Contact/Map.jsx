import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOn from "@mui/icons-material/LocationOn";
function Map(props) {
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
                            key: "AIzaSyB14oZ3M9HW-pYKIsIwCfyYhFKsg3FX6v0",
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
