import PostNav from "@/app/_component/Nav/PostNav"
import { ReactNode } from "react"

 
type LayoutProps = {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <PostNav />
      {children}
    </>
  )
}
