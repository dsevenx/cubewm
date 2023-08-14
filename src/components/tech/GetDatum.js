export function GetDatum(pDatum) {
  if (!pDatum) {
    return "";
  }
  return (
    pDatum.substring(8, 10) +
    "." +
    pDatum.substring(5, 7) +
    "." +
    pDatum.substring(0, 4)
  );
}

export default GetDatum;
