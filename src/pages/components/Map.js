import GoogleMapReact from "google-map-react";

import { Box } from "@chakra-ui/react";

export default function Map({ coordinates, setCoordinates }) {
    return (
        <Box
            width={'full'}
            height={'full'}
        >
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={5}
                margin={[50,50,50,50]}
                options={''}
                onChange={() => {}}
                onChildClick={() => {}}
            >

            </GoogleMapReact>
        </Box>
    )
}