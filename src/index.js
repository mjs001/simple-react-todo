import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
