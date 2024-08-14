'use client';

import Link from 'next/link';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './navigation-menu';
import { usePathname } from 'next/navigation';

const NavMenu = () => {
    const pathname = usePathname();
  return (
    <NavigationMenu className='mb-5'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/sample1' legacyBehavior passHref>
            <NavigationMenuLink active={pathname === '/sample1'} className={navigationMenuTriggerStyle()}>
              Sample Static Content
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/sample2' legacyBehavior passHref>
            <NavigationMenuLink active={pathname === '/sample2'} className={navigationMenuTriggerStyle()}>
              Sample dynamic content
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/sample3' legacyBehavior passHref>
            <NavigationMenuLink active={pathname === '/sample3'} className={navigationMenuTriggerStyle()}>
              Sample dynamic with table
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;