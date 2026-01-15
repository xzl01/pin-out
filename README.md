# Pin Diagram Visualizer

A modern web application for visualizing pin configurations of development boards, inspired by [Pinout.xyz](https://pinout.xyz).

## Features

- 📌 Interactive pin diagram visualization
- 🎨 Color-coded pins by type (Power, GPIO, Ground, etc.)
- 📝 JSON-based pin configuration
- 🔄 Live JSON editor with validation
- 📤 Upload custom JSON configurations
- 💡 Hover and click interactions for detailed pin information
- 🎯 Pre-loaded examples (Raspberry Pi, Arduino, ESP32)
- 🌓 Dark mode support
- 📱 Responsive design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## JSON Configuration Format

The application accepts JSON files with the following structure:

```json
{
  "name": "Board Name",
  "description": "Board description",
  "pins": [
    {
      "number": 1,
      "name": "Pin Name",
      "type": "Power|GPIO|Ground|Digital|Analog|Special|Input",
      "color": "#hex-color",
      "gpio": "GPIO number (optional)",
      "voltage": "3.3V|5V (optional)",
      "description": "Pin description",
      "functions": ["Function1", "Function2"]
    }
  ]
}
```

### Pin Types

- **Power**: Power supply pins (3.3V, 5V, etc.)
- **GPIO**: General Purpose Input/Output
- **Ground**: Ground pins
- **Digital**: Digital I/O pins
- **Analog**: Analog input pins
- **Special**: Special function pins (Reset, Enable, etc.)
- **Input**: Input-only pins

### Example

See `src/data/examples.js` for complete examples of Raspberry Pi, Arduino Uno, and ESP32 configurations.

## Usage

1. **Select a Pre-defined Example**: Choose from Raspberry Pi, Arduino Uno, or ESP32 from the dropdown
2. **Upload Custom JSON**: Click "Upload JSON" to load your own pin configuration
3. **Edit Configuration**: Modify the JSON in the editor panel (changes apply in real-time)
4. **Interact with Pins**: 
   - Hover over pins to see quick information
   - Click pins to select and view detailed information
   - View pin functions, GPIO numbers, and descriptions

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **Modern JavaScript (ES6+)**

## Project Structure

```
pin-out/
├── src/
│   ├── components/
│   │   ├── PinDiagram.jsx    # Main pin visualization component
│   │   ├── Pin.jsx            # Individual pin component
│   │   └── JsonEditor.jsx     # JSON configuration editor
│   ├── data/
│   │   └── examples.js        # Pre-defined board configurations
│   ├── lib/
│   │   └── utils.js           # Utility functions
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License

## Acknowledgments

Inspired by [Pinout.xyz](https://pinout.xyz) - an excellent resource for Raspberry Pi GPIO pinouts.
