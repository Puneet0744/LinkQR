# 🔗 LinkQr - Modern QR Code Generator

<div align="center">

A beautiful, modern, and eye-catching QR code generator web application with dark mode support. Generate QR codes instantly from URLs or text with a sleek, responsive design.


[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Features in Detail](#-features-in-detail)
- [Browser Support](#-browser-support)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI** | Beautiful gradient effects, glassmorphism, and smooth animations |
| 🌙 **Dark/Light Mode** | Toggle between themes with persistent preference |
| ⚡ **Real-time** | QR codes update automatically as you type |
| 📱 **Responsive** | Works seamlessly on all devices |
| 🚀 **Fast** | No backend required, runs entirely in the browser |
| 💾 **Smart Input** | Auto-clears default URL when clicked |

</div>

- 🎨 **Modern UI Design** - Beautiful gradient effects, glassmorphism, and smooth animations
- 🌙 **Dark/Light Mode** - Toggle between dark and light themes with persistent preference
- ⚡ **Real-time Generation** - QR codes update automatically as you type (with debouncing)
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Easy to Use** - Simple, intuitive interface - just enter your URL or text
- 🚀 **Fast & Lightweight** - No backend required, runs entirely in the browser
- 💾 **Auto-clear Input** - Default URL clears automatically when you click to enter your own
- 🎭 **Animated Background** - Dynamic blob animations for visual appeal

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, animations, and gradients
- **JavaScript (Vanilla)** - Core functionality
- **jQuery** - DOM manipulation (via CDN)
- **QRCode.js** - QR code generation library (via CDN)
- **Google Fonts** - Inter font family

### Screenshots
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/090d901a-2286-4dd4-a6db-4a7010860ede" />

<!-- Add your screenshots here -->
<!-- ![Dark Mode](screenshots/dark-mode.png)
![Light Mode](screenshots/light-mode.png) -->

## 📦 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, or Opera)
- Git (optional, for cloning the repository)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Puneet0744/LinkQR.git
   cd LinkQR
   ```
   
   Or [download as ZIP](https://github.com/yourusername/QR-Code-Generator/archive/refs/heads/main.zip)

2. **Open the project**
   
   **Option 1:** Direct opening
   - Simply double-click `index.html` to open it in your default browser
   
   **Option 2:** Local development server (recommended)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   
   # Using VS Code Live Server extension
   # Right-click index.html > Open with Live Server
   ```

3. **Access the application**
   - If using a server: Navigate to `http://localhost:8000`
   - If opened directly: The file will open in your browser

## 🚀 Usage

1. **Enter your content**
   - Type a URL (e.g., `https://example.com`) or any text in the input field
   - The default URL will automatically clear when you click on the input

2. **Generate QR Code**
   - The QR code generates automatically as you type
   - Or click the "Generate" button
   - Or press Enter after typing

3. **Toggle Theme**
   - Click the sun/moon icon in the top-right corner to switch between dark and light modes
   - Your preference is saved in localStorage

4. **Scan the QR Code**
   - Use any QR code reader app on your phone to scan the generated code
   - The QR code adapts its colors based on the current theme

## 📁 Project Structure

```
QR-Code-Generator/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet with dark/light mode support
├── index.js            # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Features in Detail

### Dark Mode
- Default dark theme with modern color palette
- Smooth transitions when switching themes
- Theme preference saved in browser localStorage
- QR code colors adapt automatically to the theme

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Adaptive layout and typography

### Performance
- Debounced input for optimal performance
- Lightweight dependencies (CDN-based)
- Fast QR code generation
- Smooth animations with CSS transitions

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📝 Customization

### Changing Default URL
Edit the `value` attribute in `index.html`:
```html
<input id="text" type="text" value="YOUR_DEFAULT_URL" />
```

### Adjusting QR Code Size
Modify the `width` and `height` in `index.js`:
```javascript
var qrcode = new QRCode("qrcode", {
  width: 200,  // Change this
  height: 200, // Change this
  // ...
});
```

### Customizing Colors
Edit CSS variables in `style.css`:
```css
:root {
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  /* ... */
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/QR-Code-Generator/issues).

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, or
   git clone https://github.com/yourusername/QR-Code-Generator.git
   ```

2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- 🐛 **Bug Reports:** Use the [issue tracker](https://github.com/yourusername/QR-Code-Generator/issues) to report bugs
- 💡 **Feature Requests:** Feel free to suggest new features
- 📝 **Code Style:** Follow the existing code style
- ✅ **Testing:** Test your changes before submitting
- 📖 **Documentation:** Update README.md if needed

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Enhance UI/UX
- ⚡ Optimize performance
- 🔧 Fix issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Puneet Khandelwal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Puneet Khandelwal**

- 🌐 Portfolio: [puneet-khandelwal-porfolio.vercel.app](https://puneet-khandelwal-porfolio.vercel.app/)
- 💼 GitHub: [@Puneet0744](https://github.com/Puneet0744)
- 📧 Email: puneetkh16@gmail.com

## ⭐ Show your support

Give a ⭐️ if you like this project!

<div align="center">

### Made with ❤️ by Puneet Khandelwal

[⬆ Back to Top](#-linkqr---modern-qr-code-generator)

</div>

## 🙏 Acknowledgments

- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - QR code generation library
- [jQuery](https://jquery.com/) - JavaScript library
- [Google Fonts](https://fonts.google.com/) - Inter font family


