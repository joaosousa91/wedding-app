// import { useState, useEffect } from "react";
// import {
//     Button,
//     Heading,
//     Flex,
//     View,
//     Grid,
//     Divider,
// } from "@aws-amplify/ui-react";
// import { useAuthenticator } from "@aws-amplify/ui-react";
// import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import Card from "./widgets/Card";
import Countdown from "./widgets/Countdown"
import Separator from "./widgets/Separator";
import Local from "./widgets/Local"
// import { generateClient } from "aws-amplify/data";
// import outputs from "../amplify_outputs.json";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

// Amplify.configure(outputs);
// const client = generateClient({
//     authMode: "userPool",
// });

function App() {
    return <>
        <Card />
        <Countdown />
        <Separator />
        <Local />
    </>
}

export default App;
