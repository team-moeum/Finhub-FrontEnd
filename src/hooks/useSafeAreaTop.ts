import { jsToNative } from "@/utils/jsToNative";
import { useEffect, useState } from "react";

/**
 * IOS SafeAreaTop value
 */
export const userSafeAreaTop = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    jsToNative({ val1: "getSafeAreaInset" }, (data: any) => {
      const dataObj = JSON.parse(data.detail);
      setTop(dataObj.top);
    });
  }, [])

  return top;
}