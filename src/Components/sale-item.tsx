import { type SaleData } from "@/types";
import style from "./sale-item.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SaleItem(item: SaleData) {
  const { id, productName, description, price, photo } = item;
  const imageURL = `https://styangpa.blob.core.windows.net/yangpa/${photo}`;
  return (
    <Link href={`/sale/${id}`} className={style.container}>
      <Image
        src={imageURL}
        alt={`${productName}의 사진`}
        width={100}
        height={100}
        className={style.image}
      />
      <div>
        <div className={style.title}>{productName}</div>
        <div className={style.description}>{description}</div>
        {/* 0이 3마다 , 찍어서 나옴 */}
        <div className={style.price}>{price.toLocaleString()}원</div> 
      </div>
    </Link>
  );
}
