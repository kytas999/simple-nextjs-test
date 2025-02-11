import { apiService } from '@/api/api';
import { BackButton } from '@/components/ui/BackButton';
import ErrorMsg from '@/components/ui/ErrorMsg';
import LabelValue from '@/components/ui/LabelValue';
import { capitalize } from '@/util/string';
import { Metadata } from 'next';

interface PersonProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PersonProps): Promise<Metadata> {
  // Get the person id from the params and fetch the person data
  const id = (await params).id;
  const person = await apiService.getPerson(id);

  // Insert the person name in the title and a description
  return {
    title: person.name,
    description: `Details of the character ${person.name} from the SW franchise`,
  };
}

export default async function Person({ params }: PersonProps) {
  try {
    // Get the person data from the cached API response
    const id = (await params).id;
    const person = await apiService.getPerson(id);

    return (
      <div className="flex gap-4">
        <BackButton />

        <div className="text-center flex-1">
          <h2 className="text-3xl font-semibold mb-8">{person.name}</h2>

          <LabelValue label="Sex" value={capitalize(person.gender)} />

          <LabelValue label="Height" value={person.height} />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <ErrorMsg>
        <p className="text-2xl">We couldn't fetch the character :(</p>
      </ErrorMsg>
    );
  }
}
