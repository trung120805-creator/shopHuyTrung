# ShopHuyTrung - Lab 1

## Chạy project
1. Cài Node.js LTS và VS Code.
2. Mở thư mục `shopHuyTrung` bằng VS Code.
3. Mở Terminal (Ctrl + `), chạy:

```bash
npm install
npm run dev
```

4. Mở địa chỉ Vite hiện trong Terminal (thường là http://localhost:5173).

## Cấu trúc
- `src/components/`: Header, Banner, CategoryList, ProductCard, ProductList, Footer
- `src/data/products.ts`: dữ liệu 6 sản phẩm
- `src/App.tsx`: ghép các component
- `src/App.css`: giao diện

## Đẩy lên GitHub
Tạo repository `shopHuyTrung` trên GitHub, rồi chạy trong Terminal:

```bash
git init
git add .
git commit -m "Lab 1: trang chu ShopHuyTrung"
git branch -M main
git remote add origin https://github.com/<ten-tai-khoan>/shopHuyTrung.git
git push -u origin main
```

Thay `<ten-tai-khoan>` bằng username GitHub của bạn.
