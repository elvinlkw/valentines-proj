import { motion } from 'motion/react';
import { RenderPhase } from '@/types';
import { Loading, LoveLetter, ScratchCard, Welcome } from '@/containers';

type ContentProps = {
  phase: RenderPhase;
  onNextPhase: () => void;
};

export const Content = ({ phase, onNextPhase }: ContentProps) => {
  switch (phase) {
    case RenderPhase.Welcome:
      return (
        <motion.div
          key="welcome-text"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <Welcome onClick={onNextPhase} />
        </motion.div>
      );
    case RenderPhase.Loading:
      return <Loading onComplete={onNextPhase} />;
    case RenderPhase.LoveLetter:
      return (
        <motion.div
          key="love-letter"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <LoveLetter onAnimationEnd={onNextPhase} />
        </motion.div>
      );
    case RenderPhase.ScratchCard:
      return (
        <motion.div
          key="scratch-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ScratchCard />
        </motion.div>
      );
    default:
      return null;
  }
};
