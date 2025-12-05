// Initialize QR code with dark mode colors (white QR on dark background)
var qrcode = new QRCode("qrcode", {
  colorDark: "#ffffff",
  colorLight: "transparent",
  width: 200,
  height: 200,
  correctLevel: QRCode.CorrectLevel.H
});

const makeCode = () => {
  var Text = document.getElementById("text");

  if (!Text.value) {
    alert("Please enter a URL or text to generate QR code");
    Text.focus();
    return;
  }

  qrcode.makeCode(Text.value);
};

// Initialize QR code on page load
makeCode();

// Store the default value
const defaultUrl = "https://puneet-khandelwal-porfolio.vercel.app/";
let hasBeenCleared = false;

// Generate QR code on input change
$("#text")
  .on("focus", function () {
    // Clear the input if it still has the default value and hasn't been cleared yet
    if (!hasBeenCleared && this.value === defaultUrl) {
      this.value = "";
      hasBeenCleared = true;
    }
  })
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  })
  .on("input", function () {
    // Debounce for better performance
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      makeCode();
    }, 500);
  });

// Generate button click handler
document.getElementById("generateBtn")?.addEventListener("click", () => {
  makeCode();
});

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
  body.classList.add("light-mode");
}

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const currentTheme = body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
  
  // Update QR code colors based on theme
  const isLightMode = body.classList.contains("light-mode");
  qrcode = new QRCode("qrcode", {
    colorDark: isLightMode ? "#000000" : "#ffffff",
    colorLight: isLightMode ? "#ffffff" : "transparent",
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.H
  });
  makeCode();
});
