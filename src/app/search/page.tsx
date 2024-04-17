import { Metadata } from "next";
import React, { Suspense } from "react";

import SearchScreen from "./_component/SearchScreen";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchScreen />
    </Suspense>
  )
}
