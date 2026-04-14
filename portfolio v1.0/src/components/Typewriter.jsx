import React, { useState, useEffect } from 'react';

export default function Typewriter({ text, delay = 50, className }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, delay);
    
    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}