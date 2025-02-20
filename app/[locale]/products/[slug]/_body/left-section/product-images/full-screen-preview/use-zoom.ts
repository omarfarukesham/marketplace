import { useEffect, useState } from 'react';

export const useZoom = () => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleZoom = () => {
    setZoom((prevZoom) => (prevZoom === 1 ? 1.8 : 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (zoom > 1) {
      setPosition({
        x: -(e.nativeEvent.offsetX / e.currentTarget.offsetWidth - 0.5) * (zoom - 1) * 100,
        y: -(e.nativeEvent.offsetY / e.currentTarget.offsetHeight - 0.5) * (zoom - 1) * 100,
      });
    }
  };

  useEffect(() => {
    if (zoom === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [zoom]);
  return { handleMouseMove, zoom, handleZoom, position };
};
