import "../App.css";
import React from "react";

function TugasPertama(props) {
  return (
    <div className="box">
      <h1 className="title">Hi, Saya {props.name}</h1>
      <hr></hr>
      <p className="paragraph">
        Saya dari Kelas 12 sudah berhasil menginstall React
      </p>
    </div>
  );
}

export default TugasPertama;
