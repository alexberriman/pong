import { SideBar as LayoutSidebar } from '@pong/layout';
import {
  HomeModernIcon,
  PlusCircleIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline';

const menuItems = [
  { url: '/', icon: HomeModernIcon, name: 'Home' },
  { url: '/ladder', icon: TableCellsIcon, name: 'Ladder' },
  { url: '/log', icon: PlusCircleIcon, name: 'Log result' },
];

export function Sidebar() {
  return <LayoutSidebar menuItems={menuItems} />;
}
