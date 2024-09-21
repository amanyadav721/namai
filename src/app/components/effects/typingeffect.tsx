"use client";
import React, { useState, useEffect } from "react";
import { FC } from "react";
interface TypingEffectProps {
  text: string;
  speed: any;
}

const TypingEffect: FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
