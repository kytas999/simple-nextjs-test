import LabelValue from '@/components/ui/LabelValue';
import { IPerson } from '@/types/person';
import { capitalize } from '@/util/string';
import { getIdFromUrl } from '@/util/sw';
import Link from 'next/link';
import { FC } from 'react';

interface MovieCardProps {
  person: IPerson;
}

const PersonCard: FC<MovieCardProps> = ({ person }) => {
  return (
    <Link
      href={`/people/${getIdFromUrl(person.url)}`}
      className="border border-black dark:border-white p-2 flex flex-col gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black duration-150"
    >
      <LabelValue label="Name" value={person.name} />

      <LabelValue label="Sex" value={capitalize(person.gender)} />

      <LabelValue label="Height" value={person.height} />
    </Link>
  );
};

export default PersonCard;
