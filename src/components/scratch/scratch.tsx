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
        className="absolute -top-32"
        ref={confettiRef}
        width={isMobile ? MOBILE_SIZE : DEFAULT_SIZE}
        height={200}
        manualstart
      />
      <ScratchToReveal
        minScratchPercentage={50}
        width={isMobile ? MOBILE_SIZE : DEFAULT_SIZE}
        height={isMobile ? MOBILE_SIZE : DEFAULT_SIZE}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
        gradientColors={['#A97CF8', '#F38CB8', '#FDCC92']}
        onComplete={handleConfetti}
      >
        <img src={image} />
      </ScratchToReveal>
    </div>
  );
};
