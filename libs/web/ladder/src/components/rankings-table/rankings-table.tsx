import { useUsers } from '@pong/service-hooks';
import { LoadingContainer } from '@pong/common-ui';

// 💩
const TH = ({ children }: { children: React.ReactNode }) => (
  <th
    scope="col"
    className="px-6 py-5 text-left text-black-900 font-semibold capitalize tracking-wider"
  >
    {children}
  </th>
);

const TD = ({ children }: { children: React.ReactNode }) => (
  <td className="px-6 py-5 whitespace-nowrap transition-all duration-200 bg-white group-hover:bg-slate-100/75">
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
          <TH>Name</TH>
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

        {data.map(({ id, name, elo }) => (
          <tr key={id} className="cursor-pointer group">
            <TD>{name}</TD>
            <TD>{elo}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
