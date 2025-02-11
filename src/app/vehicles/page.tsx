import Loader from '@/components/ui/Loader';
import VehicleList from '@/components/vehicles/VehicleList';
import { Suspense } from 'react';

import { Metadata } from 'next';

// Metadata for the vehicles page
export const metadata: Metadata = {
  title: 'SW Vehicles',
  description:
    'List of vehicles from the SW franchise. Click on a vehicle to view more details',
};

export default async function Vehicles({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Get the page number from the query params
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
      <VehicleList page={currentPage} />
    </Suspense>
  );
}
