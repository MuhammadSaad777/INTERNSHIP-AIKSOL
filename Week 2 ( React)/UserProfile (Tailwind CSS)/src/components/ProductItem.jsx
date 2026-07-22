function ProductItem({ product, onDelete }) {
  return (
    <li className="flex w-72 items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-md transition hover:shadow-lg">
      <div>
        <p className="font-medium text-gray-800">{product.name}</p>
        <p className="text-sm text-gray-500">${product.price}</p>
      </div>
      <button
        className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
        onClick={() => onDelete(product.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ProductItem;