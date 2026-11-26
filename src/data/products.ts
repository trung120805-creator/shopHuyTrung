export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Áo thun basic",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=450&fit=crop&q=80",
    category: "Thời trang",
    stock: 12,
  },
  {
    id: 2,
    name: "Quần jean slim",
    price: 420000,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=450&fit=crop&q=80",
    category: "Thời trang",
    stock: 5,
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth",
    price: 690000,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop&q=80",
    category: "Điện tử",
    stock: 0,
  },
  {
    id: 4,
    name: "Bình giữ nhiệt 500ml",
    price: 185000,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542cc6b9?w=600&h=450&fit=crop&q=80",
    category: "Gia dụng",
    stock: 20,
  },
  {
    id: 5,
    name: "Balo laptop 15 inch",
    price: 550000,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=450&fit=crop&q=80",
    category: "Phụ kiện",
    stock: 8,
  },
  {
    id: 6,
    name: "Chuột không dây",
    price: 245000,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=450&fit=crop&q=80",
    category: "Điện tử",
    stock: 15,
  },
];
