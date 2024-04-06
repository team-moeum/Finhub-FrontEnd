"use client";

import { jsToNative } from "@/utils/jsToNative";
import style from "./callnative.module.css";
import { useState } from "react";

export default function CallNative() {
  const [test, setTest] = useState("[]");
  return (
    <div className={style.container}>
      <div className={style.content}>
        <button
          className={style.test_btn}
          onClick={() => {
            // jsToNative(
            //   {val1: "appVersion"},
            //   (event: any) => {

            //   }
            // );

            // jsToNative(
            //   {val1: "getSafeAreaInset"},
            //   (event: any) => {

            //   }
            // );

            // jsToNative(
            //   {val1: "share", val2: "share url"},
            //   (event: any) => {

            //   }
            // );
          }}
        >
          Callnative Test
        </button>
        {test}
      </div>
    </div>
  );
}
