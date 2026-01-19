import { useState } from 'react'
import PinDiagram from './components/PinDiagram'
import JsonEditor from './components/JsonEditor'
import { Upload, Github } from 'lucide-react'
import { examplePinouts } from './data'

function App() {
  const [pinConfig, setPinConfig] = useState(examplePinouts.rock5b)
  const [selectedExample, setSelectedExample] = useState('rock5b')

  const handleJsonChange = (newConfig) => {
    try {
      const parsed = JSON.parse(newConfig)
      setPinConfig(parsed)
      setSelectedExample('custom')
    } catch (error) {
      console.error('Invalid JSON:', error)
    }
  }

  const handleExampleChange = (exampleKey) => {
    setSelectedExample(exampleKey)
    setPinConfig(examplePinouts[exampleKey])
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result)
          setPinConfig(json)
          setSelectedExample('custom')
        } catch (error) {
          alert('Invalid JSON file')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                Pin Diagram Visualizer
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Interactive pin configuration viewer
              </p>
            </div>
            <a
              href="https://github.com/xzl01/pin-out"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="View on GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="space-y-4 sm:space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                Pin Diagram
              </h2>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  value={selectedExample}
                  onChange={(e) => handleExampleChange(e.target.value)}
                  className="w-full sm:w-auto px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="raspberryPi">Raspberry Pi 40-pin</option>
                  <option value="arduino">Arduino Uno</option>
                  <option value="rock5a">Radxa ROCK 5A</option>
                  <option value="rock5b">Radxa ROCK 5B</option>
                  <option value="rock4d">Radxa ROCK 4D</option>
                  <option value="rock3a">Radxa ROCK 3A</option>
                  <option value="rock3b">Radxa ROCK 3B</option>
                  <option value="rock3c">Radxa ROCK 3C</option>
                  <option value="rock2a">Radxa ROCK 2A</option>
                  <option value="rock2f">Radxa ROCK 2F</option>
                  <option value="rockPiE">ROCK Pi E</option>
                  <option value="rockPiS">ROCK Pi S</option>
                  <option value="radxaZero">Radxa ZERO</option>
                  <option value="radxaZero2Pro">Radxa ZERO 2 Pro</option>
                  <option value="radxaZero3">Radxa ZERO 3</option>
                  <option value="cubieA5e">Cubie A5E</option>
                  <option value="cubieA7a">Cubie A7A</option>
                  <option value="cubieA7z">Cubie A7Z</option>
                  <option value="dragonQ6a">Dragon Q6A</option>
                  <option value="orionO6">Orion O6</option>
                  <option value="orionO6n">Orion O6N</option>
                  <option value="custom">Custom</option>
                </select>
                <label className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors">
                  <Upload className="w-4 h-4" />
                  <span className="hidden sm:inline">Upload JSON</span>
                  <span className="sm:hidden">Upload</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <PinDiagram config={pinConfig} />
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6">
            <JsonEditor
              config={pinConfig}
              onChange={handleJsonChange}
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            How to Use
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <ul className="text-slate-600 dark:text-slate-400 space-y-2">
              <li>Select a pre-defined example from the dropdown or upload your own JSON file</li>
              <li>Edit the JSON configuration in the editor on the right</li>
              <li>Hover over pins to see detailed information</li>
              <li>Click on pins to highlight them</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
