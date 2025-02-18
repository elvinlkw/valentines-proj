import { useEffect, useMemo } from 'react';
import { WordRotate } from '@/components/magicui/word-rotate';

const QUOTES = [
  'A Special Day for a Special person!',
  'Love is sharing your Niouk Yen.',
  'You are a woman and I am a man and we belong together.',
  'Your lips were made for mine, JB. You are the reason I have a mouth, a heart!',
  "I know all you want for valentine's day is a a card — my credit card",
  "Your next dog should be named 'Stacy' so I can sing 'Stacy's Mom' to her.",
  `A man's main job is to protect his woman from her desire to buy a House of CB dress every other month.`,
  'Do you believe in love at first sight, or should I walk by again?',
];

type WelcomeProps = {
  onClick?: () => void;
};

export const Welcome = ({ onClick }: WelcomeProps) => {
  useEffect(() => {
    const handleKeyDown = () => {
      onClick?.();
    };

    window.addEventListener('keydown', handleKeyDown);

    // Don't forget to clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const randomQuotes = useMemo(() => {
    let currentIndex = QUOTES.length;
    const randomQuotes = [...QUOTES];

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [randomQuotes[currentIndex], randomQuotes[randomIndex]] = [
        randomQuotes[randomIndex],
        randomQuotes[currentIndex],
      ];
    }

    return randomQuotes;
  }, []);

  return (
    <div
      role="button"
      className="flex items-center justify-center h-screen"
      onClick={onClick}
    >
      <WordRotate
        className="text-4xl font-bold text-center text-black dark:text-white text-wrap px-8"
        duration={4000}
        words={[
          'Hey you!',
          'YES, you..!',
          'Welcome to the Love Portal!',
          "Your Valentine's Day Journey Begins Here!",
          'Press any key to accept your gift!',
          "Here's some random quotes for you in the meantime!",
          ...randomQuotes,
          "Fine..!! I'll do it myself!!",
          '..Click!!',
        ]}
        onComplete={onClick}
      />
    </div>
  );
};
