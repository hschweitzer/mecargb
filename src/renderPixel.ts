const htmlPixel = (
  nbRows: Number = 3,
  lengthRow: Number = 3,
  rows: Array<Array<string>>
) => {
  let pixel = document.createElement("div");
  pixel.classList.add(
    "grid",
    `grid-rows-${nbRows}`,
    `grid-cols-${lengthRow}`,
    "gap-1"
  );

  pixel.style.width = pixel.style.height = ".5cm";

  rows.forEach((row) => {
    row.forEach((subPixelValue) => {
      let subPixel: HTMLElement = document.createElement("div");
      subPixel.style.backgroundColor = subPixelValue;
      subPixel.classList.add("subpixel");
      subPixel.textContent = " ";

      pixel.appendChild(subPixel);
    });
  });

  return pixel;
};

export { htmlPixel };
