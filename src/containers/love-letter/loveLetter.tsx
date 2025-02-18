import { MouseEvent, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { BorderBeam } from '@/components/magicui/border-beam';
import { Icon } from '@/components/icon/icon';

import './loveLetter.css';

type LoveLetterProps = {
  onAnimationEnd?: () => void;
};

export const LoveLetter = ({ onAnimationEnd }: LoveLetterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBorderBeam, setShowBorderBeam] = useState(true);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(true);
    setShowBorderBeam(false);
  }, []);

  const handleLetterAnimationEnd = useCallback(() => {
    setTimeout(() => {
      onAnimationEnd?.();
    }, 2000);
  }, [onAnimationEnd]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={cn('envelope bg-slate-300 shadow-2xl', {
          open: isOpen,
          'animate-tossing': !isOpen,
        })}
      >
        {showBorderBeam && (
          <>
            <BorderBeam
              size={200}
              className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
              delay={3}
              size={200}
              className="from-transparent via-blue-500 to-transparent"
            />
          </>
        )}
        <div className="envelope__side envelope__side--top"></div>
        <div
          className={cn('envelope__card bg-amber-100 shadow-lg', {
            'animate-card-jump z-[1]': isOpen,
          })}
          onAnimationEnd={handleLetterAnimationEnd}
        >
          <p className="envelope__card-text">
            Happy Valentine's Day Mary J! ❤️
          </p>
          <p className="envelope__card-text">I love you 3000!!</p>
        </div>
        <div className="envelope__side envelope__side--right"></div>
        <div className="envelope__side envelope__side--left"></div>
        <div className="envelope__side envelope__side--bottom"></div>
        <button className="heart-wrapper cursor-pointer" onClick={handleClick}>
          <Icon
            className="heart fill-red-600 w-12 relative z-[2] duration-200"
            icon={isOpen ? 'HeartBroken' : 'Heart'}
          />
        </button>
      </div>
    </div>
  );
};
