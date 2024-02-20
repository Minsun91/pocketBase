import React from 'react';
import Click from "../src/click";

function openUrlInIncognito(url) {
    window.open(url, "_blank", "toolbar=0,location=0,menubar=0");
}

function App() {
    return (
        <>
            <Click />
        </>
    );
}
export default App;
