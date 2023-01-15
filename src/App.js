import React, {useState, useEffect} from "react";
import HomePage from "./pages/HomePage";
import { Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";


function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage/>}/>
			</Routes>
		</div>
	);
}

export default App;
