"use client";

import { jsToNative } from '@/utils/jsToNative';
import style from './callnative.module.css';
import { useState } from 'react';

export default function CallNative() {
  const [test, setTest] = useState('');
  return (
      <div className={style.container}>
        <div className={style.content}>
          <button className={style.test_btn} onClick={() => {
            jsToNative({val1: 'appVersion', val2: 'b', val3: 'c', val4: 'd'}, (e) => {
              setTest(e);
            });

            // setTest('testCall');
          }}>Callnative Test {test}</button>
        </div>
      </div>
  )
}