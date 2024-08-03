import { Box, BoxProps } from "@/components/Box"
import { useMounted } from "@/hooks/useMounted";
import { safeAreaState } from "@/states/client/atoms/safeArea";
import { useRecoilValue } from "recoil";

export const SafeArea = ({children, ...props}: BoxProps) => {
  const safeAreaTop = useRecoilValue(safeAreaState);
  const isMounted = useMounted();
  
  return (
    <>
      <Box width="100%" height={isMounted ? safeAreaTop : 0} {...props}></Box>
      {children}
    </>
  );
}