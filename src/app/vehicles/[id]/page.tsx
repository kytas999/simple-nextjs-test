import { apiService } from '@/api/api';
import { BackButton } from '@/components/ui/BackButton';
import ErrorMsg from '@/components/ui/ErrorMsg';
import LabelValue from '@/components/ui/LabelValue';
import { Metadata } from 'next';

interface VehicleProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: VehicleProps): Promise<Metadata> {
  // Get the vehicle id from the params and fetch the vehicle data
  const id = (await params).id;
  const vehicle = await apiService.getVehicle(id);

  // Insert the vehicle name in the title and a description
  return {
    title: vehicle.name,
    description: `Details of the vehicle ${vehicle.name} from the SW franchise`,
  };
}

export default async function Vehicle({ params }: VehicleProps) {
  try {
    // Get the vehicle data from the cached API response
    const id = (await params).id;
    const vehicle = await apiService.getVehicle(id);

    return (
      <div className="flex gap-4">
        <BackButton />

        <div className="text-center flex-1">
          <h2 className="text-3xl font-semibold mb-8">{vehicle.name}</h2>

          <LabelValue label="Model" value={vehicle.model} />

          <LabelValue label="Manufacturer" value={vehicle.manufacturer} />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <ErrorMsg>
        <p className="text-2xl">We couldn't fetch the vehicle :(</p>
      </ErrorMsg>
    );
  }
}
