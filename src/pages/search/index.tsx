import SearchBarLayout from "@/Components/searchbar-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function SearchPage() {
  const router = useRouter();
  const query = router.query.q;
  return (
    <div>
      <h1>검색어: {query} 검색 페이지입니다.</h1>
    </div>
  );
}

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>
};
