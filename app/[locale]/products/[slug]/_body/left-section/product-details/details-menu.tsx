import { merge } from '@/app/_lib/merge';
import Link from 'next/link';

type DetailsMenuType = {
  sections: {
    id: string;
    highlightPosition: string;
    label: string;
    intersection?: IntersectionObserverEntry | null;
  }[];
};
const DetailsMenu = ({ sections }: DetailsMenuType) => {
  const activeSection = sections.find((section) => {
    return Number(section.intersection?.boundingClientRect?.top) > 0;
  });

  return (
    <div className='no-scrollbar sticky top-0 z-1 flex shrink-0 items-center gap-5 overflow-auto whitespace-nowrap bg-white py-7 md:gap-14'>
      {sections.map((section) => (
        <Link
          href={`#${section.id}`}
          key={section.id}
          className={activeSection?.label === section.label ? 'font-bold' : ''}
        >
          {section.label}
        </Link>
      ))}
      <div
        className={merge(
          'absolute bottom-5 h-0.5 bg-secondary-900 transition-all duration-500',
          activeSection?.highlightPosition,
        )}
      ></div>
    </div>
  );
};

export default DetailsMenu;
