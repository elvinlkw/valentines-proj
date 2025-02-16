import { ScratchToReveal } from '../magicui/scratch-to-reveal';
import image from '../../assets/cartoon.png';
import { Confetti } from '../magicui/confetti';
import type { ConfettiRef } from '../magicui/confetti';
import { useCallback, useRef } from 'react';

export const Scratch = () => {
  const confettiRef = useRef<ConfettiRef>(null);

  const handleConfetti = useCallback(() => {
    confettiRef.current?.fire();
  }, []);

  return (
    <div>
      <Confetti
        className="absolute -top-32"
        ref={confettiRef}
        width={400}
        height={200}
        manualstart
      />
      <ScratchToReveal
        width={400}
        height={400}
        minScratchPercentage={50}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
        gradientColors={['#A97CF8', '#F38CB8', '#FDCC92']}
        onComplete={handleConfetti}
      >
        <img src={image} />
      </ScratchToReveal>
    </div>
  );
};
