function generateNoiseTexture() {
  const size = 512;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;

  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;
  const grainIntensity = 100;
  const baseGray = 255;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      const index = (y * size + x) * 4;
      let seed = (x * 73856093) ^ (y * 19349663);
      seed = (seed ^ (seed >> 13)) * 1664525 + 1013904223;
      seed = seed ^ (seed >> 16);
      const random = ((seed & 0x7FFFFFFF) / 0x7FFFFFFF) * 2 - 1;
      let seed2 = ((x * 2) * 73856093) ^ ((y * 2) * 19349663);
      seed2 = (seed2 ^ (seed2 >> 13)) * 1664525 + 1013904223;
      const random2 = ((seed2 & 0x7FFFFFFF) / 0x7FFFFFFF) * 2 - 1;
      const grain = (random * 0.7 + random2 * 0.3) * grainIntensity;
      const gray = Math.floor(baseGray + grain);
      const clampedGray = Math.max(200, Math.min(255, gray));
      data[index] = clampedGray;
      data[index + 1] = clampedGray;
      data[index + 2] = clampedGray;
      data[index + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
  const dataURL = canvas.toDataURL();
  const style = document.createElement('style');
  style.textContent = `
    body::before {
      background-image: url('${dataURL}') !important;
      background-repeat: repeat !important;
      background-size: ${size}px ${size}px !important;
      image-rendering: auto !important;
      height: ${document.documentElement.scrollHeight}px !important;
    }
  `;
  document.head.appendChild(style);

  const updateGrainHeight = () => {
    const newHeight = document.documentElement.scrollHeight;
    style.textContent = style.textContent.replace(
      /height: \d+px/,
      `height: ${newHeight}px`
    );
  };
  const observer = new ResizeObserver(updateGrainHeight);
  observer.observe(document.body);
  window.addEventListener('resize', updateGrainHeight);
}
document.addEventListener('DOMContentLoaded', generateNoiseTexture);
