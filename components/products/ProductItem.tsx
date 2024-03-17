import { Product } from "@/lib/models/ProductModel";
import Link from "next/link";
import React from "react";
import { Rating } from "./Rating";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <>
          <article className="card__article">
          <Link href={`/product/${product.slug}`}><img className="card__img"
              src={product.image} alt={product.name} /></Link>

            <div className="card__data">
              {/* <span className="card__description">Juda mazali va foydali</span> */}
              <p>{product.brand}</p>
              <h2 className="card__title">{product.name}</h2>
              <Rating value={product.rating} caption={`(${product.numReviews})`} />
              <div className="card__footer-right">
                  <span>${product.price}</span>
              </div>
              <div className="card__footer-left"><Link className='btn' href={`/product/${product.slug}`}>Batafsil</Link></div>
            </div>
          </article>
    </>
  );
}
