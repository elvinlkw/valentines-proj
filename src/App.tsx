import Scratch from './components/scratch/scratch';
import styled from '@emotion/styled';

const CardContainer = styled.div({
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: '1fr 1fr',
  alignContent: 'center',
  justifyItems: 'center',
  fontFamily: "'Caveat Brush', serif",
  backgroundColor: '#fff',
  minHeight: '500px',
});

function App() {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="w-full border-20 border-red-400 rounded-xl h-3/5 min-w-256 min-h-max">
          <CardContainer>
            <div className="flex flex-col gap-24 items-center">
              <h1 className="text-8xl text-red-500 rotate-350">
                Scratch to Reveal!
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
                <p className="text-red-500 text-end mt-2 pr-4">Love, Elvin</p>
              </div>
            </div>
            <Scratch />
          </CardContainer>
        </div>
      </div>
    </>
  );
}

export default App;
