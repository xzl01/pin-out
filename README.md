# Pin-out Visualizer

A comprehensive GPIO pinout visualization tool for various single-board computers and development boards.

## Features

- Interactive pinout diagrams for multiple boards
- Visual pin highlighting with color coding
- Support for different board variants
- Hover and click interactions for pin details
- Clean and responsive UI
- 🌓 Dark mode support
- 📱 Responsive design

## Supported Boards

### Radxa Boards
- ROCK 2F (Variant F)
- ROCK 5A (Variant B)
- ROCK 5B (Variant B)
- ROCK 3B (Variant B)
- ROCK 2A (Variant A)

### Orion Boards
- Orion O6 (Variant O6)
- Orion O6N (Variant O6N)

### Arduino
- Arduino Uno (Variant A)

## Installation

```bash
# Clone the repository
git clone git@github.com:xzl01/pin-out.git
cd pin-out

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

1. Select a board from the dropdown menu
2. Hover over pins to see their details
3. Click on pins to highlight them
4. View pin information including:
   - Pin number
   - Pin name
   - GPIO number (if applicable)
   - Pin type (Power, Ground, GPIO, etc.)
   - Available functions

## Project Structure

```
pin-out/
├── src/
│   ├── assets/          # SVG files for different board variants
│   ├── components/      # React components
│   │   ├── GpioPinVisual.jsx    # Main pin visualization component
│   │   └── PinDiagram.jsx       # Pin diagram component
│   ├── data/           # Board configuration files
│   └── App.jsx         # Main application component
├── public/
└── dist/              # Build output
```

## Adding New Boards

To add a new board:

1. Add the board configuration in `src/data/[boardName].js`
2. Add the SVG file in `src/assets/gpio-40pin-variant-[variant].svg`
3. Update `GpioPinVisual.jsx` to support the new variant if needed

### Board Configuration Format

```javascript
export default {
  name: "Board Name",
  variant: "variant-id",  // Optional: specifies which SVG variant to use
  description: "Board description",
  pins: [
    {
      number: 1,
      name: "3.3V",
      type: "Power",
      color: "#f59e0b",
      voltage: "3.3V",
      description: "3.3V power output"
    },
    // ... more pins
  ]
}
```

## Pin Color Coding

- **Orange** (`#f59e0b`): 3.3V Power
- **Red** (`#dc2626`): 5V Power
- **Green** (`#10b981`): GPIO pins
- **Gray** (`#1f2937`): Ground
- **Blue** (`#3b82f6`): Analog pins
- **Purple** (`#8b5cf6`): Special function pins

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **Modern JavaScript (ES6+)**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the LGPL 3.0 or later license. See the [LICENSE](LICENSE) file for details.

## Attribution

The documentation and other non-code content in this repository is licensed under CC BY 4.0.

### Third-party Assets

- Pinout SVG files are custom-designed for this project
- Icons are from [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## Contact

For questions or suggestions, please open an issue on GitHub.
