'use client';

import Link from 'next/link';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './navigation-menu';

const NavMenu = () =>  {
  return (
    <NavigationMenu className='mb-5'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/sample1' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sample Static Content</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/sample2' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sample dynamic content</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;