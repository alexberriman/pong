import { useForm, SubmitHandler } from 'react-hook-form';
import { PlayerDropdown } from './player-dropdown';
import { useCreateMatch, useUsers } from '@pong/service-hooks';
import { LoadingContainer } from '@pong/common-ui';
import { Navigate } from 'react-router-dom';

type Inputs = {
  winner: string;
  loser: string;
};

export function ResultForm() {
  const { isLoading, isError, data } = useUsers();
  const mutation = useCreateMatch();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ winner, loser }) =>
    mutation.mutate({ playerA: winner, playerB: loser, winner });

  if (isLoading) {
    return <LoadingContainer />;
  }

  if (!data || isError) {
    return <p>An unknown error occurred</p>;
  }

  if (mutation.isSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PlayerDropdown
        label="Winner"
        id="winner"
        inputProps={register('winner')}
        players={data}
      />
      <PlayerDropdown
        label="Loser"
        id="loser"
        inputProps={register('loser')}
        players={data}
      />

      <div className="mt-4">
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
