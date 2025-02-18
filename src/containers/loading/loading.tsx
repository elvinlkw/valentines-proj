'use client';

import { useEffect, useState } from 'react';

import { AnimatedCircularProgressBar } from '@/components/magicui/animated-circular-progress-bar';

const MAX_VALUE = 100;

type LoadingProps = {
  onComplete?: () => void;
};

export const Loading = ({ onComplete }: LoadingProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === MAX_VALUE) {
        return MAX_VALUE;
      }

      const increment = Math.ceil(Math.random() * 15) + 5;
      return Math.min(prev + increment, MAX_VALUE);
    };
    sessionStorage.setItem('skipLoading', 'true');
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (value === 100) {
      onComplete?.();
    }
  }, [value, onComplete]);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <p className="text-4xl font-bold text-center text-black dark:text-white text-wrap px-8">
        Please Wait while we retrieve the gift..!
      </p>
      <AnimatedCircularProgressBar
        max={MAX_VALUE}
        min={0}
        value={value}
        gaugePrimaryColor="#ef4444"
        gaugeSecondaryColor="rgba(0,0,0,0.1)"
      />
    </div>
  );
};
