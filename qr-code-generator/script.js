function generateQR() {
  const text = document.getElementById("text").value.trim();
  const qrcodeContainer = document.getElementById("qrcode");

  qrcodeContainer.innerHTML = "";

  if (text === "") {
    alert("Lütfen bir metin girin!");
    return;
  }

  new QRCode(qrcodeContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}
