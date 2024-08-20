import { useEffect, useState } from "react";

import { isAndroid, jsToNative } from "@/utils/jsToNative";

/**
 * IOS SafeAreaTop value
 */
export const useSafeAreaTop = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (isAndroid()) return;

    jsToNative({ val1: "getSafeAreaInset" }, (data: any) => {
      const dataObj = JSON.parse(data.detail);
      setTop(dataObj.top);
    });
  }, []);

  return top;
};
