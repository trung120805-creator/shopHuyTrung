export default function Banner() {
  return (
    <section id="top" className="banner">
      <div className="banner-grid">
        <div className="banner-content">
          <span className="banner-badge">
            <span className="pulse-dot" aria-hidden="true" />
            Bộ sưu tập mới · Ưu đãi độc quyền
          </span>
          <h1>
            Nâng tầm trải nghiệm tại <span>ShopHuyTrung</span>
          </h1>
          <p>
            Sản phẩm công nghệ, thời trang và gia dụng tinh chọn với mức giá tốt
            nhất. Miễn phí vận chuyển cho đơn hàng từ 300.000 đ.
          </p>
          <div className="banner-actions">
            <a className="banner-button primary" href="#products">
              Khám phá ngay
              <span aria-hidden="true">→</span>
            </a>
            <a className="banner-button secondary" href="#categories">
              Xem danh mục
            </a>
          </div>
        </div>

        <div className="banner-highlights" aria-label="Điểm nổi bật">
          <div className="highlight-card">
            <span className="highlight-icon">⚡</span>
            <div>
              <strong>Giao nhanh 2H</strong>
              <p>Nội thành siêu tốc</p>
            </div>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">💎</span>
            <div>
              <strong>Chính hãng 100%</strong>
              <p>Bảo hành toàn diện</p>
            </div>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">🔄</span>
            <div>
              <strong>Đổi trả 30 ngày</strong>
              <p>An tâm mua sắm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-visual" aria-hidden="true">
        <div className="banner-shape shape-1" />
        <div className="banner-shape shape-2" />
        <div className="banner-shape shape-3" />
      </div>
    </section>
  );
}
