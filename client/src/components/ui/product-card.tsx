import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: string) => {
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
          <Button className="bg-primary text-white hover:bg-primary/90">
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
