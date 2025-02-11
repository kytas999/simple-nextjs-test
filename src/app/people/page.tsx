import PersonList from '@/components/people/PersonList';
import Loader from '@/components/ui/Loader';
import { Metadata } from 'next';
import { Suspense } from 'react';

// Metadata for the people page
export const metadata: Metadata = {
  title: 'SW Characters',
  description:
    'List of characters from the SW franchise. Click on a character to view more details',
};

export default async function People({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Get the current page from the query params
  const query = await searchParams;
  const currentPage = query.page ? +query.page : 1;

  return (
    <Suspense
      key={`page=${currentPage}`}
      fallback={
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <PersonList page={currentPage} />
    </Suspense>
  );
}
