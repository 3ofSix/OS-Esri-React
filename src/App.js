//TODO Amend this for testing
// This is an example

import React from 'react';
// Individual imports for each component used in this sample

import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";
// import defineCustomElements to register custom elements with the custom elements registry
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });

const App = () => {
    
    return (
        <div>
            <h1>ArcGis Map example</h1>
            <ArcgisMap 
            itemId="d5dda743788a4b0688fe48f43ae7beb9"
            onArcgisViewReadyChange={(event) => {
                console.log("MapView ready", event);
            }}
            >
                <ArcgisSearch position="top-right"></ArcgisSearch>
                <ArcgisLegend position="bottom-left"></ArcgisLegend>
            </ArcgisMap>
        </div>
    );
};

export default App;