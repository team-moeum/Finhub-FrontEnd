import Link from "next/link";
import { PressBox, PressButton, PressProps } from "../PressAnimator/PressAnimator";

interface LinkProps {
  href: string,
  width?: string | number,
  children: React.ReactNode
}

export const LinkBox = ({ href, children, ...props }: LinkProps & PressProps) => {
  return (
    <PressBox {...props}>
      <Link href={href}>
        {children}
      </Link>
    </PressBox>
  )
}

export const LinkButton = ({ href, width, children }: LinkProps) => {
  return (
    <PressButton width={width}>
      <Link href={href}>
        {children}
      </Link>
    </PressButton>
  )
}