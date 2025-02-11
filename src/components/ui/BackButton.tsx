'use client';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="border-2 border-black dark:border-white rounded-md p-2 h-fit hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black duration-150"
      onClick={() => router.back()}
    >
      Back
    </button>
  );
};
