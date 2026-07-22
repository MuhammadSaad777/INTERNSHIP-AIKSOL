import { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import ProductItem from './components/ProductItem';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Wireless Mouse', price: 15 },
    { id: 2, name: 'Mechanical Keyboard', price: 45 },
    { id: 3, name: 'USB-C Hub', price: 25 },
    { id: 4, name: 'Laptop Stand', price: 30 },
    { id: 5, name: 'Webcam', price: 40 },
  ]);

  function handleDelete(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <div className="app-container">
      <h1>User Profiles</h1>
      <div className="profiles-list">
        <UserProfile
          name="Muhammad Saad"
          role="Frontend Developer"
          imageUrl="/avatar1.jpeg"
        />
        <UserProfile
          name="Cristiano Ronaldo"
          role="Backend Developer"
          imageUrl="/avatar2.jpeg"
        />
        <UserProfile
          name="Babar Azam"
          role="AI Engineer"
          imageUrl="/avatar3.jpeg"
        />
      </div>

      <h1>Counter</h1>
      <Counter />

      <h1>Toggle</h1>
      <Toggle />

      <h1>Products</h1>
      <ul className="products-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      <h1>Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;