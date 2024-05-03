import React from "react";
import "./App.css";
import Tugas6 from "./Tugas6/Tugas6";
import Tugas7 from "./Tugas7/Tugas7";

function App() {
  return (
    <div className="App">
      <Tugas6 name="Hamidzan" />
      <Tugas7
        namaLengkap="Hamidzan Pranajanala Bhamakerti"
        email="hamidzan931@smk.belajar.id"
        kelas="XII Sija"
      />
    </div>
  );
}

export default App;
