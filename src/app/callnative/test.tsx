'use client'

import { jsToNative } from "@/utils/jsToNative";
import style from "./callnative.module.css";
import { useState } from "react";

export const CallNativeTestPage = () => {
  const [test, setTest] = useState("[]");
  return (
    <div className={style.container}>
      <div className={style.content}>
        {test}

        <button
          className={style.test_btn}
          onClick={() => {
            jsToNative(
              {val1: "appVersion"},
              (event: any) => {
                setTest(event.detail);
              })
          }}>
          appVersion
        </button>

        <button
          className={style.test_btn}
          onClick={() => {
            jsToNative(
              {val1: "getSafeAreaInset"},
              (data: any) => {
                setTest(data.detail);
              })
          }}>
          getSafeAreaInset
        </button>

        <button
          className={style.test_btn}
          onClick={() => {
            jsToNative(
              {val1: "share", val2:"share url"},
              (data: any) => {
                // Not Used
              })
          }}>
          share
        </button>

        <button
          className={style.test_btn}
          onClick={() => {
            jsToNative(
              {val1: "getPushToken"},
              (data: any) => {
                setTest(data.detail);
              })
          }}>
          getPushToken
        </button>

        <button
          className={style.test_btn}
          onClick={() => {
            jsToNative(
              {
                val1: "getRemoteConfig",
                val2: "android_version"
              },
              (data: any) => {
                setTest(data.detail);
              })
          }}>
          getRemoteConfig
        </button>
      </div>
    </div>
  );
}