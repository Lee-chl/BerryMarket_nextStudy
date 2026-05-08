import styles from "./index.module.css";
import { ReactNode } from "react";
import SearchBarLayout from "@/Components/searchbar-layout";
import sales from '@/mock/sales.json';
import SaleItem from "@/Components/sale-item";

export default function Home() {
  
  return (
    <div className={styles.title}>
      <section>
        <h3>최신 등록 상품</h3>
        {sales.map((sale) => (
          <SaleItem key={sale.id} {...sale}/>
        ))}
      </section>
    </div>
  );
}

// 속성 추가(함수) / 컴포넌트는 reactNode 타입이다. 리액트를 받겠다는 뜻
// SearchBarLayout 을 거친 아이를 만들어줄거다 (거쳐가는 페이지를)
// 서치바에 쌓여져 있는 형태로 반환 
Home.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};
