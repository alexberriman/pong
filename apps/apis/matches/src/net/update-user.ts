import axios, { AxiosError } from 'axios';
import { type Result, err, ok } from 'neverthrow';
import type { User } from '@pong/users';

interface Options {
  user: User;
  baseUrl?: string;
}

const updateUser = async ({
  user,
  baseUrl = process.env['USERS_API'],
}: Options): Promise<Result<User, Error>> => {
  const url = `${baseUrl}/users/${user.id}`;

  try {
    await axios.put(url, user, {
      headers: { 'Content-Type': 'application/json' },
    });
    return ok(user);
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

export default updateUser;
