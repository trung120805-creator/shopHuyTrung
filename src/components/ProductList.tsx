import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  items: Product[];
};

export default function ProductList({
  id,
  title,
  subtitle = "Những sản phẩm được yêu thích nhất hiện nay",
  items,
}: Props) {
  return (
    <section id={id} className="container product-section">
      <div className="section-header section-header-row">
        <div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <span className="section-count-badge">{items.length} sản phẩm</span>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">🔍</span>
          <h3>Không tìm thấy sản phẩm phù hợp</h3>
          <p>Thử đổi từ khóa tìm kiếm hoặc chọn nhóm sản phẩm khác nhé.</p>
        </div>
      ) : (
        <div className="product-grid">
          {items.map((p, index) => (
            <ProductCard key={p.id} product={p} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
