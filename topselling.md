Got it — you want a JavaScript problem that's different from enum filtering, but still complex and useful. Here's one involving nested data structures, sorting, filtering, and logic chaining, which simulates a real-world backend-like use case.

🧩 Problem: Find Top-Selling Product by Category
You’re given a list of product orders like this:

js
Copy
Edit
const orders = [
  { id: 1, product: 'Laptop', category: 'Electronics', quantity: 3 },
  { id: 2, product: 'Phone', category: 'Electronics', quantity: 10 },
  { id: 3, product: 'T-Shirt', category: 'Clothing', quantity: 5 },
  { id: 4, product: 'Shoes', category: 'Clothing', quantity: 8 },
  { id: 5, product: 'Headphones', category: 'Electronics', quantity: 7 },
  { id: 6, product: 'Shoes', category: 'Clothing', quantity: -1 }, // Invalid
];
🎯 Task:
Validate orders: quantity must be a positive integer.

Group orders by category.

Within each category, find the product with the highest total quantity sold.

Return a result like:

js
Copy
Edit
{
  Electronics: { product: 'Phone', totalSold: 10 },
  Clothing: { product: 'Shoes', totalSold: 8 }
}
✅ Step-by-Step Solution
✅ Step 1: Filter invalid orders
js
Copy
Edit
const validOrders = orders.filter(order =>
  Number.isInteger(order.quantity) && order.quantity > 0
);
✅ Step 2: Accumulate total quantity per product
js
Copy
Edit
const categoryMap = {};

validOrders.forEach(order => {
  const { category, product, quantity } = order;

  if (!categoryMap[category]) {
    categoryMap[category] = {};
  }

  if (!categoryMap[category][product]) {
    categoryMap[category][product] = 0;
  }

  categoryMap[category][product] += quantity;
});
✅ Step 3: Determine top-selling product per category
js
Copy
Edit
const result = {};

for (const category in categoryMap) {
  let topProduct = '';
  let maxQty = 0;

  for (const product in categoryMap[category]) {
    if (categoryMap[category][product] > maxQty) {
      topProduct = product;
      maxQty = categoryMap[category][product];
    }
  }

  result[category] = { product: topProduct, totalSold: maxQty };
}
✅ Final Output
js
Copy
Edit
console.log(result);
// {
//   Electronics: { product: 'Phone', totalSold: 10 },
//   Clothing: { product: 'Shoes', totalSold: 8 }
// }
🔥 Concepts Practiced
Filtering & validation

Nested object manipulation

Grouping by property

Aggregation (summing quantities)

Finding max in grouped data

Let me know if you want a version that includes sorting all products by total sales or converting this to TypeScript.
