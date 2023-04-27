import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

type BreadcrumbItem = {
  name: string;
  href?: string;
  current?: boolean;
};

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-3">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {items.map((item) => (
          <li key={item.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              {item.href && (
                <Link
                  to={item.href}
                  className="ml-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )}
              {!item.href && (
                <span
                  className="ml-3 text-sm text-gray-500"
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
