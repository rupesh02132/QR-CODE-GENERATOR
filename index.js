
// Initialize QR Code
var qrcode = new QRCode("qrcode", {
  colorDark: "#000",
  colorLight: "#fff",
});

// Function to Generate QR Code
const makeCode = () => {
  var text = document.getElementById("text");

  if (!text.value) {
      alert("Please enter text or a URL");
      text.focus();
      return;
  }

  qrcode.makeCode(text.value);
};

// Function to Download QR Code
const downloadQRCode = () => {
  const qrCanvas = document.querySelector('#qrcode canvas');
  if (!qrCanvas) {
      alert('Please generate a QR code first!');
      return;
  }

  const imageUrl = qrCanvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'qrcode.png';
  link.click();
};

// Event Listeners
document.getElementById('generate').addEventListener('click', makeCode);
document.getElementById('download').addEventListener('click', downloadQRCode);

// Auto-generate on load
makeCode();

// Input Field Event Handlers
$("#text")
  .on("blur", makeCode)
  .on("keydown", function (e) {
      if (e.keyCode == 13) {
          makeCode();
      }
  });

