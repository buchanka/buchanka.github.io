import { memo, SVGProps } from 'react';

const Star8Icon = () => (
  <svg preserveAspectRatio='none' viewBox='0 0 98 86' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M49 0L60.0012 29.7123H95.6018L66.8003 48.0755L77.8015 77.7877L49 59.4245L20.1985 77.7877L31.1997 48.0755L2.39823 29.7123H37.9988L49 0Z'
      fill='#CF96E3'
    />
  </svg>
);
const Memo = memo(Star8Icon);
export default Memo
