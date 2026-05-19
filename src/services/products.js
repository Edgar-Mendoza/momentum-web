export async function getProducts() {
  const response = await fetch(
    "http://localhost:4000/api/products"
  );

  const data = await response.json();

  return data.data;
}

export async function getProduct(id) {
  const response = await fetch(
    `http://localhost:4000/api/products/${id}`
  );

  const data = await response.json();

  return data.data;
}