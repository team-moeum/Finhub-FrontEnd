'use client'
import React, { useState } from 'react';
import QuizHeader from "./quiz/_component/QuizHeader"
import TodayQize from "./quiz/_component/TodayQize"
import style from './feed.module.css'
export default function FeedPage() {
   
    return (
        <div>
            <QuizHeader/>
            <TodayQize />
        </div>
    );
}


