const fs = require("fs");
const qrcode = require("qrcode");

const url = '1002';

const run = async () => {
  const QR = await qrcode.toDataURL(url);
  const htmlContent = `
  <div style="display: flex; justify-content: center; align-items: center;">
  <h2>This is your QR</h2>
  <img src="${QR}">
  </div>
  `;
  fs.writeFileSync("./index.html", htmlContent);
};

run();
