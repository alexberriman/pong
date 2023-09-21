import axios, { AxiosError } from 'axios';
import { type Result, err, ok } from 'neverthrow';
import type { Match } from '@pong/matches';

interface Options {
  baseUrl?: string;
}

const fetchMatches = async ({
  baseUrl = process.env['MATCHES_API'],
}: Options = {}): Promise<Result<Match[], Error>> => {
  try {
    const response = await axios.get(`${baseUrl}/matches`);
    return ok(response.data.data as Match[]);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return err(
        new Error(`Matches API responded with status ${error.response?.status}`)
      );
    }

    if (error instanceof Error) {
      return err(error);
    }
  }

  return err(Error('An unknown error occurred'));
};

export default fetchMatches;
