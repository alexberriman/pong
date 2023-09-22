import { LoadingContainer } from '@pong/common-ui';
import { useMatches } from '@pong/service-hooks';
import { MatchTable } from '../match-table';

type UserDetailsProps = {
  id: string;
};

export function UserDetails({ id }: UserDetailsProps) {
  const { isLoading, isError, data } = useMatches({
    filter: {
      some: [
        {
          property: 'playerA',
          operator: 'equal',
          value: id,
        },
        {
          property: 'playerB',
          operator: 'equal',
          value: id,
        },
      ],
    },
  });

  if (isLoading) {
    return <LoadingContainer />;
  }

  if (!data || isError) {
    return <p>An unknown error occurred</p>;
  }

  return (
    <div className="p-4 max-h-screen overflow-y-scroll">
      <h2 className="text-xl font-semibold mb-4">Match history</h2>
      <MatchTable matches={data} />
    </div>
  );
}
