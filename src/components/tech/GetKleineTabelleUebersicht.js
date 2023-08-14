import React from "react";
import { GetDatum } from "./GetDatum";

export function GetKleineTabelleUebersicht(params) {
  if (!params || params.length === 0) {
    return <div></div>;
  } else {
    let lTabelle = params.map((param) => {
      if (param.wert === "") {
        return "";
      }
      if (param.typ === "datum") {
        return (
          <tr>
            <td>{param.key}:</td>
            <td className="kleine_tabelle_uebersicht_wert">
              {GetDatum(param.wert)}
            </td>
          </tr>
        );
      } else if (param.typ === "langtext") {
        return (
          <>
            <tr>
              <td>{param.key}:</td>
            </tr>
            <tr>
              <td className="kleine_tabelle_uebersicht_wert">{param.wert}</td>
            </tr>
          </>
        );
      } else {
        return (
          <tr>
            <td>{param.key}:</td>
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
