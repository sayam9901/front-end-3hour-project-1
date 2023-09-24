
import React, { useState } from 'react';
import './App.css';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };
  return (
    <div className="App">
    <h1>Product Inventory</h1>
    <ProductForm  products={products} onAddProduct={handleAddProduct} />
    <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
  </div>
  );
}

export default App;
