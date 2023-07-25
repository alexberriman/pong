import { type UseQueryOptions, useQuery } from '@tanstack/react-query';
import type { User } from '@pong/users';
import { USERS_API_ENDPOINT } from '../constants';

interface UseMessageQueueOptions {
  filter?: Record<string, unknown>;
  queryOptions?: UseQueryOptions<User[], Error, User[]>;
}

const useUsers = ({
  filter,
  queryOptions = {},
}: UseMessageQueueOptions = {}) => {
  const query = useQuery<User[], Error>(
    ['users'],
    async () => {
      try {
        const { data } = await (
          await fetch(
            `${USERS_API_ENDPOINT}/users${
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
        throw Error('Unable to retrieve users');
      }
    },
    { staleTime: Infinity, retry: false, ...queryOptions }
  );

  return query;
};

export default useUsers;
