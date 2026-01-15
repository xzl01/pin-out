export default {
  name: "ROCK Pi S",
  description: "ROCK Pi S dual 26-pin GPIO connectors",
  layout: "dual-26pin",
  connectors: [
    {
      name: "26-Pin GPIO Connector 1",
      pins: [
        { number: 1, name: "3.3V", type: "Power", color: "#f59e0b", voltage: "3.3V", description: "3.3V power output" },
        { number: 2, name: "5V", type: "Power", color: "#dc2626", voltage: "5V", description: "5V power output" },
        { number: 3, name: "GPIO0_B3", type: "GPIO", color: "#10b981", gpio: "11", functions: ["I2C1_SDA"], description: "I2C" },
        { number: 4, name: "5V", type: "Power", color: "#dc2626", voltage: "5V", description: "5V power output" },
        { number: 5, name: "GPIO0_B4", type: "GPIO", color: "#10b981", gpio: "12", functions: ["I2C1_SCL"], description: "I2C" },
        { number: 6, name: "GND", type: "Ground", color: "#1f2937", description: "Ground" },
        { number: 7, name: "GPIO2_A4", type: "GPIO", color: "#10b981", gpio: "68", functions: ["I2S0_8CH_MCLK", "PDM_CLK_M_M2"], description: "I2S / PDM" },
        { number: 8, name: "GPIO2_A1", type: "GPIO", color: "#10b981", gpio: "65", functions: ["UART0_TX", "SPI0_MOSI"], description: "UART / SPI" },
        { number: 9, name: "GND", type: "Ground", color: "#1f2937", description: "Ground" },
        { number: 10, name: "GPIO2_A0", type: "GPIO", color: "#10b981", gpio: "64", functions: ["UART0_RX", "SPI0_MISO"], description: "UART / SPI" },
        { number: 11, name: "GPIO0_B7", type: "GPIO", color: "#10b981", gpio: "15", functions: ["PWM2", "I2C3_SDA_M0"], description: "PWM / I2C" },
        { number: 12, name: "GPIO2_A5", type: "GPIO", color: "#10b981", gpio: "69", functions: ["I2S0_8CH_SCLK_TX"], description: "I2S" },
        { number: 13, name: "GPIO0_C0", type: "GPIO", color: "#10b981", gpio: "16", functions: ["PWM3", "I2C3_SCL_M0"], description: "PWM / I2C" },
        { number: 14, name: "GND", type: "Ground", color: "#1f2937", description: "Ground" },
        { number: 15, name: "GPIO0_C1", type: "GPIO", color: "#10b981", gpio: "17", functions: ["SPDIF_TX"], description: "SPDIF" },
        { number: 16, name: "GPIO2_B2", type: "GPIO", color: "#10b981", gpio: "74", functions: ["I2S0_8CH_SDO1"], description: "I2S" },
        { number: 17, name: "3.3V", type: "Power", color: "#f59e0b", voltage: "3.3V", description: "3.3V power output" },
        { number: 18, name: "GPIO2_B1", type: "GPIO", color: "#10b981", gpio: "73", functions: ["I2S0_8CH_SDO0"], description: "I2S" },
        { number: 19, name: "GPIO1_C7", type: "GPIO", color: "#10b981", gpio: "55", functions: ["UART1_RTSN", "UART2_TX_M0", "SPI2_MOSI"], description: "UART / SPI" },
        { number: 20, name: "GND", type: "Ground", color: "#1f2937", description: "Ground" },
        { number: 21, name: "GPIO1_C6", type: "GPIO", color: "#10b981", gpio: "54", functions: ["UART1_CTSN", "UART2_RX_M0", "SPI2_MISO"], description: "UART / SPI" },
        { number: 22, name: "GPIO2_A7", type: "GPIO", color: "#10b981", gpio: "71", functions: ["I2S0_8CH_LRCK_TX"], description: "I2S" },
        { number: 23, name: "GPIO1_D0", type: "GPIO", color: "#10b981", gpio: "56", functions: ["UART1_RX", "I2C0_SDA", "SPI2_CLK"], description: "UART / I2C / SPI" },
        { number: 24, name: "GPIO1_D1", type: "GPIO", color: "#10b981", gpio: "57", functions: ["UART1_TX", "I2C0_SCL", "SPI2_CSN0"], description: "UART / I2C / SPI" },
        { number: 25, name: "GND", type: "Ground", color: "#1f2937", description: "Ground" },
        { number: 26, name: "ADC_IN0", type: "Analog", color: "#8b5cf6", description: "ADC input channel 0" }
      ]
    },
    {
      name: "26-Pin GPIO Connector 2",
      pins: [
        { number: 27, name: "GND", type: "Ground", color: "#1f2937", description: "Ground" },
        { number: 28, name: "GPIO2_B5", type: "GPIO", color: "#10b981", gpio: "77", functions: ["I2S0_8CH_SDI0", "PDM_SDI0_M2"], description: "I2S / PDM" },
        { number: 29, name: "ADC_KEY_IN1", type: "Analog", color: "#8b5cf6", description: "ADC key input 1" },
        { number: 30, name: "GPIO2_B6", type: "GPIO", color: "#10b981", gpio: "78", functions: ["I2S0_8CH_SDI1", "PDM_SDI1_M2"], description: "I2S / PDM" },
        { number: 31, name: "MICBIAS2", type: "Analog", color: "#8b5cf6", description: "Microphone bias 2" },
        { number: 32, name: "GPIO2_B7", type: "GPIO", color: "#10b981", gpio: "79", functions: ["I2S0_8CH_SDI2", "PDM_SDI2_M2"], description: "I2S / PDM" },
        { number: 33, name: "MICBIAS1", type: "Analog", color: "#8b5cf6", description: "Microphone bias 1" },
        { number: 34, name: "GPIO2_C0", type: "GPIO", color: "#10b981", gpio: "80", functions: ["I2S0_8CH_SDI3", "PDM_SDI3_M2"], description: "I2S / PDM" },
        { number: 35, name: "MICN8", type: "Analog", color: "#8b5cf6", description: "Microphone negative 8" },
        { number: 36, name: "MCIP8", type: "Analog", color: "#8b5cf6", description: "Microphone positive 8" },
        { number: 37, name: "MICN7", type: "Analog", color: "#8b5cf6", description: "Microphone negative 7" },
        { number: 38, name: "MCIP7", type: "Analog", color: "#8b5cf6", description: "Microphone positive 7" },
        { number: 39, name: "GPIO3_B5", type: "GPIO", color: "#10b981", gpio: "117", functions: ["SPI1_CSN0", "I2C3_SCL_M1", "UART3_TX"], description: "SPI / I2C / UART" },
        { number: 40, name: "GPIO3_B4", type: "GPIO", color: "#10b981", gpio: "116", functions: ["SPI1_MOSI", "I2C3_SDA_M1", "UART3_RX"], description: "SPI / I2C / UART" },
        { number: 41, name: "GPIO3_B3", type: "GPIO", color: "#10b981", gpio: "115", functions: ["SPI1_CLK"], description: "SPI" },
        { number: 42, name: "GPIO3_B2", type: "GPIO", color: "#10b981", gpio: "114", functions: ["SPI1_MISO"], description: "SPI" },
        { number: 43, name: "GPIO2_B4", type: "GPIO", color: "#10b981", gpio: "76", functions: ["I2S0_8CH_SDO3"], description: "I2S" },
        { number: 44, name: "GPIO2_B3", type: "GPIO", color: "#10b981", gpio: "75", functions: ["I2S0_8CH_SDO2"], description: "I2S" },
        { number: 45, name: "GPIO2_B0", type: "GPIO", color: "#10b981", gpio: "72", functions: ["I2S0_8CH_LRCK_RX"], description: "I2S" },
        { number: 46, name: "GPIO2_A6", type: "GPIO", color: "#10b981", gpio: "70", functions: ["I2S0_8CH_SCLK_RX", "PDM_CLK_S_M2"], description: "I2S / PDM" },
        { number: 47, name: "MICN2", type: "Analog", color: "#8b5cf6", description: "Microphone negative 2" },
        { number: 48, name: "MCIP2", type: "Analog", color: "#8b5cf6", description: "Microphone positive 2" },
        { number: 49, name: "MICN1", type: "Analog", color: "#8b5cf6", description: "Microphone negative 1" },
        { number: 50, name: "MCIP1", type: "Analog", color: "#8b5cf6", description: "Microphone positive 1" },
        { number: 51, name: "LINEOUT_R", type: "Analog", color: "#8b5cf6", description: "Line output right" },
        { number: 52, name: "LINEOUT_L", type: "Analog", color: "#8b5cf6", description: "Line output left" }
      ]
    }
  ]
}
