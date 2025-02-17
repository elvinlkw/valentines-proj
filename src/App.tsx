import { useCallback, useState } from 'react';

import { LoveLetter, ScratchCard } from '@/containers';

type RenderPhase = 'initial' | 'scratch-card';

function App() {
  const [phase, setPhase] = useState<RenderPhase>('initial');

  const handleNextPhase = useCallback(() => {
    setPhase('scratch-card');
  }, []);

  return phase === 'initial' ? (
    <LoveLetter onAnimationEnd={handleNextPhase} />
  ) : (
    <ScratchCard />
  );
}

export default App;
