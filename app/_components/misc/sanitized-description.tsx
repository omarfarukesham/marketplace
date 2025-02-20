'use client';

import useSanitizedInput from '@/app/_lib/hooks/use-sanitized-input';

const SanitizedDescription = ({ label, description }: { label: string; description: string }) => {
  const sanitizedDescription = useSanitizedInput(description);

  return (
    <div className='mt-10'>
      <h3 className='mb-3 text-2xl font-bold'>{label}</h3>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </div>
  );
};

export default SanitizedDescription;
