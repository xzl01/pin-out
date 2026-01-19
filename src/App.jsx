import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PinDiagram from './components/PinDiagram'
import JsonEditor from './components/JsonEditor'
import { Upload, Github, Languages } from 'lucide-react'
import { examplePinouts } from './data'

function App() {
  const { t, i18n } = useTranslation()
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
          alert(t('ui.uploadJson'))
        }
      }
      reader.readAsText(file)
    }
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                {t('app.title')}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {t('app.subtitle')}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                title={t('ui.language')}
              >
                <Languages className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="ml-1 text-xs sm:text-sm font-medium">
                  {i18n.language === 'en' ? '中文' : 'EN'}
                </span>
              </button>
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
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="space-y-4 sm:space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                {t('ui.pinDiagram')}
              </h2>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  value={selectedExample}
                  onChange={(e) => handleExampleChange(e.target.value)}
                  className="w-full sm:w-auto px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="raspberryPi">{t('boards.raspberryPi')}</option>
                  <option value="arduino">{t('boards.arduino')}</option>
                  <option value="rock5a">{t('boards.rock5a')}</option>
                  <option value="rock5b">{t('boards.rock5b')}</option>
                  <option value="rock4d">{t('boards.rock4d')}</option>
                  <option value="rock3a">{t('boards.rock3a')}</option>
                  <option value="rock3b">{t('boards.rock3b')}</option>
                  <option value="rock3c">{t('boards.rock3c')}</option>
                  <option value="rock2a">{t('boards.rock2a')}</option>
                  <option value="rock2f">{t('boards.rock2f')}</option>
                  <option value="rockPiE">{t('boards.rockPiE')}</option>
                  <option value="rockPiS">{t('boards.rockPiS')}</option>
                  <option value="radxaZero">{t('boards.radxaZero')}</option>
                  <option value="radxaZero2Pro">{t('boards.radxaZero2Pro')}</option>
                  <option value="radxaZero3">{t('boards.radxaZero3')}</option>
                  <option value="cubieA5e">{t('boards.cubieA5e')}</option>
                  <option value="cubieA7a">{t('boards.cubieA7a')}</option>
                  <option value="cubieA7z">{t('boards.cubieA7z')}</option>
                  <option value="dragonQ6a">{t('boards.dragonQ6a')}</option>
                  <option value="orionO6">{t('boards.orionO6')}</option>
                  <option value="orionO6n">{t('boards.orionO6n')}</option>
                  <option value="custom">{t('boards.custom')}</option>
                </select>
                <label className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors">
                  <Upload className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('ui.uploadJson')}</span>
                  <span className="sm:hidden">{t('ui.upload')}</span>
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
            {t('ui.howToUse')}
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <ul className="text-slate-600 dark:text-slate-400 space-y-2">
              <li>{t('ui.instructions.selectExample')}</li>
              <li>{t('ui.instructions.editConfig')}</li>
              <li>{t('ui.instructions.hoverPins')}</li>
              <li>{t('ui.instructions.clickPins')}</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
