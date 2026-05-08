import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "@/Components/global-layout";
import { NextPage } from "next";
import { ReactNode } from "react";

// getLayout 가진 페이지와 그냥 페이지를 가진 타입 정의 하기 위해서 NextPage 가져옴
// & 합성
type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  // Main에 있는 getLayout을 가져다가 쓰겠다.
  const getLayout = Component.getLayout ||((page)=>page); // 앞에 false이면(getLayout함수가 없으면) 뒤에꺼가 반환
  return <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>;
}
