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
      imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Your%20Smartphone,%20Your%20Use/4split_PCP_smartphonesfor_content-creation_15May2023_zczhv8.png?tr=w-300"
    },
    {
      name: "Gaming",
      imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_Gaming_25Oct2023_w5stjf.png?tr=w-300"
    },
    {
      name: "Productivity",
      imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_Productivity_25Oct2023_seszo7.png?tr=w-300"
    },
    {
      name: "5G Network",
      imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_5GNetwork_25Oct2023_i1z2wc.png?tr=w-300"
    },
    {
      name: "Daylong Use",
      imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_Daylonguse_25Oct2023_hilmcr.png?tr=w-300"
    },
    {
      name: "Binge Watching",
      imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_Bingewatching_25Oct2023_ofkw6y.png?tr=w-300"
    }
  ];

  const budgetRanges = [
    { name: "Below ₹5K", imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_below5K_15May2023_k8wvhd.png?tr=w-300" },
    { name: "₹5K - ₹10K", imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_5Kto10K_15May2023_xm9iqq.png?tr=w-300" },
    { name: "₹10K - ₹20K", imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_10Kto20K_15May2023_fuop6n.png?tr=w-300" },
    { name: "₹20K - ₹30K", imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_20Kto30K_15May2023_yrfh2g.png?tr=w-300" },
    { name: "₹30K - ₹50K", imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_30Kto50K_15May2023_qspz8w.png?tr=w-300" },
    { name: "Above ₹50K", imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_above50K_15May2023_bznsjt.png?tr=w-300" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="bg-gray-100 dark:bg-gray-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Phones & Wearables</a>
            <span className="text-gray-400">›</span>
            <span className="text-gray-900 dark:text-white font-medium">Mobile Phones</span>
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <div className="bg-gray-900 dark:bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Mobile Phones</h1>
        </div>
      </div>

      <HeroBanner />

      {/* Product Description */}
      <section className="py-12 bg-gray-900 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Treat yourself to a new Mobile Phone</h2>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
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
        className="py-16 bg-gray-50 dark:bg-gray-800"
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
        className="py-16 bg-gray-50 dark:bg-gray-800"
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
        className="py-16 bg-gray-50 dark:bg-gray-800"
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
