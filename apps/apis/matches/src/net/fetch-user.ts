import axios, { AxiosError } from 'axios';
import { type Result, err, ok } from 'neverthrow';
import type { User } from '@pong/users';

interface Options {
  id: string;
  baseUrl?: string;
}

const fetchUser = async ({
  id,
  baseUrl = process.env['USERS_API'],
}: Options): Promise<Result<User, Error>> => {
  const url = `${baseUrl}/users/${id}`;

  try {
    const response = await axios.get(url);
    return ok(response.data as User);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return err(
        new Error(`Users API responded with status ${error.response?.status}`)
      );
    }

    if (error instanceof Error) {
      return err(error);
    }
  }

  return err(Error('An unknown error occurred'));
};

export default fetchUser;
