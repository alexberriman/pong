import { User } from '@pong/users';
import type { UseFormRegisterReturn } from 'react-hook-form';

type PlayerDropdownProps<T extends string> = {
  label: string;
  id: T;
  inputProps: UseFormRegisterReturn<T>;
  players: User[];
};

export function PlayerDropdown<T extends string>({
  label,
  id,
  inputProps,
  players,
}: PlayerDropdownProps<T>) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          {...inputProps}
        >
          <option value="">-</option>
          {players.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
