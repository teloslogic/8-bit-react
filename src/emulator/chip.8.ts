/** System Constansts */
export const MEMORY_SIZE = 4096
export const START_ADDRESS = 0x200
export const VIDEO_WIDTH = 64
export const VIDEO_HEIGHT = 32

/**
 * Describes the Chip-8 emulation state.
 */
type Chip8 = {
  // The CHIP-8 has sixteen 8-bit registers, labeled V0 to VF.
  // Each register is able to hold any value from 0x00 to 0xFF.
  v: Uint8Array
  // The CHIP-8 has 4096 bytes of memory, meaning the address space is from 0x000 to 0xFFF.
  memory: Uint8Array
  // The Index Register is a special register used to store memory addresses
  // for use in operations. It’s a 16-bit register because the maximum memory
  // address (0xFFF) is too big for an 8-bit register.
  index: Uint16Array
  // The Program Counter (PC) is a special register that holds the address of the
  // next instruction to execute. Again, it’s 16 bits because it has to be able
  // to hold the maximum memory address (0xFFF)
  pc: Uint16Array
  // The CHIP-8 has 16 levels of stack, meaning it can hold 16 different PCs.
  // Multiple levels allow for one function to call another function and so on, until
  // they all return to the original caller site.
  //
  // Putting a PC onto the stack is called pushing and pulling a PC off of the
  // stack is called popping.
  stack: Uint16Array
  // Similar to how the PC is used to keep track of where in memory the CPU is executing,
  // we need a Stack Pointer (SP) to tell us where in the 16-levels of stack our most
  // recent value was placed (i.e, the top).
  sp: Uint8Array
  // The CHIP-8 has a simple timer used for timing. If the timer value is zero, it stays zero.
  // If it is loaded with a value, it will decrement at a rate of 60Hz.
  delayTimer: Uint8Array
  // The CHIP-8 also has another simple timer used for sound.
  // Its behavior is the same (decrementing at 60Hz if non-zero), but a single tone will buzz when it’s non-zero.
  soundTimer: Uint8Array
  // The CHIP-8 has 16 input keys that match the first 16 hex values: 0 through F.
  // Each key is either pressed or not pressed.
  keypad: Uint8Array
  // The CHIP-8 has an additional memory buffer used for storing the graphics to display.
  // It is 64 pixels wide and 32 pixels high. Each pixel is either on or off, so only
  // two colors can be represented.
  video: Uint32Array
  // Opcode, short for operation code, is a part of a machine language instruction that tells
  // the computer what operation to perform. It essentially specifies the action to be carried out,
  // like adding two numbers, moving data, or branching to another instruction.
  opcode: Uint16Array
}

export default Chip8
