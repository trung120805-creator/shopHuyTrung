// Chạy: node playground/es6.ts   (cần Node.js 22.18 trở lên)

// 1. let / const
const shopName = "ShopMini";
let visitCount = 0;
visitCount += 1;

// 2. Template string
console.log(`Chào mừng đến ${shopName}! Lượt xem: ${visitCount}`);

// 3. Arrow function, tham số mặc định
const discount = (price: number, percent = 10) => price - (price * percent) / 100;
console.log("Giá sau giảm:", discount(200000), discount(200000, 25));

// 4. Destructuring đối tượng và mảng
const product = { id: 1, name: "Áo thun", price: 150000, tags: ["mới", "hot"] };
const { name: productName, price } = product; // đổi tên khi destructuring
const [firstTag] = product.tags;
console.log(productName, price, firstTag);

// 5. Spread: sao chép và ghi đè, không sửa đối tượng gốc
const updated = { ...product, price: 120000 };
console.log(product.price, "->", updated.price);
const moreTags = [...product.tags, "giảm giá"];
console.log(moreTags);

// 6. Rest parameter
const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);
console.log("Tổng:", sum(1, 2, 3, 4));

// 7. map / filter / find / reduce
const prices = [150000, 420000, 690000, 185000];
const vnd = prices.map((p) => p.toLocaleString("vi-VN") + " đ");
const cheap = prices.filter((p) => p < 300000);
const firstExpensive = prices.find((p) => p > 400000);
const total = prices.reduce((acc, p) => acc + p, 0);
console.log({ vnd, cheap, firstExpensive, total });

// 8. Optional chaining (?.) và nullish coalescing (??)
type User = { name: string; address?: { city?: string } };
const guest: User = { name: "Khách" };
console.log(guest.address?.city ?? "Chưa có địa chỉ");

// 9. Promise và async/await
const fakeFetchProducts = (): Promise<string[]> =>
  new Promise((resolve) => setTimeout(() => resolve(["Áo thun", "Quần jean"]), 500));

async function main() {
  console.log("Đang tải sản phẩm...");
  const names = await fakeFetchProducts();
  console.log("Đã tải:", names);
}
main();
