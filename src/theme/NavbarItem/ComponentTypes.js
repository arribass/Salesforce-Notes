import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import AuthProfileNavbarItem from '@site/src/theme/NavbarItem/AuthProfileNavbarItem';

const ComponentTypes = {
  default: DefaultNavbarItem,
  dropdown: DropdownNavbarItem,
  html: HtmlNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  search: SearchNavbarItem,
  // Custom item type
  authProfile: AuthProfileNavbarItem,
};

export default ComponentTypes;
