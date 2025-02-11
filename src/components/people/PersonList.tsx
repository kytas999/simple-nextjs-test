import { apiService } from '@/api/api';
import PersonCard from '@/components/people/PersonCard';
import ErrorMsg from '@/components/ui/ErrorMsg';
import LinkComponent from '@/components/ui/LinkComponent';

interface PersonListProps {
  page: number;
}

export default async function PersonList({ page }: PersonListProps) {
  try {
    // Fetch people data from the API
    const peopleData = await apiService.getPeople({ page });

    return (
      <main>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
          {peopleData?.results.map((person) => (
            <PersonCard key={person.url} person={person} /> // Url is being used as key, because there is no id in the response
          ))}
        </section>

        <div className="grid grid-cols-2 gap-4">
          {peopleData.previous && (
            <LinkComponent
              className="justify-self-start"
              href={`/people?page=${page - 1}`}
            >
              Previous
            </LinkComponent>
          )}

          {peopleData.next && (
            <LinkComponent
              className="col-start-2 justify-self-end"
              href={`/people?page=${page + 1}`}
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
        <p className="text-2xl">We couldn't fetch any characters :(</p>
      </ErrorMsg>
    );
  }
}
