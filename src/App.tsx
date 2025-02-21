import { useCallback, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Particles } from '@/components/magicui/particles';

import { Content } from '@/containers';
import { RenderPhase } from '@/types';

function App() {
  const [phase, setPhase] = useState<RenderPhase>(RenderPhase.Welcome);

  const handleNextPhase = useCallback(() => {
    setPhase((prevPhase) => {
      switch (prevPhase) {
        case RenderPhase.Welcome:
          if (sessionStorage.getItem('skipLoading') === 'true') {
            return RenderPhase.LoveLetter;
          }
          return RenderPhase.Loading;
        case RenderPhase.Loading:
          return RenderPhase.LoveLetter;
        case RenderPhase.LoveLetter:
          return RenderPhase.ScratchCard;
        default:
          return RenderPhase.Welcome;
      }
    });
  }, []);

  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color={'#000'}
      />

      <AnimatePresence>
        <Content phase={phase} onNextPhase={handleNextPhase} />
      </AnimatePresence>
    </>
  );
}

export default App;
