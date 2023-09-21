import { type UseQueryOptions, useQuery } from '@tanstack/react-query';
import type { User } from '@pong/users';
import { RANKINGS_API_ENDPOINT } from '../constants';

interface UseRankingsOptions {
  // @todo
  queryOptions?: UseQueryOptions<any[], Error, User[]>;
}

const useRankings = ({ queryOptions = {} }: UseRankingsOptions = {}) => {
  const query = useQuery<any[], Error>(
    ['rankings'],
    async () => {
      try {
        const { data } = await (
          await fetch(`${RANKINGS_API_ENDPOINT}/rankings`, {
            headers: {
              accept: 'application/json',
            },
          })
        ).json();

        return data;
      } catch {
        throw Error('Unable to retrieve rankings');
      }
    },
    { staleTime: Infinity, retry: false, ...queryOptions }
  );

  return query;
};

export default useRankings;
