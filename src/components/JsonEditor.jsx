import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'

const JsonEditor = ({ config, onChange }) => {
  const [jsonText, setJsonText] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setJsonText(JSON.stringify(config, null, 2))
    setError(null)
  }, [config])

  const handleChange = (e) => {
    const newText = e.target.value
    setJsonText(newText)
    
    try {
      JSON.parse(newText)
      setError(null)
      onChange(newText)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          JSON Configuration
        </h2>
        <button
          onClick={handleCopy}
          className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      
      <div className="relative">
        <textarea
          value={jsonText}
          onChange={handleChange}
          className="w-full h-96 p-4 font-mono text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white resize-none"
          spellCheck="false"
        />
        {error && (
          <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-sm text-red-600 dark:text-red-400">
            Invalid JSON: {error}
          </div>
        )}
      </div>

      <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
          JSON Schema
        </h3>
        <pre className="text-xs text-slate-600 dark:text-slate-400 overflow-x-auto">
{`{
  "name": "Board Name",
  "description": "Description",
  "pins": [
    {
      "number": 1,
      "name": "Pin Name",
      "type": "Power/GPIO/Ground",
      "color": "#hex",
      "gpio": "GPIO number",
      "voltage": "3.3V/5V",
      "description": "Details",
      "functions": ["I2C", "SPI"]
    }
  ]
}`}
        </pre>
      </div>
    </div>
  )
}

export default JsonEditor
