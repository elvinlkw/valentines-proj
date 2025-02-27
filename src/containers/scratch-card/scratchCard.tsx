import { LineShadowText } from '@/components/magicui/line-shadow-text';
import { ShineBorder } from '@/components/magicui/shine-border';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { Scratch } from '@/components/scratch/scratch';

export const ScratchCard = () => {
  return (
    <div className="container mx-auto flex justify-center md:items-center md:h-screen">
      <ShineBorder
        className="relative"
        borderWidth={5}
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        duration={10}
      >
        <div
          className="w-screen md:w-full border-red-400 rounded-xl h-3/5 min-h-full shadow-2xl"
          style={{ borderWidth: '16px', boxSizing: 'border-box' }}
        >
          <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center justify-items-center min-h-[500px] p-4">
            <div className="flex flex-col gap-4 md:gap-8 items-center md:max-w-[500px]">
              <h1 className="text-5xl md:text-7xl text-red-500 rotate-2 w-3/4 text-center">
                Scratch to{' '}
                <LineShadowText shadowColor="red">Reveal!!</LineShadowText>
              </h1>
              <div className="rotate-2 text-lg w-3/4 text-wrap">
                <p className="text-red-500 md:mb-2">
                  Happy Valentine's Day baby gurl,
                </p>
                <p className="text-red-500">
                  Almost 6 years and counting, and my love for you keeps on
                  growing everyday! Every moment spent with you is a moment I
                  never want to forget.
                </p>
                <p className="text-red-500">
                  I'm glad you're part of my life and I can't wait to create
                  many more amazing memories with you!
                </p>
                <p className="text-red-500 md:mt-2">I love you 24/7, 365!</p>
                <SparklesText
                  className="text-red-500 text-end md:mt-2 pr-4 text-md"
                  sparklesCount={5}
                  text="Yours, Elvin"
                />
              </div>
            </div>
            <Scratch />
          </div>
        </div>
      </ShineBorder>
    </div>
  );
};
