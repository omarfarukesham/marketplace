import { merge } from '@/app/_lib/merge';
import CountAtom from './count-atom';

type CountdownDisplayType = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  className?: string;
  itemClassName?: string;
};

const CountdownDisplay = ({ days, hours, minutes, seconds, className, itemClassName }: CountdownDisplayType) => {
  return (
    <div className={merge('flex items-center gap-1.5 md:gap-2.5', className)}>
      {(days || days == 0) && <CountAtom value={days} type='Day' suffix=':' className={itemClassName} />}
      {(hours || hours == 0) && <CountAtom value={hours} type='Hrs' suffix=':' className={itemClassName} />}
      {(minutes || minutes == 0) && <CountAtom value={minutes} type='Min' suffix=':' className={itemClassName} />}
      {(seconds || seconds == 0) && <CountAtom value={seconds} type='Sec' className={itemClassName} />}
    </div>
  );
};

export default CountdownDisplay;
