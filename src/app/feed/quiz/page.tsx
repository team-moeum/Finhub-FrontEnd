import React, { Suspense } from 'react';
import Loading from '@/app/loading';
import { QuizPageScreen } from './_component/QuizPageScreen';
import MainNav from '@/app/_component/Nav/MainNav';

export default function QuizPage() {
  return (
    <Suspense fallback={<Loading />}>
      <MainNav color='white' />
      <QuizPageScreen />
    </Suspense>
  );
}


