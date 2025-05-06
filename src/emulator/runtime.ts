type Runtime = {
  // The CHIP-8 video buffer is only 64x32, need an integer scale factor
  // to be able to play on big, modern monitors.
  videoScale: number
  // The CHIP-8 had no specified clock speed, so we’ll use a delay to determine
  // the time in milliseconds between cycles. Different games run best at different speeds.
  delayTimer: number
  soundTimer: number
  // Ability to pause a game and emulator CPU instruction cycles.
  isRunning: boolean
}

export default Runtime
