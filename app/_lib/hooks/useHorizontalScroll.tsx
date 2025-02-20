import { MouseEventHandler, useEffect, useRef, useState } from 'react';

export type HandleHorizontalScrollType = (element: HTMLElement, distance: number) => void;

const useHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [arrowLeftDisabled, setArrowLeftDisabled] = useState(true);
  const [arrowRightDisabled, setArrowRightDisabled] = useState(true);

  // for drag
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // for "click being fired after drag complete" issue
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsDown(true);
    const scrollableElement = containerRef.current!;
    scrollableElement.style.cursor = 'grabbing';
    setStartX(e.pageX - scrollableElement.offsetLeft);
    setScrollLeft(scrollableElement.scrollLeft);
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDown) return;
    e.preventDefault();
    setIsDragging(true);

    const scrollableElement = containerRef.current!;

    const x = e.pageX - scrollableElement.offsetLeft;
    const distance = (x - startX) * 1.1; // Adjust scroll speed if needed
    scrollableElement.scrollLeft = scrollLeft - distance;

    scrollableElement.scrollLeft = scrollLeft - distance;

    setArrowLeftDisabled(scrollableElement.scrollLeft <= 0);
    setArrowRightDisabled(
      scrollableElement.scrollLeft >= scrollableElement.scrollWidth - scrollableElement.clientWidth,
    );
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
    setIsDown(false);
    setIsDragging(false);

    const scrollableElement = containerRef.current;

    if (scrollableElement) {
      scrollableElement.style.cursor = 'grab';
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const isScrollable = container.scrollWidth + 1 > container.clientWidth;
      setArrowRightDisabled(!isScrollable);
    }

    const handleScroll = () => {
      if (container) {
        setArrowLeftDisabled(container.scrollLeft <= 0);
        setArrowRightDisabled(container.scrollLeft + 1 >= container.scrollWidth - container.clientWidth); // + 1 for some mobile devices
      }
    };

    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHorizontalScroll: HandleHorizontalScrollType = (scrollableElement, distance) => {
    // Adjust the scroll distance based on the window's width
    const responsiveDistance = window.innerWidth <= 768 ? distance / 2 : distance;
    scrollableElement?.scrollBy({ left: responsiveDistance, behavior: 'smooth' });
  };

  return {
    containerRef,
    handleHorizontalScroll,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    arrowLeftDisabled,
    arrowRightDisabled,
    isDragging,
  };
};

export default useHorizontalScroll;
