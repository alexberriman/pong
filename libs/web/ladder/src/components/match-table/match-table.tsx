import { format } from 'date-fns';
import { Match } from '@pong/matches';
import { TD, TH } from '../table';
import { useUsers } from '@pong/service-hooks';
import { LoadingContainer } from '@pong/common-ui';
import { Trend } from '../trend';

type MatchTableProps = {
  matches: Match[];
};

export function MatchTable({ matches }: MatchTableProps) {
  const users = useUsers();

  if (users.isLoading) {
    return <LoadingContainer />;
  }

  if (!users.data || users.isError) {
    return <p>Unable ot fetch users</p>;
  }

  const user = (id: string) =>
    users.data.find(({ id: userId }) => userId === id);

  return (
    <table className="min-w-full divide-y divide-slate-200">
      <thead className="bg-slate-50">
        <tr>
          <TH>Date</TH>
          <TH>Winner</TH>
          <TH>Loser</TH>
        </tr>
      </thead>
      <tbody className="bg-white">
        {matches.length === 0 && (
          <tr>
            <td colSpan={100} className="px-6 py-5 whitespace-nowrap">
              No matches to display
            </td>
          </tr>
        )}

        {matches.map(
          ({
            id,
            playerA,
            playerB,
            createdAt,
            playerAEloDiff,
            playerBEloDiff,
          }) => (
            <tr key={id} className="group">
              <TD className="truncate">
                {format(new Date(createdAt), 'dd/MM/yyyy')}
              </TD>
              <TD className="truncate">
                <div className="flex gap-x-2 items-center">
                  {user(playerA)?.name}{' '}
                  <Trend value={Math.floor(0 - playerAEloDiff)} />
                </div>
              </TD>
              <TD className="truncate">
                <div className="flex gap-x-2 items-center">
                  {user(playerB)?.name}
                  <Trend value={Math.floor(0 - playerBEloDiff)} />
                </div>
              </TD>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
