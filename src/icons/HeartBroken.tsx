import React, { JSX } from 'react';

export const HeartBroken = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <title>heart-broken</title>
      <path d="M23.6 2c4.637 0 8.4 3.764 8.4 8.401 0 9.132-9.87 11.964-15.999 21.232-6.485-9.326-16.001-11.799-16.001-21.232 0-4.637 3.763-8.401 8.4-8.401 1.886 0 3.625 0.86 5.025 2.12l-2.425 3.88 7 4-4 10 11-12-7-4 1.934-2.901c1.107-0.68 2.35-1.099 3.665-1.099z"></path>
    </svg>
  );
};
