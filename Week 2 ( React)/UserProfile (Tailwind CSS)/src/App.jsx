import { useState } from 'react';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import ProductItem from './components/ProductItem';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';

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
    <div>
      <Navbar />

      <div className="px-6 py-10 text-center">
        <h1 className="mb-6 text-2xl font-bold">User Profiles</h1>
        <div className="mb-16 flex flex-wrap justify-center gap-5">
          <UserProfile name="Muhammad Saad" role="Frontend Developer" imageUrl="/avatar1.jpeg" />
          <UserProfile name="Cristiano Ronaldo" role="Backend Developer" imageUrl="/avatar2.jpeg" />
          <UserProfile name="Babar Azam" role="AI Engineer" imageUrl="/avatar3.jpeg" />
        </div>

        <h1 className="mb-6 text-2xl font-bold">Counter</h1>
        <div className="mb-16"><Counter /></div>

        <h1 className="mb-6 text-2xl font-bold">Toggle</h1>
        <div className="mb-16"><Toggle /></div>

        <h1 className="mb-6 text-2xl font-bold">Products</h1>
        <ul className="mb-16 flex flex-col items-center gap-3">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} onDelete={handleDelete} />
          ))}
        </ul>

        <h1 className="mb-6 text-2xl font-bold">Registration Form</h1>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;