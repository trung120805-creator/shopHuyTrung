import type { CSSProperties } from "react";
import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: Props) {
  const outOfStock = product.stock === 0;
  const lowStock = !outOfStock && product.stock <= 5;

  return (
    <article
      className={`product-card ${outOfStock ? "is-out" : ""}`}
      style={{ "--card-delay": `${index * 60}ms` } as CSSProperties}
    >
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-image-overlay" aria-hidden="true" />
        {outOfStock && <span className="badge-out">Hết hàng</span>}
        {lowStock && (
          <span className="badge-low">Còn {product.stock} sp</span>
        )}
        <span className="product-category-pill">{product.category}</span>
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className={`stock-pill ${outOfStock ? "out" : lowStock ? "low" : "ok"}`}>
            {outOfStock
              ? "Tạm hết"
              : lowStock
                ? "Sắp hết"
                : `Còn ${product.stock}`}
          </span>
        </div>

        <h3 className="product-name">{product.name}</h3>

        <div className="product-footer">
          <p className="product-price">{formatPrice(product.price)}</p>
          <button className="btn" disabled={outOfStock}>
            {outOfStock ? "Hết hàng" : "Thêm vào giỏ"}
          </button>
        </div>
      </div>
    </article>
  );
}
