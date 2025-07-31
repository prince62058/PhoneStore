import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroBanner from "@/components/sections/hero-banner";
import ProductGrid from "@/components/sections/product-grid";
import CategoryGrid from "@/components/sections/category-grid";
import { useGSAP } from "@/hooks/use-gsap";
import { Product, Category, Brand } from "@shared/schema";

export default function Home() {
  useGSAP();

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: popularProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products/popular"],
  });

  const { data: bestsellerProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products/bestsellers"],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: brands = [] } = useQuery<Brand[]>({
    queryKey: ["/api/brands"],
  });

  const watchOutProducts = products.slice(0, 3);
  const useCases = [
    {
      name: "Content Creation",
      imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Gaming",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Productivity",
      imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "5G Network",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Daylong Use",
      imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Binge Watching",
      imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
    }
  ];

  const budgetRanges = [
    { name: "Below ₹5K", imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" },
    { name: "₹5K - ₹10K", imageUrl: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" },
    { name: "₹10K - ₹20K", imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" },
    { name: "₹20K - ₹30K", imageUrl: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" },
    { name: "₹30K - ₹50K", imageUrl: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" },
    { name: "Above ₹50K", imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="#" className="text-gray-600 hover:text-primary">Phones & Wearables</a>
            <span className="text-gray-400">›</span>
            <span className="text-gray-900 font-medium">Mobile Phones</span>
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Mobile Phones</h1>
        </div>
      </div>

      <HeroBanner />

      {/* Product Description */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Treat yourself to a new Mobile Phone</h2>
            <p className="text-gray-300 leading-relaxed">
              Experience the world at your fingertips! Work, socialise, book a ride, play games, listen to music, 
              watch your favourite shows, take a photo, or simply make a call! Buy a Mobile Phone from Croma that 
              does it all and then some.
            </p>
          </div>
        </div>
      </section>

      <ProductGrid 
        title="Watch out for this" 
        products={watchOutProducts}
        className="py-16"
      />

      <ProductGrid 
        title="Most Popular Smartphones" 
        products={popularProducts}
        className="py-16 bg-gray-50"
      />

      <ProductGrid 
        title="Bestseller" 
        products={bestsellerProducts}
        className="py-16"
        gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
      />

      <CategoryGrid 
        title="Choose Your Type" 
        items={categories}
        className="py-16 bg-gray-50"
        gridCols="grid-cols-1 md:grid-cols-3"
      />

      <CategoryGrid 
        title="Your Smartphone, Your Use" 
        items={useCases}
        className="py-16"
        gridCols="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      />

      <CategoryGrid 
        title="Pick Your Smartphone Brand" 
        items={brands}
        className="py-16 bg-gray-50"
        gridCols="grid-cols-2 md:grid-cols-4"
      />

      <CategoryGrid 
        title="For Your Budget" 
        items={budgetRanges}
        className="py-16"
        gridCols="grid-cols-2 md:grid-cols-3"
      />

      <Footer />
    </div>
  );
}
