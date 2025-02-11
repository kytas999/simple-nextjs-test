import { apiService } from '@/api/api';
import ErrorMsg from '@/components/ui/ErrorMsg';
import LinkComponent from '@/components/ui/LinkComponent';
import VehicleCard from '@/components/vehicles/VehicleCard';

interface VehicleListProps {
  page: number;
}

export default async function VehicleList({ page }: VehicleListProps) {
  try {
    // Fetch vehicles from the API
    const vehicleData = await apiService.getVehicles({ page });

    return (
      <main>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
          {vehicleData?.results.map((vehicle) => (
            <VehicleCard key={vehicle.url} vehicle={vehicle} /> // Url is being used as key, because there is no id in the response
          ))}
        </section>

        <div className="grid grid-cols-2 gap-4">
          {vehicleData.previous && (
            <LinkComponent
              className="justify-self-start"
              href={`/vehicles?page=${page - 1}`}
            >
              Previous
            </LinkComponent>
          )}

          {vehicleData.next && (
            <LinkComponent
              className="col-start-2 justify-self-end"
              href={`/vehicles?page=${page + 1}`}
            >
              Next
            </LinkComponent>
          )}
        </div>
      </main>
    );
  } catch (error) {
    return (
      <ErrorMsg>
        <p className="text-2xl">We couldn't fetch any vehicles :(</p>
      </ErrorMsg>
    );
  }
}
