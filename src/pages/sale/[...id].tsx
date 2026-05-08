import { useRouter } from "next/router";
import style from './[id].module.css'

export default function Page() {
  const router = useRouter();
  const id = router.query.id; // 파일명에 id로 썻기 때문에 id
  return (
    <div className={style.container}>
      <h1>{id}번 상품 상세 페이지</h1>
    </div>
  );
}
