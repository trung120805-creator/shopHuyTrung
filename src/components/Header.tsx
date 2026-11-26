export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark" aria-hidden="true">◆</span>
          Shop<span>HuyTrung</span>
        </a>

        <nav className="nav" aria-label="Điều hướng chính">
          <a href="#top">Trang chủ</a>
          <a href="#categories">Danh mục</a>
          <a href="#products">Sản phẩm</a>
          <a href="#footer">Liên hệ</a>
        </nav>

        <a href="#products" className="cart-link">
          <span className="cart-icon" aria-hidden="true">🛒</span>
          <span>Giỏ hàng</span>
          <span className="cart-badge">0</span>
        </a>
      </div>
    </header>
  );
}
