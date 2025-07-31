import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CategoryGrid({ 
  title, 
  items, 
  className = "", 
  gridCols = "grid-cols-1 md:grid-cols-3" 
}) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 scroll-trigger-element text-gray-900 dark:text-white">{title}</h2>
        <div className={cn("grid gap-6", gridCols)}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className="product-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden scroll-trigger-element"
            >
              <img 
                src={item.imageUrl || item.logoUrl || "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"} 
                alt={item.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{item.name}</h3>
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                )}
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}