import { useEffect } from "react";
import { safeAreaState } from "@/states/client/atoms/safeArea";
import { useRecoilState } from "recoil";
import { isAndroid, jsToNative } from "@/utils/jsToNative";

/**
 * set IOS SafeAreaTop value
 */
export const useSafeAreaTop = () => {
  const [top, setTop] = useRecoilState(safeAreaState);

  useEffect(() => {
    if (isAndroid() || top > 0) return; 
  
    jsToNative({ val1: "getSafeAreaInset" }, (data: any) => {
      const dataObj = JSON.parse(data.detail);
      setTop(dataObj.top);
    });
  }, []);
}