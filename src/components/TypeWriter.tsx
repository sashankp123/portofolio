import React, { useState, useEffect, useRef } from 'react';

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "" 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isWaiting) {
      // Wait before deleting
      timeoutRef.current = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      
      return;
    }

    if (!isDeleting && displayText === currentFullText) {
      // Full text typed, wait before deleting
      setIsWaiting(true);
      return;
    }

    if (isDeleting && displayText === '') {
      // Done deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      return;
    }

    // Handle typing or deleting
    const nextChar = isDeleting
      ? displayText.slice(0, -1)
      : currentFullText.slice(0, displayText.length + 1);

    const timeout = isDeleting ? deletingSpeed : typingSpeed;

    timeoutRef.current = setTimeout(() => {
      setDisplayText(nextChar);
    }, timeout);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentTextIndex, delayBetweenTexts, deletingSpeed, displayText, isDeleting, isWaiting, texts, typingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypeWriter; 