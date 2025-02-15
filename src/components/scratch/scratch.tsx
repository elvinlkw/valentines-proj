import { ScratchToReveal } from '../magicui/scratch-to-reveal';
import image from '../../assets/cartoon.png';

const Scratch = () => {
  return (
    <ScratchToReveal
      width={400}
      height={400}
      minScratchPercentage={70}
      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
      gradientColors={['#A97CF8', '#F38CB8', '#FDCC92']}
    >
      <img src={image} />
    </ScratchToReveal>
  );
};
export default Scratch;
