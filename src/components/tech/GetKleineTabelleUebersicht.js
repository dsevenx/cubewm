import React from "react";
import { GetDatum } from "./GetDatum";
import "./GetKleineTabelleUebersicht.css";

export function GetKleineTabelleUebersicht(params) {
  if (!params || params.length === 0) {
    return <div></div>;
  } else {
    let lTabelle = params.map((param) => {
      if (param.key === "") {
        return "";
      }
      if (param.typ === "datum") {
        return (
          <tr className="zellenabstand_normal">
            <td className="zellenabstand_normal">{param.key}:</td>
            <td className="zellenabstand_normal kleine_tabelle_uebersicht_wert">
              {GetDatum(param.wert)}
            </td>
          </tr>
        );
      } else if (param.typ === "zahl") {
        return (
          <tr className="zellenabstand_normal">
            <td className="zellenabstand_normal">{param.key}:</td>
            <td className="zellenabstand_normal kleine_tabelle_uebersicht_wert">
              {param.wert}
            </td>
          </tr>
        );
      } else if (param.typ === "texto") {
        return (
          <tr className="zellenabstand_normal">
            <td className="zellenabstand_normal">{param.key}</td>
            <td className="zellenabstand_normal kleine_tabelle_uebersicht_wert"></td>
          </tr>
        );
      } else if (param.typ === "text") {
        return (
          <tr>
            <td>{param.key}</td>
            <td className=" kleine_tabelle_uebersicht_wert"></td>
          </tr>
        );
      } else if (param.wert === "") {
        return (
          <tr>
            <td>{param.key}</td>
            <td></td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>{param.key}</td>
            <td className="kleine_tabelle_uebersicht_wert">{param.wert}</td>
          </tr>
        );
      }
    });

    return (
      <div className="kleine_tabelle_uebersicht">
        <table>
          <tbody>{lTabelle}</tbody>
        </table>
      </div>
    );
  }
}
