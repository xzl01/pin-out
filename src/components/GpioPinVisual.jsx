import { useEffect, useRef } from 'react'
import variantASvg from '../assets/gpio-40pin-variant-a.svg'
import variantBSvg from '../assets/gpio-40pin-variant-b.svg'
import variantFSvg from '../assets/gpio-40pin-variant-f.svg'
import variantO6nSvg from '../assets/gpio-40pin-variant-o6n.svg'
import variantO6Svg from '../assets/gpio-40pin-variant-o6.svg'

const GpioPinVisual = ({ selectedPin, hoveredPin, pins, variant = 'b' }) => {
  const containerRef = useRef(null)
  const pinColorMap = {}
  if (pins) {
    pins.forEach(pin => { pinColorMap[pin.number] = pin.color || '#94a3b8' })
  }
  const svgSrc = variant === 'o6' ? variantO6Svg : (variant === 'o6n' ? variantO6nSvg : (variant === 'f' ? variantFSvg : (variant === 'a' ? variantASvg : variantBSvg)))
  const variantAPositions = { 1: { cx: 26.5, cy: 14.13 }, 3: { cx: 34.66, cy: 14.13 }, 5: { cx: 42.82, cy: 14.13 }, 7: { cx: 50.98, cy: 14.13 }, 9: { cx: 59.14, cy: 14.13 }, 11: { cx: 67.30, cy: 14.13 }, 13: { cx: 75.46, cy: 14.13 }, 15: { cx: 83.62, cy: 14.13 }, 17: { cx: 91.82, cy: 14.13 }, 19: { cx: 99.98, cy: 14.13 }, 21: { cx: 108.14, cy: 14.13 }, 23: { cx: 116.30, cy: 14.13 }, 25: { cx: 124.46, cy: 14.13 }, 27: { cx: 132.62, cy: 14.13 }, 29: { cx: 140.78, cy: 14.13 }, 31: { cx: 148.94, cy: 14.13 }, 33: { cx: 157.10, cy: 14.13 }, 35: { cx: 165.26, cy: 14.13 }, 37: { cx: 173.43, cy: 14.13 }, 39: { cx: 181.62, cy: 14.13 }, 2: { cx: 26.5, cy: 5.97 }, 4: { cx: 34.66, cy: 5.97 }, 6: { cx: 42.82, cy: 5.97 }, 8: { cx: 50.98, cy: 5.97 }, 10: { cx: 59.14, cy: 5.97 }, 12: { cx: 67.30, cy: 5.97 }, 14: { cx: 75.46, cy: 5.97 }, 16: { cx: 83.62, cy: 5.97 }, 18: { cx: 91.82, cy: 5.97 }, 20: { cx: 99.98, cy: 5.97 }, 22: { cx: 108.14, cy: 5.97 }, 24: { cx: 116.30, cy: 5.97 }, 26: { cx: 124.46, cy: 5.97 }, 28: { cx: 132.62, cy: 5.97 }, 30: { cx: 140.78, cy: 5.97 }, 32: { cx: 148.94, cy: 5.97 }, 34: { cx: 157.10, cy: 5.97 }, 36: { cx: 165.26, cy: 5.97 }, 38: { cx: 173.43, cy: 5.97 }, 40: { cx: 181.62, cy: 5.97 } }
  const variantBPositions = { 1: { cx: 27.134, cy: 17.455 }, 3: { cx: 35.605, cy: 17.455 }, 5: { cx: 44.072, cy: 17.455 }, 7: { cx: 52.543, cy: 17.455 }, 9: { cx: 61.015, cy: 17.455 }, 11: { cx: 69.485, cy: 17.455 }, 13: { cx: 77.957, cy: 17.455 }, 15: { cx: 86.428, cy: 17.455 }, 17: { cx: 94.900, cy: 17.455 }, 19: { cx: 103.370, cy: 17.455 }, 21: { cx: 111.842, cy: 17.455 }, 23: { cx: 120.313, cy: 17.455 }, 25: { cx: 128.784, cy: 17.455 }, 27: { cx: 137.255, cy: 17.455 }, 29: { cx: 145.727, cy: 17.455 }, 31: { cx: 154.193, cy: 17.455 }, 33: { cx: 162.669, cy: 17.455 }, 35: { cx: 171.140, cy: 17.455 }, 37: { cx: 179.607, cy: 17.455 }, 39: { cx: 188.082, cy: 17.455 }, 2: { cx: 27.134, cy: 8.942 }, 4: { cx: 35.605, cy: 8.942 }, 6: { cx: 44.072, cy: 8.942 }, 8: { cx: 52.543, cy: 8.942 }, 10: { cx: 61.015, cy: 8.942 }, 12: { cx: 69.485, cy: 8.942 }, 14: { cx: 77.957, cy: 8.942 }, 16: { cx: 86.428, cy: 8.942 }, 18: { cx: 94.900, cy: 8.942 }, 20: { cx: 103.370, cy: 8.942 }, 22: { cx: 111.842, cy: 8.942 }, 24: { cx: 120.313, cy: 8.942 }, 26: { cx: 128.784, cy: 8.942 }, 28: { cx: 137.255, cy: 8.942 }, 30: { cx: 145.727, cy: 8.942 }, 32: { cx: 154.193, cy: 8.942 }, 34: { cx: 162.669, cy: 8.942 }, 36: { cx: 171.140, cy: 8.942 }, 38: { cx: 179.607, cy: 8.942 }, 40: { cx: 188.082, cy: 8.942 } }
  const variantFPositions = { 
    1: { cx: 125.034, cy: 31.7161 }, 3: { cx: 163.932, cy: 31.7165 }, 5: { cx: 202.8365, cy: 31.7165 }, 
    7: { cx: 241.7465, cy: 31.7165 }, 9: { cx: 280.6565, cy: 31.7165 }, 11: { cx: 319.5665, cy: 31.7165 }, 
    13: { cx: 358.4765, cy: 31.7165 }, 15: { cx: 397.3865, cy: 31.7165 }, 17: { cx: 436.2965, cy: 31.7165 }, 
    19: { cx: 475.2065, cy: 31.7165 }, 21: { cx: 514.1165, cy: 31.7165 }, 23: { cx: 553.0265, cy: 31.7165 }, 
    25: { cx: 591.9365, cy: 31.7165 }, 27: { cx: 630.8465, cy: 31.7165 }, 29: { cx: 669.7565, cy: 31.7165 }, 
    31: { cx: 708.6665, cy: 31.7165 }, 33: { cx: 747.5765, cy: 31.7165 }, 35: { cx: 786.4865, cy: 31.7165 }, 
    37: { cx: 825.3965, cy: 31.7165 }, 39: { cx: 864.3065, cy: 31.7165 }, 
    2: { cx: 125.034, cy: 70.5678 }, 4: { cx: 163.932, cy: 70.5638 }, 6: { cx: 202.8365, cy: 70.5638 }, 
    8: { cx: 241.7465, cy: 70.5638 }, 10: { cx: 280.6565, cy: 70.5638 }, 12: { cx: 319.5665, cy: 70.5638 }, 
    14: { cx: 358.4765, cy: 70.5638 }, 16: { cx: 397.3865, cy: 70.5638 }, 18: { cx: 436.2965, cy: 70.5638 }, 
    20: { cx: 475.2065, cy: 70.5638 }, 22: { cx: 514.1165, cy: 70.5638 }, 24: { cx: 553.0265, cy: 70.5638 }, 
    26: { cx: 591.9365, cy: 70.5638 }, 28: { cx: 630.8465, cy: 70.5638 }, 30: { cx: 669.7565, cy: 70.5638 }, 
    32: { cx: 708.6665, cy: 70.5638 }, 34: { cx: 747.5765, cy: 70.5638 }, 36: { cx: 786.4865, cy: 70.5638 }, 
    38: { cx: 825.3965, cy: 70.5638 }, 40: { cx: 864.3065, cy: 70.5638 } 
  }
  const variantO6nPositions = {
    1: { cx: 76.9055, cy: 45.7021 }, 3: { cx: 101.311, cy: 45.7018 }, 5: { cx: 125.7, cy: 45.7021 },
    7: { cx: 150.105, cy: 45.7018 }, 9: { cx: 174.51, cy: 45.7018 }, 11: { cx: 198.91, cy: 45.7021 },
    13: { cx: 223.316, cy: 45.7018 }, 15: { cx: 247.72, cy: 45.7018 }, 17: { cx: 272.12, cy: 45.7021 },
    19: { cx: 296.526, cy: 45.7018 }, 21: { cx: 320.931, cy: 45.7019 }, 23: { cx: 345.336, cy: 45.7019 },
    25: { cx: 369.736, cy: 45.7019 }, 27: { cx: 394.141, cy: 45.7019 }, 29: { cx: 418.547, cy: 45.7019 },
    31: { cx: 442.935, cy: 45.7019 }, 33: { cx: 467.351, cy: 45.7019 }, 35: { cx: 491.757, cy: 45.7019 },
    37: { cx: 516.145, cy: 45.7019 }, 39: { cx: 540.562, cy: 45.7019 },
    2: { cx: 76.9055, cy: 21.2994 }, 4: { cx: 101.311, cy: 21.2994 }, 6: { cx: 125.7, cy: 21.2994 },
    8: { cx: 150.105, cy: 21.2994 }, 10: { cx: 174.51, cy: 21.2994 }, 12: { cx: 198.91, cy: 21.2994 },
    14: { cx: 223.316, cy: 21.2994 }, 16: { cx: 247.72, cy: 21.2994 }, 18: { cx: 272.12, cy: 21.2994 },
    20: { cx: 296.526, cy: 21.2994 }, 22: { cx: 320.931, cy: 21.2994 }, 24: { cx: 345.336, cy: 21.2994 },
    26: { cx: 369.736, cy: 21.2994 }, 28: { cx: 394.141, cy: 21.2994 }, 30: { cx: 418.547, cy: 21.2994 },
    32: { cx: 442.935, cy: 21.2994 }, 34: { cx: 467.351, cy: 21.2994 }, 36: { cx: 491.757, cy: 21.2994 },
    38: { cx: 516.145, cy: 21.2994 }, 40: { cx: 540.562, cy: 21.2994 }
  }
  const variantO6Positions = {
    1: { cx: 425.562, cy: 42.5598 }, 3: { cx: 445.166, cy: 42.5598 }, 5: { cx: 464.757, cy: 42.5598 },
    7: { cx: 484.362, cy: 42.5598 }, 9: { cx: 503.966, cy: 42.5598 }, 11: { cx: 523.566, cy: 42.5598 },
    13: { cx: 543.171, cy: 42.5598 }, 15: { cx: 562.774, cy: 42.5598 }, 17: { cx: 582.374, cy: 42.5598 },
    19: { cx: 601.979, cy: 42.5598 }, 21: { cx: 621.583, cy: 42.5598 }, 23: { cx: 641.188, cy: 42.5598 },
    25: { cx: 660.788, cy: 42.5598 }, 27: { cx: 680.392, cy: 42.5598 }, 29: { cx: 699.996, cy: 42.5598 },
    31: { cx: 719.587, cy: 42.5598 }, 33: { cx: 739.2, cy: 42.5598 }, 35: { cx: 758.805, cy: 42.5598 },
    37: { cx: 778.395, cy: 42.5598 }, 39: { cx: 798.009, cy: 42.5598 },
    2: { cx: 425.562, cy: 22.9577 }, 4: { cx: 445.166, cy: 22.9577 }, 6: { cx: 464.757, cy: 22.9577 },
    8: { cx: 484.362, cy: 22.9577 }, 10: { cx: 503.966, cy: 22.9577 }, 12: { cx: 523.566, cy: 22.9577 },
    14: { cx: 543.171, cy: 22.9577 }, 16: { cx: 562.774, cy: 22.9577 }, 18: { cx: 582.374, cy: 22.9577 },
    20: { cx: 601.979, cy: 22.9577 }, 22: { cx: 621.583, cy: 22.9577 }, 24: { cx: 641.188, cy: 22.9577 },
    26: { cx: 660.788, cy: 22.9577 }, 28: { cx: 680.392, cy: 22.9577 }, 30: { cx: 699.996, cy: 22.9577 },
    32: { cx: 719.587, cy: 22.9577 }, 34: { cx: 739.2, cy: 22.9577 }, 36: { cx: 758.805, cy: 22.9577 },
    38: { cx: 778.395, cy: 22.9577 }, 40: { cx: 798.009, cy: 22.9577 }
  }
  const pinPositions = variant === 'o6' ? variantO6Positions : (variant === 'o6n' ? variantO6nPositions : (variant === 'f' ? variantFPositions : (variant === 'a' ? variantAPositions : variantBPositions)))
  const viewBox = variant === 'o6' ? '0 0 1312 1327' : (variant === 'o6n' ? '0 0 1146 1139' : (variant === 'f' ? '0 0 995 853' : (variant === 'a' ? '0 0 274 180' : '0 0 335 250')))
  useEffect(() => {
    if (!containerRef.current) return
    const activePin = selectedPin || hoveredPin
    const svgElement = containerRef.current.querySelector('svg')
    if (!svgElement) return
    const circles = svgElement.querySelectorAll('circle[data-pin]')
    circles.forEach(circle => {
      const pinNum = parseInt(circle.getAttribute('data-pin'))
      const pinColor = pinColorMap[pinNum] || '#94a3b8'
      circle.setAttribute('fill', pinColor)
      circle.setAttribute('fill-opacity', '0.8')
      circle.setAttribute('stroke', pinColor)
      circle.setAttribute('stroke-width', '0.5')
      circle.style.filter = ''
    })
    if (activePin && pinPositions[activePin]) {
      const circle = svgElement.querySelector(`circle[data-pin="${activePin}"]`)
      if (circle) {
        const pinColor = pinColorMap[activePin] || '#94a3b8'
        circle.setAttribute('fill', pinColor)
        circle.setAttribute('fill-opacity', '1')
        circle.setAttribute('stroke', '#ff0000')
        circle.setAttribute('stroke-width', (variant === 'f' || variant === 'o6n') ? '4' : '2.5')
        circle.style.filter = 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.8))'
      }
    }
  }, [selectedPin, hoveredPin, pinColorMap, pinPositions])
  return (
    <div ref={containerRef} className="w-full max-w-md mx-auto relative">
      <img src={svgSrc} alt="GPIO Pin Layout" className="w-full h-auto" />
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        {Object.entries(pinPositions).map(([pinNum, pos]) => {
          const pinColor = pinColorMap[parseInt(pinNum)] || '#94a3b8'
          const radius = variant === 'f' || variant === 'o6n' || variant === 'o6' ? 8 : 2.5
          const strokeWidth = variant === 'f' || variant === 'o6n' || variant === 'o6' ? 1.5 : 0.5
          return <circle key={pinNum} cx={pos.cx} cy={pos.cy} r={radius} fill={pinColor} fillOpacity="0.8" stroke={pinColor} strokeWidth={strokeWidth} data-pin={pinNum} className="transition-all duration-200" />
        })}
      </svg>
    </div>
  )
}
export default GpioPinVisual
