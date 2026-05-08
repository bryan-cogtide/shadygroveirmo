import Petition from "./Petition.jsx";

const globalStyle = document.createElement("style");
globalStyle.textContent = `*, *::before, *::after { box-sizing: border-box; } body { margin: 0; }`;
document.head.appendChild(globalStyle);

export default function App() {
  return <Petition />;
}
