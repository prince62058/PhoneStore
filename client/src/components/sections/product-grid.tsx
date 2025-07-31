import { Product } from "@shared/schema";
import ProductCard from "@/components/ui/product-card";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  title: string;
  products: Product[];
  className?: string;
  gridCols?: string;
}

export default function ProductGrid({ 
  title, 
  products, 
  className = "", 
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
}: ProductGridProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 scroll-trigger-element">{title}</h2>
        <div className={cn("grid gap-6", gridCols)}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
