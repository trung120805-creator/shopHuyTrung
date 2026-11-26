import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products, type Product } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

type TabKey = "featured" | "cheap" | "electronics" | "lowStock";

type ProductSectionConfig = {
  key: TabKey;
  label: string;
  title: string;
  subtitle: string;
  items: Product[];
};

const PRODUCT_SECTIONS: ProductSectionConfig[] = [
  {
    key: "featured",
    label: "Sản phẩm nổi bật",
    title: "Sản phẩm nổi bật",
    subtitle: "Những sản phẩm được yêu thích nhất hiện nay",
    items: products,
  },
  {
    key: "cheap",
    label: "Giá dưới 300.000 đ",
    title: "Giá dưới 300.000 đ",
    subtitle: "Các sản phẩm giá tốt sắp xếp tăng dần",
    items: filterProducts(products, { maxPrice: 300000, sort: "asc" }),
  },
  {
    key: "electronics",
    label: "Đồ điện tử",
    title: "Đồ điện tử",
    subtitle: "Thiết bị công nghệ và phụ kiện điện tử",
    items: filterProducts(products, { category: "Điện tử" }),
  },
  {
    key: "lowStock",
    label: "Sắp hết hàng",
    title: "Sản phẩm sắp hết hàng",
    subtitle: "Số lượng tồn kho từ 1 đến 5 sản phẩm",
    items: products.filter((p) => p.stock >= 1 && p.stock <= 5),
  },
];

type ActiveView =
  | { type: "tab"; tab: TabKey }
  | { type: "category"; category: string };

function App() {
  const [activeView, setActiveView] = useState<ActiveView>({
    type: "tab",
    tab: "featured",
  });
  const [keyword, setKeyword] = useState("");

  const selectedCategory =
    activeView.type === "category" ? activeView.category : null;

  const currentSection =
    activeView.type === "category"
      ? {
          title: `Danh mục: ${activeView.category}`,
          subtitle: `Các sản phẩm thuộc danh mục ${activeView.category}`,
          items: filterProducts(products, { category: activeView.category }),
        }
      : PRODUCT_SECTIONS.find((section) => section.key === activeView.tab) ??
        PRODUCT_SECTIONS[0];

  const displayedItems = keyword.trim()
    ? filterProducts(currentSection.items, { keyword })
    : currentSection.items;

  const viewKey =
    activeView.type === "category"
      ? `category-${activeView.category}`
      : `tab-${activeView.tab}`;

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={(category) =>
            setActiveView({ type: "category", category })
          }
        />

        <div id="products" className="products-stage">
          <div className="container products-toolbar">
            <div
              className="product-tabs"
              role="tablist"
              aria-label="Nhóm sản phẩm"
            >
              {PRODUCT_SECTIONS.map((section) => {
                const isActive =
                  activeView.type === "tab" && activeView.tab === section.key;

                return (
                  <button
                    key={section.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`tab-btn ${isActive ? "is-active" : ""}`}
                    onClick={() =>
                      setActiveView({ type: "tab", tab: section.key })
                    }
                  >
                    <span>{section.label}</span>
                    <span className="tab-count">{section.items.length}</span>
                  </button>
                );
              })}
            </div>

            <div className="toolbar-actions">
              {selectedCategory && (
                <button
                  type="button"
                  className="reset-filter-btn"
                  onClick={() =>
                    setActiveView({ type: "tab", tab: "featured" })
                  }
                >
                  Đang lọc: {selectedCategory} ✕
                </button>
              )}

              <label className="search-box">
                <span className="search-icon" aria-hidden="true">
                  ⌕
                </span>
                <input
                  type="search"
                  placeholder="Tìm sản phẩm..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  aria-label="Tìm sản phẩm"
                />
              </label>
            </div>
          </div>

          <ProductList
            key={viewKey}
            title={currentSection.title}
            subtitle={currentSection.subtitle}
            items={displayedItems}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
