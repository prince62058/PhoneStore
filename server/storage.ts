import { randomUUID } from "crypto";

export class MemStorage {
  users;
  products;
  categories;
  brands;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.categories = new Map();
    this.brands = new Map();
    this.initializeData();
  }

  initializeData() {
    // Initialize categories with real Croma category images
    const phoneCategories = [
      {
        name: "iPhones",
        slug: "iphones",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Choose%20Your%20Type/3split_PCP_righttype_iPhone_15May2023_dfaihn.png?tr=w-400",
        description: "Experience the power of iOS"
      },
      {
        name: "Android Phones",
        slug: "android-phones", 
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Choose%20Your%20Type/3split_PCP_righttype_Android_15May2023_m5mclk.png?tr=w-400",
        description: "Endless possibilities with Android"
      },
      {
        name: "Feature Phones",
        slug: "feature-phones",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Choose%20Your%20Type/3split_PCP_righttype_Feature_15May2023_say3ow.png?tr=w-400",
        description: "Simple and reliable communication"
      }
    ];

    phoneCategories.forEach(cat => {
      const category = { ...cat, id: randomUUID(), description: cat.description || null };
      this.categories.set(category.id, category);
    });

    // Initialize brands with authentic Croma brand images
    const phoneBrands = [
      {
        name: "Apple",
        logoUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/PCP/23rd%20June/4spli_PCP_shopbybrand_apple_23june2023_sk5llx.png?tr=w-300",
        description: "Think Different"
      },
      {
        name: "Samsung",
        logoUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP/Mobile/06022025/Desktop/PCP_3split_flagship_Samsung_6Feb2025_lezfgc.png?tr=w-300",
        description: "Do what you can't"
      },
      {
        name: "Vivo",
        logoUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/4spli_PCP_shopbybrand_vivo_27sep2022_knaawj.png?tr=w-300",
        description: "Camera & Music"
      },
      {
        name: "OnePlus",
        logoUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/4spli_PCP_shopbybrand_oneplus_27sep2022_bdlvsd.png?tr=w-300",
        description: "Never Settle"
      },
      {
        name: "Nothing",
        logoUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/PCP/Mobile%20PCP/18-10-2023/4spli_PCP_shopbybrand_nothing_180ct2023_xy128n.png?tr=w-300",
        description: "Tech with a human touch"
      },
      {
        name: "Oppo",
        logoUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/4spli_PCP_shopbybrand_oppo_27sep2022_aga789.png?tr=w-300",
        description: "Inspiration Ahead"
      },
      {
        name: "Realme",
        logoUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/4spli_PCP_shopbybrand_realme_3nov2022_u4p8mv.png?tr=w-300",
        description: "Dare to leap"
      },
      {
        name: "Xiaomi",
        logoUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/4spli_PCP_shopbybrand_mi_27sep2022_tpwcdb.png?tr=w-300",
        description: "Make it happen"
      }
    ];

    phoneBrands.forEach(brand => {
      const newBrand = { ...brand, id: randomUUID(), description: brand.description || null };
      this.brands.set(newBrand.id, newBrand);
    });

    // Initialize products with authentic Croma data
    const sampleProducts = [
      {
        name: "Apple iPhone 16 (128GB, Teal)", 
        brand: "Apple",
        model: "iPhone 16",
        price: "74900.00",
        originalPrice: "79900.00",
        category: "smartphones",
        subcategory: "iphones",
        ram: "8GB",
        storage: "128GB",
        color: "Teal",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309695_0_peotee.png?tr=w-300",
        features: ["A18 Bionic chip", "48MP Camera", "Face ID", "5G"],
        isBestseller: true,
        isPopular: true,
        description: "Experience the latest iPhone with advanced A18 Bionic chip and professional camera capabilities"
      },
      {
        name: "realme 14x 5G (6GB RAM, 128GB, Golden Glow)",
        brand: "Realme", 
        model: "14x 5G",
        price: "14999.00",
        originalPrice: "16999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "6GB",
        storage: "128GB", 
        color: "Golden Glow",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/312422_0_hxo2mn.png?tr=w-300",
        features: ["5G Ready", "50MP Camera", "5000mAh Battery"],
        isBestseller: true,
        description: "Affordable 5G smartphone with exceptional battery life"
      },
      {
        name: "vivo T3 Lite 5G (6GB RAM, 128GB, Vibrant Green)",
        brand: "Vivo",
        model: "T3 Lite 5G", 
        price: "11499.00",
        originalPrice: "12499.00",
        category: "smartphones",
        subcategory: "android",
        ram: "6GB",
        storage: "128GB",
        color: "Vibrant Green",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/307900_0_gtdiuq.png?tr=w-300",
        features: ["5G Connectivity", "AI Photography", "Fast Charging"],
        isBestseller: true,
        description: "Budget-friendly 5G phone with AI-powered photography"
      },
      {
        name: "Nothing CMF Phone 1 5G (6GB RAM, 128GB, Black)",
        brand: "Nothing",
        model: "CMF Phone 1 5G",
        price: "15999.00", 
        originalPrice: "27999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "6GB",
        storage: "128GB",
        color: "Black",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/308330_0_li240c.png?tr=w-300",
        features: ["Transparent Design", "50MP Camera", "Nothing OS"],
        isBestseller: true,
        isPopular: true,
        description: "Innovative transparent design with Nothing OS experience"
      },
      {
        name: "Redmi 13 5G (6GB RAM, 128GB, Orchid Pink)",
        brand: "Redmi",
        model: "13 5G",
        price: "12499.00",
        originalPrice: "17999.00",
        category: "smartphones", 
        subcategory: "android",
        ram: "6GB",
        storage: "128GB",
        color: "Orchid Pink",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/307691_0_jtjpit.png?tr=w-300",
        features: ["5G Ready", "108MP Camera", "MIUI"],
        isBestseller: true,
        description: "Feature-packed affordable phone with MIUI experience"
      },
      {
        name: "Samsung Galaxy S25 Edge 5G (12GB RAM, 512GB, Titanium Silver)",
        brand: "Samsung",
        model: "Galaxy S25 Edge 5G",
        price: "90000.00",
        originalPrice: "95999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "12GB",
        storage: "512GB",
        color: "Titanium Silver", 
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP/All%20Folder/18072025/Mobile/PCP_3split_WatchOut_Samsung1_18July25_4ifBcchDA7.png?tr=w-300",
        features: ["Snapdragon 8 Gen 3", "200MP Camera", "S Pen", "5G"],
        isPopular: true,
        description: "Premium flagship smartphone with S Pen functionality"
      },
      {
        name: "Oppo Reno 14 5G (8GB RAM, 256GB, Forest Green)",
        brand: "Oppo",
        model: "Reno 14 5G",
        price: "34999.00",
        originalPrice: "38999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "8GB",
        storage: "256GB",
        color: "Forest Green",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP/All%20Folder/18072025/Mobile/PCP_2Split_WatchOut_Oppo_18July25_Ah-e9v18xR.png?tr=w-300",
        features: ["Portrait Photography", "ColorOS", "Fast Charging"],
        isPopular: true,
        description: "Photography-focused smartphone with advanced portrait features"
      },
      {
        name: "Nothing Phone 3 5G (12GB RAM, 256GB, Black)",
        brand: "Nothing",
        model: "Phone 3 5G",
        price: "45999.00",
        originalPrice: "52999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "12GB",
        storage: "256GB",
        color: "Black",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP/All%20Folder/18072025/Mobile/PCP_2Split_WatchOut_nothing_18July25_zamKOjmaRB.png?tr=w-300",
        features: ["Glyph Interface", "50MP Dual Camera", "Nothing OS 3.0"],
        isPopular: true,
        description: "Revolutionary design with unique Glyph interface"
      },
      {
        name: "Apple iPhone 16e (128GB, Black)",
        brand: "Apple",
        model: "iPhone 16e",
        price: "59900.00",
        originalPrice: "64900.00",
        category: "smartphones",
        subcategory: "iphones",
        ram: "6GB",
        storage: "128GB",
        color: "Black",
        imageUrl: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16e-1.jpg",
        features: ["A17 Pro chip", "48MP Camera", "Face ID", "5G"],
        isBestseller: true,
        isPopular: true,
        description: "Affordable iPhone with powerful A17 Pro performance"
      },
      {
        name: "Google Pixel 9A 5G (8GB RAM, 256GB, Obsidian)",
        brand: "Google",
        model: "Pixel 9A 5G",
        price: "42999.00",
        originalPrice: "47999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "8GB",
        storage: "256GB",
        color: "Obsidian",
        imageUrl: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/314881_0_hgljcv.png?tr=w-300",
        features: ["Google Tensor G4", "50MP Camera", "Pure Android", "AI Features"],
        isPopular: true,
        description: "Pure Google experience with advanced AI photography"
      }
    ];

    sampleProducts.forEach(product => {
      const newProduct = { 
        ...product, 
        id: randomUUID(), 
        inStock: true,
        color: product.color || null,
        description: product.description || null,
        originalPrice: product.originalPrice || null,
        subcategory: product.subcategory || null,
        ram: product.ram || null,
        storage: product.storage || null,
        features: product.features || null,
        isPopular: product.isPopular || false,
        isBestseller: product.isBestseller || false
      };
      this.products.set(newProduct.id, newProduct);
    });
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts() {
    return Array.from(this.products.values());
  }

  async getProduct(id) {
    return this.products.get(id);
  }

  async getProductsByCategory(category) {
    return Array.from(this.products.values()).filter(
      product => product.category === category || product.subcategory === category
    );
  }

  async getPopularProducts() {
    return Array.from(this.products.values()).filter(product => product.isPopular);
  }

  async getBestsellerProducts() {
    return Array.from(this.products.values()).filter(product => product.isBestseller);
  }

  async getProductsByBrand(brand) {
    return Array.from(this.products.values()).filter(
      product => product.brand.toLowerCase() === brand.toLowerCase()
    );
  }

  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = { 
      ...insertProduct, 
      id, 
      inStock: true, 
      isPopular: false, 
      isBestseller: false,
      color: insertProduct.color || null,
      description: insertProduct.description || null,
      originalPrice: insertProduct.originalPrice || null,
      subcategory: insertProduct.subcategory || null,
      ram: insertProduct.ram || null,
      storage: insertProduct.storage || null,
      features: insertProduct.features || null
    };
    this.products.set(id, product);
    return product;
  }

  async getCategories() {
    return Array.from(this.categories.values());
  }

  async createCategory(insertCategory) {
    const id = randomUUID();
    const category = { ...insertCategory, id, description: insertCategory.description || null };
    this.categories.set(id, category);
    return category;
  }

  async getBrands() {
    return Array.from(this.brands.values());
  }

  async createBrand(insertBrand) {
    const id = randomUUID();
    const brand = { ...insertBrand, id, description: insertBrand.description || null };
    this.brands.set(id, brand);
    return brand;
  }
}

export const storage = new MemStorage();