import React from "react";
import "./App.css";
import Tugas6 from "./Tugas6/Tugas6";
import Tugas7 from "./Tugas7/Tugas7";
import Tugas8 from "./Tugas8/Tugas8";
import Tugas9 from "./Tugas9/Tugas9";

function App() {
  return (
    <div className="App">
      <Tugas6 name="Hamidzan" />
      <Tugas7
        namaLengkap="Hamidzan Pranajanala Bhamakerti"
        email="hamidzan931@smk.belajar.id"
        kelas="XII Sija"
      />
      <Tugas8 />
      <Tugas9 />
    </div>
  );
}

export default App;
