import { useMutation } from '@tanstack/react-query';
import type { RequiredCreateMatchProperties } from '@pong/matches';
import { MATCHES_API_ENDPOINT } from '../constants';
import { queryClient } from '../config';

export default function useCreateMatch() {
  return useMutation({
    mutationFn: async (
      data: RequiredCreateMatchProperties
    ): Promise<{ id: string }> => {
      const response = await fetch(`${MATCHES_API_ENDPOINT}/matches`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' },
      });

      if (response.status === 201) {
        queryClient.invalidateQueries({ queryKey: ['users'] });
        const { data } = (await response.json()) as { data: { id: string } };
        return data as { id: string };
      } else {
        throw new Error('Unable to create match');
      }
    },
  });
}
