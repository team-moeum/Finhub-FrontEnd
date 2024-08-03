import { Box, BoxProps } from "@/components/Box"
import { safeAreaState } from "@/states/client/atoms/safeArea";
import { useRecoilValue } from "recoil";

export const SafeArea = ({children, ...props}: BoxProps) => {
  const top = useRecoilValue(safeAreaState);

  return (
    <>
      <Box width="100%" height={top} {...props}></Box>
      {children}
    </>
  );
}