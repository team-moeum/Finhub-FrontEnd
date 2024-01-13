'use client'

import type { Metadata } from 'next'
import React from 'react'
import { Header } from './components/layouts/Header/Header'
import { Main } from './components/layouts/Main/Main'
import { Footer } from './components/layouts/Footer/Footer'
import { Global } from '@emotion/react'
import { GlobalStyles } from './styles/global'

// export const metadata: Metadata = {
//   title: 'FinHub',
//   description: '쉬운 경제 금융 이야기',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Global styles={GlobalStyles} />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
