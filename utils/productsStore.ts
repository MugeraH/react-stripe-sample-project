const productsArray: any[] = [
  { id: 1, title: "Coffee", price: 4.99 },
  { id: 2, title: "Sunglasses", price: 9.99 },
  { id: 3, title: "Camera", price: 14.99 },
];

function getProductData(id: number) {
  let productData = productsArray.find((product) => product.id === id);
  return productData;
}

export { productsArray, getProductData };
