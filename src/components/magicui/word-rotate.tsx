'use client';

import { AnimatePresence, motion, MotionProps } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
  onComplete?: () => void;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  className,
  onComplete,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  const handleOnExitComplete = useCallback(() => {
    if (index === words.length && onComplete) {
      onComplete();
    }
  }, [index, onComplete, words.length]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait" onExitComplete={handleOnExitComplete}>
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
