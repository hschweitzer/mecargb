import "./style.css";
import { htmlPixel } from "./renderPixel";

const pixelRows = [
  ["#ffff00", "#00ffff", "#ffff00"],
  ["#ffff00", "#00ffff", "#ffff00"],
  ["#ffff00", "#ffffff", "#000000"],
];

const pixelElement = htmlPixel(3, 3, pixelRows);

const app = document.querySelector<HTMLDivElement>("#app");

for (let i = 0; i < 12 * 12; i++) {
  app?.appendChild(pixelElement.cloneNode(true));
}
