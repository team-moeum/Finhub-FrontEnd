import { Box, BoxProps } from "@/components/Box"
import { useSafeAreaTop } from "@/hooks/useSafeAreaTop"

export const SafeArea = ({children, ...props}: BoxProps) => {
  const top = useSafeAreaTop();

  return (
    <>
      <Box width="100%" height={top} {...props}></Box>
      {children}
    </>
  );
}