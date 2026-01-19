import { useState, useEffect } from 'react'
import Pin from './Pin'
import GpioPinVisual from './GpioPinVisual'
import { examplePinouts } from '../data/index'

const PinDiagram = ({ config }) => {
  const [selectedPin, setSelectedPin] = useState(null)
  const [hoveredPin, setHoveredPin] = useState(null)
  const [selectedFunction, setSelectedFunction] = useState(null)

  if (!config || (!config.pins && !config.connectors)) {
    return (
      <div className="text-center py-12 text-slate-500">
        No pin configuration loaded
      </div>
    )
  }

  // Determine layout type
  const layout = config.layout || 'single-40pin'
  const isDualLayout = layout === 'dual-26pin'

  // Get all pins for finding active pin
  const allPins = isDualLayout 
    ? config.connectors.flatMap(c => c.pins)
    : config.pins

  const activePin = allPins.find(p => p.number === (selectedPin || hoveredPin))

  // Clear selected function when pin changes
  useEffect(() => {
    setSelectedFunction(null)
  }, [selectedPin, hoveredPin])

  // Find matching pins across all SBCs when a function is selected
  const findMatchingPins = (functionName) => {
    if (!functionName) return []
    
    const matches = []
    const funcUpper = functionName.toUpperCase()
    const currentPinNumber = activePin?.number
    
    Object.entries(examplePinouts).forEach(([sbcKey, sbcConfig]) => {
      // Skip current SBC
      if (sbcConfig.name === config.name) return
      
      const pins = sbcConfig.layout === 'dual-26pin' 
        ? sbcConfig.connectors.flatMap(c => c.pins)
        : sbcConfig.pins
      
      pins.forEach(pin => {
        if (pin.functions && pin.functions.some(f => f.toUpperCase().includes(funcUpper) || funcUpper.includes(f.toUpperCase()))) {
          matches.push({
            sbcName: sbcConfig.name,
            sbcKey,
            pinNumber: pin.number,
            pinName: pin.name,
            gpio: pin.gpio,
            matchedFunctions: pin.functions.filter(f => 
              f.toUpperCase().includes(funcUpper) || funcUpper.includes(f.toUpperCase())
            ),
            isSamePinNumber: pin.number === currentPinNumber
          })
        }
      })
    })
    
    // Sort: same pin number first, then by SBC name
    return matches.sort((a, b) => {
      if (a.isSamePinNumber && !b.isSamePinNumber) return -1
      if (!a.isSamePinNumber && b.isSamePinNumber) return 1
      return a.sbcName.localeCompare(b.sbcName)
    })
  }

  const matchingPins = selectedFunction ? findMatchingPins(selectedFunction) : []

  // Render function for a single connector
  const renderConnector = (pins, connectorName) => {
    const leftPins = pins.filter((_, index) => index % 2 === 0)
    const rightPins = pins.filter((_, index) => index % 2 === 1)
    const maxRows = Math.max(leftPins.length, rightPins.length)

    return (
      <div key={connectorName} className="space-y-3">
        {connectorName && (
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
            {connectorName}
          </h4>
        )}
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-3 sm:p-4 lg:p-6">
          <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 lg:gap-x-8 gap-y-2 sm:gap-y-3 lg:gap-y-4 max-w-7xl mx-auto">
            {Array.from({ length: maxRows }).map((_, index) => {
              const leftPin = leftPins[index]
              const rightPin = rightPins[index]
              return (
                <>
                  <div key={`left-${index}`} className="flex justify-end">
                    {leftPin ? (
                      <Pin
                        pin={leftPin}
                        position="left"
                        isSelected={selectedPin === leftPin.number}
                        isHovered={hoveredPin === leftPin.number}
                        onSelect={() => setSelectedPin(selectedPin === leftPin.number ? null : leftPin.number)}
                        onHover={() => setHoveredPin(leftPin.number)}
                        onLeave={() => setHoveredPin(null)}
                      />
                    ) : (
                      <div className="w-full" />
                    )}
                  </div>
                  <div key={`right-${index}`} className="flex justify-start">
                    {rightPin ? (
                      <Pin
                        pin={rightPin}
                        position="right"
                        isSelected={selectedPin === rightPin.number}
                        isHovered={hoveredPin === rightPin.number}
                        onSelect={() => setSelectedPin(selectedPin === rightPin.number ? null : rightPin.number)}
                        onHover={() => setHoveredPin(rightPin.number)}
                        onLeave={() => setHoveredPin(null)}
                      />
                    ) : (
                      <div className="w-full" />
                    )}
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
          {config.name}
        </h3>
        {config.description && (
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            {config.description}
          </p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Left side - GPIO visualization (sticky) for single 40-pin layout */}
        {!isDualLayout && (
          <div className="w-full lg:w-80 flex-shrink-0 order-first">
            <div className="lg:sticky lg:top-4">
              <GpioPinVisual selectedPin={selectedPin} hoveredPin={hoveredPin} pins={config.pins} variant={config.variant} />
            </div>
          </div>
        )}

        {/* Middle - Pin diagram */}
        <div className="flex-1 space-y-4">
          {isDualLayout ? (
            // Dual connector layout (e.g., ROCK Pi S with 2x 26-pin)
            config.connectors.map(connector => 
              renderConnector(connector.pins, connector.name)
            )
          ) : (
            // Single connector layout (standard 40-pin)
            renderConnector(config.pins, null)
          )}
        </div>

        {/* Right side - Pin details */}
        <div className="w-full lg:w-96 flex-shrink-0">
          {activePin ? (
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 sm:p-5 border border-slate-200 dark:border-slate-700 lg:sticky lg:top-4">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: activePin.color || '#94a3b8' }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    Pin {activePin.number}
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
                    {activePin.name}
                  </p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-700 dark:text-slate-300 w-16">类型:</span>
                  <span className="text-slate-600 dark:text-slate-400">{activePin.type}</span>
                </div>
                
                {activePin.gpio && (
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-700 dark:text-slate-300 w-16">GPIO:</span>
                    <span className="font-mono text-slate-600 dark:text-slate-400">{activePin.gpio}</span>
                  </div>
                )}
                
                {activePin.voltage && (
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-700 dark:text-slate-300 w-16">电压:</span>
                    <span className="text-slate-600 dark:text-slate-400">{activePin.voltage}</span>
                  </div>
                )}

                {activePin.functions && activePin.functions.length > 0 && (
                  <div>
                    <div className="font-medium text-slate-700 dark:text-slate-300 mb-2">可用功能：</div>
                    <div className="flex flex-wrap gap-2">
                      {activePin.functions.map((func, idx) => {
                        const funcUpper = func.toUpperCase()
                        let colorClasses = 'bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                        
                        if (funcUpper.includes('UART')) {
                          colorClasses = 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800'
                        } else if (funcUpper.includes('I2C')) {
                          colorClasses = 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                        } else if (funcUpper.includes('SPI')) {
                          colorClasses = 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                        } else if (funcUpper.includes('PWM')) {
                          colorClasses = 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800'
                        } else if (funcUpper.includes('I2S') || funcUpper.includes('PCM')) {
                          colorClasses = 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800'
                        } else if (funcUpper.includes('SPDIF')) {
                          colorClasses = 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                        }
                        
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedFunction(selectedFunction === func ? null : func)}
                            className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded border font-medium transition-all cursor-pointer hover:shadow-md ${colorClasses} ${
                              selectedFunction === func ? 'ring-2 ring-primary ring-offset-1' : ''
                            }`}
                          >
                            {func}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {activePin.description && (
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                    <div className="font-medium text-slate-700 dark:text-slate-300 mb-2">说明:</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activePin.description}
                    </p>
                  </div>
                )}

                {selectedFunction && matchingPins.length > 0 && (
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                    <div className="font-medium text-slate-700 dark:text-slate-300 mb-2">
                      具有 "{selectedFunction}" 功能的其他 SBC:
                    </div>
                    <div className="max-h-60 overflow-y-auto space-y-2">
                      {matchingPins.map((match, idx) => (
                        <div
                          key={idx}
                          className={`p-2 rounded border text-xs transition-all ${
                            match.isSamePinNumber
                              ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-400 dark:border-amber-600 ring-2 ring-amber-400/50 dark:ring-amber-600/50'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`font-semibold ${
                              match.isSamePinNumber 
                                ? 'text-amber-900 dark:text-amber-100' 
                                : 'text-slate-900 dark:text-white'
                            }`}>
                              {match.sbcName}
                            </div>
                            {match.isSamePinNumber && (
                              <span className="px-1.5 py-0.5 text-[9px] font-semibold rounded bg-amber-500 text-white">
                                相同位置
                              </span>
                            )}
                          </div>
                          <div className={match.isSamePinNumber ? 'text-amber-700 dark:text-amber-300' : 'text-slate-600 dark:text-slate-400'}>
                            Pin {match.pinNumber}: {match.pinName}
                            {match.gpio && ` (GPIO${match.gpio})`}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {match.matchedFunctions.map((f, i) => (
                              <span
                                key={i}
                                className="px-1.5 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/20"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 sm:p-8 border border-slate-200 dark:border-slate-700 min-h-[120px] lg:h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  悬停或点击引脚
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  查看详细功能说明
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PinDiagram
