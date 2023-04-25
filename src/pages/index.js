import { useState } from "react";

import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

import { Flex } from "@chakra-ui/react";

export default function Home() {
  const [coordinates, setCoordinates] = useState({ lat: -23.5504, lng: -46.6339 });
  
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      width={'100vw'}
      height={'100vh'}
      maxWidth={'100vw'}
      maxHeight={'100vh'}
      position={'relative'}
    >
      {/* <Header />
      <List /> */}
      <Map coordinates={coordinates} setCoordinates={setCoordinates} />
    </Flex>
  )
}
