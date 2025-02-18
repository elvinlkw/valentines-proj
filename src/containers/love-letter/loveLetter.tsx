import { MouseEvent, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import './loveLetter.css';

import { BorderBeam } from '@/components/magicui/border-beam';

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
    <>
      <svg
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden',
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <symbol id="icon-heart" viewBox="0 0 32 32">
            <title>heart</title>
            <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
          </symbol>
          <symbol id="icon-heart-broken" viewBox="0 0 32 32">
            <title>heart-broken</title>
            <path d="M23.6 2c4.637 0 8.4 3.764 8.4 8.401 0 9.132-9.87 11.964-15.999 21.232-6.485-9.326-16.001-11.799-16.001-21.232 0-4.637 3.763-8.401 8.4-8.401 1.886 0 3.625 0.86 5.025 2.12l-2.425 3.88 7 4-4 10 11-12-7-4 1.934-2.901c1.107-0.68 2.35-1.099 3.665-1.099z"></path>
          </symbol>
        </defs>
      </svg>
      <div className="w-full h-full">
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
                  duration={6}
                  size={200}
                  className="from-transparent via-red-500 to-transparent"
                />
                <BorderBeam
                  duration={6}
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
            </div>
            <div className="envelope__side envelope__side--right"></div>
            <div className="envelope__side envelope__side--left"></div>
            <div className="envelope__side envelope__side--bottom"></div>
            <button
              className="heart-wrapper cursor-pointer"
              onClick={handleClick}
            >
              <svg className="heart fill-red-600 w-12 relative z-[2] duration-200">
                <use
                  xlinkHref={isOpen ? '#icon-heart-broken' : '#icon-heart'}
                ></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
