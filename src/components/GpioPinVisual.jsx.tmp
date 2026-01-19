import { clsx } from 'clsx'

const getFunctionColor = (func) => {
  const funcUpper = func.toUpperCase()
  
  // UART - 橙色
  if (funcUpper.includes('UART')) {
    return { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800' }
  }
  // I2C - 蓝色
  if (funcUpper.includes('I2C')) {
    return { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800' }
  }
  // SPI - 紫色
  if (funcUpper.includes('SPI')) {
    return { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800' }
  }
  // PWM - 粉色
  if (funcUpper.includes('PWM')) {
    return { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-700 dark:text-pink-300', border: 'border-pink-200 dark:border-pink-800' }
  }
  // I2S - 青色
  if (funcUpper.includes('I2S') || funcUpper.includes('PCM')) {
    return { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-700 dark:text-cyan-300', border: 'border-cyan-200 dark:border-cyan-800' }
  }
  // SPDIF - 靛蓝色
  if (funcUpper.includes('SPDIF')) {
    return { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800' }
  }
  // 默认 - 灰色
  return { bg: 'bg-slate-100 dark:bg-slate-700/30', text: 'text-slate-700 dark:text-slate-300', border: 'border-slate-200 dark:border-slate-600' }
}

const Pin = ({ pin, position, isSelected, isHovered, onSelect, onHover, onLeave }) => {
  const pinColor = pin.color || '#94a3b8'
  
  return (
    <div
      className={clsx(
        'flex items-center gap-2 sm:gap-3 cursor-pointer transition-all duration-200 w-full',
        position === 'right' && 'flex-row-reverse'
      )}
      onClick={onSelect}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={clsx(
          'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 flex-shrink-0',
          isSelected && 'ring-2 sm:ring-4 ring-primary ring-opacity-50',
          isHovered && 'ring-2 ring-slate-400'
        )}
        style={{ backgroundColor: pinColor }}
      >
        {pin.number}
      </div>
      
      <div
        className={clsx(
          'flex-1 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 rounded-md transition-all duration-200 min-w-0 h-full',
          'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700',
          (isSelected || isHovered) && 'shadow-md border-primary dark:border-primary'
        )}
      >
        <div className={clsx(
          'flex items-center gap-1 sm:gap-2 mb-1',
          position === 'right' && 'flex-row-reverse'
        )}>
          <div className={clsx(
            'text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate',
            position === 'right' && 'text-right'
          )}>
            {pin.name}
          </div>
          {pin.gpio && (
            <span className="text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded font-mono flex-shrink-0">
              GPIO{pin.gpio}
            </span>
          )}
        </div>
        {pin.functions && pin.functions.length > 0 && (
          <div className={clsx(
            'flex flex-wrap gap-0.5 sm:gap-1',
            position === 'right' && 'justify-end'
          )}>
            {pin.functions.map((func, idx) => {
              const colors = getFunctionColor(func)
              return (
                <span
                  key={idx}
                  className={clsx(
                    'inline-block px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] rounded font-medium border',
                    colors.bg,
                    colors.text,
                    colors.border
                  )}
                >
                  {func}
                </span>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Pin
