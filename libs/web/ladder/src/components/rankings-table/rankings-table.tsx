import type { TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { USERS_API_ENDPOINT, useUsers } from '@pong/service-hooks';
import { LoadingContainer } from '@pong/common-ui';
import { format } from 'date-fns';

const TH = ({ children, ...props }: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    scope="col"
    className="px-6 py-5 text-left text-black-900 font-semibold capitalize tracking-wider"
    {...props}
  >
    {children}
  </th>
);

const TD = ({ children, ...props }: TdHTMLAttributes<HTMLTableCellElement>) => (
  <td
    className="px-6 py-5 whitespace-nowrap transition-all duration-200 bg-white group-hover:bg-slate-100/75"
    {...props}
  >
    {children}
  </td>
);

export function RankingsTable() {
  const { isLoading, isError, data } = useUsers();

  if (isLoading || isError || !data) {
    return <LoadingContainer />;
  }

  return (
    <table className="min-w-full divide-y divide-slate-200">
      <thead className="bg-slate-50">
        <tr>
          <TH colSpan={2}>Name</TH>
          <TH>Ranking</TH>
          <TH>Last match</TH>
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
          <tr key={id} className="cursor-pointer group">
            <TD className="w-14 py-3">
              <img
                src={`${USERS_API_ENDPOINT}/users/${id}/profile-picture`}
                className="h-12 w-12 rounded-full"
                alt={name}
              />
            </TD>
            <TD>{name}</TD>
            <TD>{Math.round(elo)}</TD>
            <TD>
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
