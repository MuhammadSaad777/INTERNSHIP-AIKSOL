import './ProductItem.css';

function ProductItem({ product, onDelete }) {
  return (
    <li className="product-item">
      <span className="product-name">{product.name}</span>
      <span className="product-price">${product.price}</span>
      <button
        className="product-delete-btn"
        onClick={() => onDelete(product.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ProductItem;