import { SideBar as LayoutSidebar } from '@pong/layout';
import {
  HomeModernIcon,
  PlusCircleIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline';
import { Logo } from '@pong/common-ui';

const menuItems = [
  { url: '/', icon: HomeModernIcon, name: 'Home' },
  { url: '/ladder', icon: TableCellsIcon, name: 'Ladder' },
  { url: '/log', icon: PlusCircleIcon, name: 'Log result' },
];

export function Sidebar() {
  return (
    <LayoutSidebar
      menuItems={menuItems}
      logo={
        <Logo className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" />
      }
    />
  );
}
