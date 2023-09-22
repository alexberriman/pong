import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

type TrendProps = {
  value: number;
};

const Trend = ({ value }: TrendProps) => {
  if (value === 0) {
    return null;
  }

  return (
    <div
      className={`font-semibold text-sm flex flex-row ${
        value > 0 ? 'text-emerald-600' : 'text-red-500'
      }`}
    >
      {value > 0 ? (
        <ArrowUpIcon className="w-3.5 h-3.5" />
      ) : (
        <ArrowDownIcon className="w-3.5 h-3.5" />
      )}
      {Math.floor(value)}
    </div>
  );
};

export { Trend };
