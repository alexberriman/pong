import type { TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { USERS_API_ENDPOINT, useUsers, useRankings } from '@pong/service-hooks';
import { LoadingContainer } from '@pong/common-ui';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

type TrendProps = {
  value: number;
};

const Trend = ({ value }: TrendProps) => {
  if (value === 0) {
    return null;
  }

  return (
    <div
      className={`font-semibold text-sm flex flex-row ${
        value > 0 ? 'text-emerald-600' : 'text-red-500'
      }`}
    >
      {value > 0 ? (
        <ArrowUpIcon className="w-3.5 h-3.5" />
      ) : (
        <ArrowDownIcon className="w-3.5 h-3.5" />
      )}
      {Math.floor(value)}
    </div>
  );
};

const TH = ({
  children,
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    scope="col"
    className={twMerge(
      'px-3 py-2 sm:px-6 sm:py-5 text-left text-black-900 font-semibold capitalize tracking-wider',
      className
    )}
    {...props}
  >
    {children}
  </th>
);

const TD = ({
  children,
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) => (
  <td
    className={twMerge(
      'px-3 py-2 sm:px-6 sm:py-5 whitespace-nowrap transition-all duration-200 bg-white group-hover:bg-slate-100/75',
      className
    )}
    {...props}
  >
    {children}
  </td>
);

export function RankingsTable() {
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

  return (
    <table className="min-w-full divide-y divide-slate-200">
      <thead className="bg-slate-50">
        <tr>
          <TH colSpan={2}>Name</TH>
          <TH>Ranking</TH>
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
          <tr key={id} className="cursor-pointer group">
            <TD className="w-14 min py-3 px-0 sm:px-0">
              <img
                src={`${USERS_API_ENDPOINT}/users/${id}/profile-picture`}
                className="h-12 w-12 rounded-full"
                alt={name}
              />
            </TD>
            <TD className="truncate">{name}</TD>
            <TD className="flex flex-row gap-x-2">
              {Math.round(elo)}
              <Trend
                value={
                  rankings.data.find((ranking) => ranking.id === id)
                    ?.weeklyTrend
                }
              />
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
