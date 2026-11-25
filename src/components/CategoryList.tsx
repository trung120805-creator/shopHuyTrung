import { products } from "../data/products";

const categories = [...new Set(products.map((product) => product.category))];

export default function CategoryList() {
  return (
    <section className="container category-section">
      <h2 className="section-title">Danh mục sản phẩm</h2>
      <div className="category-list">
        {categories.map((category) => (
          <span className="category-chip" key={category}>
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}