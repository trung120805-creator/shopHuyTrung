import type { CSSProperties } from "react";
import { products } from "../data/products";
import { getCategories, groupByCategory } from "../utils/product";

const categoryMeta: Record<
  string,
  { icon: string; color: string; description: string }
> = {
  "Thời trang": {
    icon: "👕",
    color: "#3b82f6",
    description: "Áo, quần, phụ kiện thời trang",
  },
  "Điện tử": {
    icon: "🎧",
    color: "#8b5cf6",
    description: "Tai nghe, chuột, thiết bị số",
  },
  "Gia dụng": {
    icon: "🏠",
    color: "#10b981",
    description: "Đồ dùng tiện ích hàng ngày",
  },
  "Phụ kiện": {
    icon: "🎒",
    color: "#f59e0b",
    description: "Balo, túi xách, phụ kiện",
  },
};

const categories = getCategories(products);
const categoryCounts = groupByCategory(products);

type Props = {
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
};

export default function CategoryList({
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <section id="categories" className="container category-section">
      <div className="section-header">
        <h2 className="section-title">Danh mục sản phẩm</h2>
        <p className="section-subtitle">
          Chọn danh mục bạn quan tâm để xem sản phẩm ngay
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => {
          const meta = categoryMeta[category] ?? {
            icon: "📦",
            color: "#64748b",
            description: "Sản phẩm đa dạng",
          };
          const count = categoryCounts[category] ?? 0;
          const isActive = selectedCategory === category;

          return (
            <a
              href="#products"
              className={`category-card ${isActive ? "is-active" : ""}`}
              key={category}
              style={{ "--cat-color": meta.color } as CSSProperties}
              onClick={() => onSelectCategory(category)}
            >
              <div className="category-icon">{meta.icon}</div>
              <div className="category-info">
                <h3>{category}</h3>
                <p>{meta.description}</p>
                <span className="category-count">{count} sản phẩm</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
