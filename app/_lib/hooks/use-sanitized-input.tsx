import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

const useSanitizedInput = (description: string) => {
  const [sanitizedDescription, setSanitizedDescription] = useState('');

  useEffect(() => {
    setSanitizedDescription(DOMPurify.sanitize(description));
  }, [description]);

  return sanitizedDescription;
};

export default useSanitizedInput;
