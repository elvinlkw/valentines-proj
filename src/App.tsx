import { Scratch } from '@/components/scratch/scratch';
import { ShineBorder } from '@/components/magicui/shine-border';
import { LineShadowText } from '@/components/magicui/line-shadow-text';
import { SparklesText } from '@/components/magicui/sparkles-text';

function App() {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-screen">
        <ShineBorder
          className="relative"
          borderWidth={5}
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          duration={10}
        >
          <div
            className="w-screen md:w-full border-red-400 rounded-xl h-3/5 min-h-max"
            style={{ borderWidth: '16px', boxSizing: 'border-box' }}
          >
            <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center justify-items-center min-h-[500px]">
              <div className="flex flex-col gap-8 items-center md:max-w-[500px]">
                <h1 className="text-7xl text-red-500 rotate-2 w-3/4 text-center">
                  Scratch to{' '}
                  <LineShadowText shadowColor="red">Reveal!!</LineShadowText>
                </h1>
                <div className="rotate-2 text-lg w-3/4 text-wrap">
                  <p className="text-red-500 mb-2">
                    Happy Valentine's Day Mary Jane!
                  </p>
                  <p className="text-red-500">
                    Six years and counting, and my love for you keeps on growing
                    everyday! Scratch the card to reveal one of my favorite
                    memories of us.
                  </p>
                  <p className="text-red-500">
                    I'm glad you're part of my life and I can't wait to create
                    many more amazing memories with you! I love you forever and
                    always!
                  </p>
                  <SparklesText
                    className="text-red-500 text-end mt-2 pr-4 text-md"
                    sparklesCount={5}
                    text="Love, Elvin"
                  />
                </div>
              </div>
              <Scratch />
            </div>
          </div>
        </ShineBorder>
      </div>
    </>
  );
}

export default App;
