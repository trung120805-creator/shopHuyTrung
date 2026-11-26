export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <span className="logo-mark" aria-hidden="true">◆</span>
            Shop<span>HuyTrung</span>
          </a>
          <p className="footer-desc">
            Cửa hàng trực tuyến hiện đại — Đồ án môn Công nghệ lập trình hiện đại.
          </p>
        </div>

        <div className="footer-meta">
          <p>Hotline: 1900 0000 · Email: hotro@shopHuyTrung.vn</p>
          <p>© {year} ShopHuyTrung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
