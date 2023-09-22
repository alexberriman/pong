import { useContext } from 'react';
import { USERS_API_ENDPOINT, useUsers, useRankings } from '@pong/service-hooks';
import { LoadingContainer, ModalContext } from '@pong/common-ui';
import { format } from 'date-fns';
import { UserDetails } from '../user-details';
import { TD, TH } from '../table';
import { Trend } from '../trend';

export function RankingsTable() {
  const { closeModal, showModal } = useContext(ModalContext);
  const rankings = useRankings();
  const { isLoading, isError, data } = useUsers({
    filter: {
      property: { name: 'lastMatch', preProcess: ['toLength'] },
      operator: 'greaterThan',
      value: 0,
    },
  });

  if (isLoading || isError || !data || rankings.isLoading || !rankings.data) {
    return <LoadingContainer />;
  }

  const ranking = (id: string) =>
    rankings.data.find((ranking) => ranking.id === id);

  return (
    <table className="min-w-full divide-y divide-slate-200">
      <thead className="bg-slate-50">
        <tr>
          <TH colSpan={2}>Name</TH>
          <TH>Ranking</TH>
          <TH className="hidden sm:table-cell">Matches</TH>
          <TH className="hidden sm:table-cell">Last match</TH>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data.length === 0 && (
          <tr>
            <td colSpan={100} className="px-6 py-5 whitespace-nowrap">
              No users found
            </td>
          </tr>
        )}

        {data.map(({ id, name, elo, lastMatch }) => (
          <tr
            key={id}
            className="cursor-pointer group"
            onClick={() => {
              showModal(<UserDetails id={id} />, {
                className:
                  'overflow-visible sm:p-0 transition-all w-full md:w-[784px] p-3',
                onClose: closeModal,
              });
            }}
          >
            <TD className="w-14 min py-3 px-0 sm:px-0">
              <img
                src={`${USERS_API_ENDPOINT}/users/${id}/profile-picture`}
                className="h-12 w-12 rounded-full"
                alt={name}
              />
            </TD>
            <TD className="truncate">{name}</TD>
            <TD>
              <div className="flex flex-row gap-x-2 grow h-full">
                {Math.round(elo)}
                <Trend value={ranking(id)?.weeklyTrend} />
              </div>
            </TD>
            <TD className="hidden sm:table-cell">
              {ranking(id)?.matchesPlayed}
            </TD>
            <TD className="hidden sm:table-cell">
              {lastMatch
                ? format(new Date(lastMatch), 'dd/MM/yyyy hh:mm aa')
                : 'n/a'}
            </TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
