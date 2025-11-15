"use client";
import { TypeAnimation } from "react-type-animation";

export function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Smartest ", 2000,  // text + wait
        "", 500,               // backspace
        "Easiest ", 2000,
        "", 500,
        "Fastest ", 2000,
        "", 500,
        "Modern ", 2000,
        "", 500,
      ]}
      speed={50} // typing speed (ms per character)
      deletionSpeed={40} // backspace speed
      repeat={Infinity} // loop forever
      wrapper="span"
      className="py-2.5 text-3xl md:text-5xl font-semibold bg-gradient-to-r bg-clip-text text-transparent"
      style={{backgroundImage: 'linear-gradient(to right, var(--color-gradient-from), var(--color-gradient-via), var(--color-gradient-to))'}}
    />
  );
}
