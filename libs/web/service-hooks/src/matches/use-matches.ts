import { type UseQueryOptions, useQuery } from '@tanstack/react-query';
import { MATCHES_API_ENDPOINT } from '../constants';
import { Match } from '@pong/matches';

interface UseMatchesOptions {
  filter?: Record<string, unknown>;
  queryOptions?: UseQueryOptions<Match[], Error, Match[]>;
}

const useMatches = ({ filter, queryOptions = {} }: UseMatchesOptions = {}) => {
  const query = useQuery<Match[], Error>(
    ['matches', JSON.stringify(filter)],
    async () => {
      try {
        const { data } = await (
          await fetch(
            `${MATCHES_API_ENDPOINT}/matches${
              filter
                ? `?condition=${encodeURIComponent(JSON.stringify(filter))}`
                : ''
            }`,
            {
              headers: {
                accept: 'application/json',
              },
            }
          )
        ).json();

        return data;
      } catch {
        throw Error('Unable to retrieve matches');
      }
    },
    { staleTime: Infinity, retry: false, ...queryOptions }
  );

  return query;
};

export default useMatches;
