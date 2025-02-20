'use client';

import CountdownDisplay from './countdown-display';
import ExpiredNotice from './expired-notice';
import { useCountdown } from './use-countdown';

type CountdownType = { targetDate: number; className?: string; itemClassName?: string };

const Countdown = ({ targetDate, className, itemClassName }: CountdownType) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <CountdownDisplay
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        className={className}
        itemClassName={itemClassName}
      />
    );
  }
};

export default Countdown;
