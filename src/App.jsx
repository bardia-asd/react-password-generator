import { useState } from "react";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

function App() {

    return (
        <div className="container">
            <PasswordGenerator />
        </div>
    );
}

export default App;
