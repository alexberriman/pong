import { useUsers } from '@pong/service-hooks';
import { LoadingContainer } from '@pong/common-ui';
import type { TdHTMLAttributes, ThHTMLAttributes } from 'react';

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

        {data.map(({ id, name, elo, profilePicture }) => (
          <tr key={id} className="cursor-pointer group">
            <TD className="w-14 py-3">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  className="h-12 w-12 rounded-lg"
                  alt={name}
                />
              ) : (
                <span />
              )}
            </TD>
            <TD>{name}</TD>
            <TD>{elo}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
