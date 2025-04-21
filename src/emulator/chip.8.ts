import U8Bit from '../types/u8.bit'
import U16Bit from '../types/u16.bit'

type Chip8 = {
  // The CHIP-8 has sixteen 8-bit registers, labeled V0 to VF.
  // Each register is able to hold any value from 0x00 to 0xFF.
  register: U8Bit[]
  // The CHIP-8 has 4096 bytes of memory, meaning the address space is from 0x000 to 0xFFF.
  memory: U8Bit[]
  // The Index Register is a special register used to store memory addresses
  // for use in operations. It’s a 16-bit register because the maximum memory
  // address (0xFFF) is too big for an 8-bit register.
  index: U16Bit
  // The Program Counter (PC) is a special register that holds the address of the
  // next instruction to execute. Again, it’s 16 bits because it has to be able
  // to hold the maximum memory address (0xFFF)
  pc: U16Bit
  // The CHIP-8 has 16 levels of stack, meaning it can hold 16 different PCs.
  // Multiple levels allow for one function to call another function and so on, until
  // they all return to the original caller site.
  //
  // Putting a PC onto the stack is called pushing and pulling a PC off of the
  // stack is called popping.
  stack: U16Bit[]
  // The CHIP-8 has a simple timer used for timing. If the timer value is zero, it stays zero.
  // If it is loaded with a value, it will decrement at a rate of 60Hz.
  delayTimer: U8Bit
  soundTimer: U8Bit
  keypad: U8Bit[]
  video: number[][]
  opcode: U16Bit
}

export default Chip8
