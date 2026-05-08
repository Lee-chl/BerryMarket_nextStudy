import { ChangeEvent, useState } from "react";
import style from "./searchbar-layout.module.css";
import { useRouter } from "next/router";
export default function SearchBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState<string>("");
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const router = useRouter();
  const onSubmit = () => {
    if (!search || router.query.q === search) return;
    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          onChange={onChangeSearch}
          type="text"
          placeholder="검색어를 입력하시오."
          value={search}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
