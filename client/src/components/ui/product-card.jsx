import { Button } from "./button";

export default function ProductCard({ product }) {
  const formatPrice = (price) => {
    return `₹${parseFloat(price).toLocaleString('en-IN')}`;
  };

  return (
    <div className="product-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden scroll-trigger-element">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{product.name}</h3>
        {product.ram && product.storage && product.color && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            {product.ram} RAM, {product.storage}, {product.color}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-primary font-bold text-lg">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-500 dark:text-gray-400 line-through text-sm block">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <Button 
            size="sm" 
            className="bg-primary text-white hover:bg-primary/90"
          >
            Add to Cart
          </Button>
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {product.features?.map((feature, index) => (
            <span 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-3">
          {product.isBestseller && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Bestseller
            </span>
          )}
          {product.isPopular && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
              Popular
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
}