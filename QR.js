const qrText = document.getElementById("qrText");
const qrCodeDiv = document.getElementById("qrCode");
const btn = document.getElementById("generateBtn");
const qrButtons = document.getElementById("qrButtons");
const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");
btn.addEventListener("click", () => {
  const text = qrText.value.trim();
  if (!text) {
    alert("Please enter a URL");
    return;
  }
  qrCodeDiv.innerHTML = "";

  QRCode.toCanvas(text, { width: 200 }, (err, canvas) => {
    if (err) {
      console.error(err);
      return;
    }
    qrCodeDiv.appendChild(canvas);
    qrButtons.style.display = "flex";

    downloadBtn.onclick = () => {
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = canvas.toDataURL();
      link.click();
    };

    shareBtn.onclick = () => {
      navigator.clipboard.writeText(text).then(() => {
        alert("Link copied to clipboard!");
      });
    };
  });
});
