import { ChangeEventHandler, useState } from 'react';
import DragUIDefault from './drag-ui-default';

type DragNDropProps = {
  onDrop?: (files: File[]) => void;
  DragUI?: React.FC<{ isDragging: boolean }>;
};

const DragNDrop = ({ onDrop, DragUI }: DragNDropProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    onDrop?.(Array.from(e.dataTransfer.files));
  };

  const handleUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = Array.from(event.target.files ?? []);
    onDrop?.(files);
  };

  return (
    <div onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}>
      {DragUI ? <DragUI isDragging={isDragging} /> : <DragUIDefault isDragging={isDragging} />}
      <input id='dropzone' name='images' type='file' className='hidden' multiple onChange={handleUpload} />
    </div>
  );
};

export default DragNDrop;
