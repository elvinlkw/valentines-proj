import { useCallback, useState } from 'react';
import { LoveLetter, ScratchCard } from '@/containers';
import { AnimatePresence, motion } from 'motion/react';
import { Particles } from '@/components/magicui/particles';

type RenderPhase = 'initial' | 'scratch-card';

function App() {
  const [phase, setPhase] = useState<RenderPhase>('initial');

  const handleNextPhase = useCallback(() => {
    setPhase('scratch-card');
  }, []);

  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color={'#000'}
        refresh
      />

      <AnimatePresence>
        {phase === 'initial' ? (
          <motion.div
            key="love-letter"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <LoveLetter onAnimationEnd={handleNextPhase} />
          </motion.div>
        ) : (
          <motion.div
            key="scratch-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ScratchCard />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
