import { FC } from 'react'

import Standard from '../templates/standard'

const About: FC = () => (
  <Standard>
    <article className="prose lg:prose">
      <h2>About</h2>
      <p>
        Whenever I mention to someone that I'm writing a Chip-8 emulator/interpreter, the response is usually:
        "What's a Chip-8?"
      </p>
      <p>
        Chip-8 is a simple, interpreted, programming language which was first used on some do-it-yourself
        computer systems in the late 1970s and early 1980s. The COSMAC VIP, DREAM 6800, and ETI 660 computers
        are a few examples. These computers typically were designed to use a television as a display, had
        between 1 and 4K of RAM, and used a 16-key hexadecimal keypad for input. The interpreter took up only
        512 bytes of memory, and programs, which were entered into the computer in hexadecimal, were even
        smaller.
      </p>
      <p>
        In the early 1990s, the Chip-8 language was revived by a man named Andreas Gustafsson. He created a
        Chip-8 interpreter for the HP48 graphing calculator, called Chip-48. The HP48 was lacking a way to
        easily make fast games at the time, and Chip-8 was the answer. Chip-48 later begat Super Chip-48, a
        modification of Chip-48 which allowed higher resolution graphics, as well as other graphical
        enhancements.
      </p>
    </article>
  </Standard>
)

export default About
