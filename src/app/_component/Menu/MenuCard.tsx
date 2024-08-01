import { PressBox } from "../../../components/PressAnimator/PressAnimator";
import Link from "next/link";

import ArrowRightIcon from '@/public/icons/icon_arrow_right.svg';
import { Box } from "@/components/Box";
import { FlexBox } from "@/components/FlexBox";
import { FlexRow } from "@/components/FlexRow";
import { Text } from "@/components/Text";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function MenuCard({ href, onClick, children }: Props) {
  return (
    <PressBox>
      {href !== undefined
        ? <Link href={href}>
            <FlexRow width='100%' height={54}>
              <Text size={16} weight={600} color="#191B1C">{children}</Text>
              <ArrowRightIcon />
            </FlexRow>
          </Link>
        : <FlexRow width='100%' height={54} onClick={onClick}>
            <Text size={16} weight={600} color="#191B1C">{children}</Text>
            <ArrowRightIcon />
          </FlexRow>
      }
    </PressBox>
  )
}