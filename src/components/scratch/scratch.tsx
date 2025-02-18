import { ScratchToReveal } from '../magicui/scratch-to-reveal';
import image from '../../assets/cartoon.png';
import { Confetti } from '../magicui/confetti';
import type { ConfettiRef } from '../magicui/confetti';
import { useCallback, useRef } from 'react';
import { isMobile } from 'react-device-detect';

const DEFAULT_SIZE = 350;
const MOBILE_SIZE = 250;

export const Scratch = () => {
  const confettiRef = useRef<ConfettiRef>(null);

  const handleConfetti = useCallback(() => {
    confettiRef.current?.fire();
  }, []);

  return (
    <div className="relative">
      <Confetti
        className="absolute -top-[300px]"
        ref={confettiRef}
        width={isMobile ? MOBILE_SIZE : DEFAULT_SIZE}
        height={300}
        manualstart
      />
      <ScratchToReveal
        minScratchPercentage={50}
        width={isMobile ? MOBILE_SIZE : DEFAULT_SIZE}
        height={isMobile ? MOBILE_SIZE : DEFAULT_SIZE}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
        gradientColors={['#CCC', '#EEE', '#CCC']}
        onComplete={handleConfetti}
      >
        <img src={image} />
      </ScratchToReveal>
    </div>
  );
};
