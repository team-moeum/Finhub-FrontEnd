"use client";

import { usePathname } from "next/navigation";
import MenuBar, { ActiveMenuType } from "../MenuBar/MenuBar";

const activeMenuPath: {[key: string]: ActiveMenuType} = {
  '/home': 'home',
  '/list': 'list',
  '/search': 'search',
  '/feed': 'feed',
  '/menu': 'menu',
}

export default function AppLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const activeMenu = activeMenuPath[pathname];
  
  return (
    <>
      {children}
      {activeMenu && <MenuBar activeMenu={activeMenu}/>}
    </>
  )
}