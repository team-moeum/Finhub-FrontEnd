declare global {
  interface Window {
    webkit?: any;
    Bridge?: any;
  }
}

export function jsToNative(
  {
    val1,
    val2,
    val3,
    val4,
  }: { val1?: string; val2?: string; val3?: string; val4?: string },
  callback: any
) {
  if (typeof window === "undefined") return;

  const callbackId = "callback_" + Date.now();

  const eventListener = (event: Event) => {
    callback(event);
    window.removeEventListener(callbackId, eventListener);
  };

  window.addEventListener(callbackId, eventListener);

  const userAgent = navigator.userAgent.toLowerCase();

  if (
    userAgent.match("iphone") ||
    userAgent.match("ipad") ||
    userAgent.match("ipod")
  ) {
    //아이폰
    if (val1 && val1.match("\t")) {
      val1 = encodeURIComponent(val1);
    }
    if (val2 && val2.match("\t")) {
      val2 = encodeURIComponent(val2);
    }
    if (val3 && val3.match("\t")) {
      val3 = encodeURIComponent(val3);
    }
    if (val4 && val4.match("\t")) {
      val4 = encodeURIComponent(val4);
    }

    if (window.webkit) {
      window.webkit.messageHandlers.jsToNative.postMessage(
        JSON.stringify({
          val1,
          val2,
          val3,
          val4,
          callbackId,
        })
      );
    }
  } else if (userAgent.match("android")) {
    //안드로이드
    window.Bridge.jsToNative(
      JSON.stringify({
        val1,
        val2,
        val3,
        val4,
        callbackId,
      })
    );
  }
}
