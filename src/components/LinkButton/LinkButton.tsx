import Link from "next/link";
import { PressBox, PressButton } from "../PressAnimator/PressAnimator";
import { Button } from "../Button";
import { ButtonProps } from "../Button/Button";
interface LinkProps {
  href: string
  children: React.ReactNode
}

export const LinkBox = ({ href, children }: LinkProps) => {
  return (
    <PressBox>
      <Link href={href}>
        {children}
      </Link>
    </PressBox>
  )
}

export const LinkButton = ({ href, children }: LinkProps) => {
  return (
    <PressButton>
      <Link href={href}>
        {children}
      </Link>
    </PressButton>
  )
}