import LabelValue from '@/components/ui/LabelValue';
import { IVehicle } from '@/types/vehicle';
import { getIdFromUrl } from '@/util/sw';
import Link from 'next/link';
import { FC } from 'react';

interface MovieCardProps {
  vehicle: IVehicle;
}

const VehicleCard: FC<MovieCardProps> = ({ vehicle }) => {
  return (
    <Link
      href={`/vehicles/${getIdFromUrl(vehicle.url)}`}
      className="border border-black dark:border-white p-2 flex flex-col gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black duration-150"
    >
      <LabelValue label="Name" value={vehicle.name} />

      <LabelValue label="Model" value={vehicle.model} />

      <LabelValue label="Manufacturer" value={vehicle.manufacturer} />
    </Link>
  );
};

export default VehicleCard;
