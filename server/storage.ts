import { type User, type InsertUser, type Product, type InsertProduct, type Category, type InsertCategory, type Brand, type InsertBrand } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getPopularProducts(): Promise<Product[]>;
  getBestsellerProducts(): Promise<Product[]>;
  getProductsByBrand(brand: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getCategories(): Promise<Category[]>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  getBrands(): Promise<Brand[]>;
  createBrand(brand: InsertBrand): Promise<Brand>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private categories: Map<string, Category>;
  private brands: Map<string, Brand>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.categories = new Map();
    this.brands = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize categories
    const phoneCategories: InsertCategory[] = [
      {
        name: "iPhones",
        slug: "iphones",
        imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Experience the power of iOS"
      },
      {
        name: "Android Phones",
        slug: "android-phones", 
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Endless possibilities with Android"
      },
      {
        name: "Feature Phones",
        slug: "feature-phones",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Simple and reliable communication"
      }
    ];

    phoneCategories.forEach(cat => {
      const category: Category = { ...cat, id: randomUUID() };
      this.categories.set(category.id, category);
    });

    // Initialize brands
    const phoneBrands: InsertBrand[] = [
      {
        name: "Apple",
        logoUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        description: "Innovation at its finest"
      },
      {
        name: "Samsung",
        logoUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        description: "Galaxy of possibilities"
      },
      {
        name: "Vivo",
        logoUrl: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        description: "Camera and music"
      },
      {
        name: "OnePlus",
        logoUrl: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
        description: "Never settle"
      }
    ];

    phoneBrands.forEach(brand => {
      const newBrand: Brand = { ...brand, id: randomUUID() };
      this.brands.set(newBrand.id, newBrand);
    });

    // Initialize products
    const sampleProducts: InsertProduct[] = [
      {
        name: "Apple iPhone 16",
        brand: "Apple",
        model: "iPhone 16",
        price: "74900.00",
        originalPrice: "79900.00",
        category: "smartphones",
        subcategory: "iphones",
        ram: "8GB",
        storage: "128GB",
        color: "Teal",
        imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        features: ["A18 Bionic chip", "48MP Camera", "Face ID", "5G"],
        isBestseller: true,
        isPopular: true,
        description: "The latest iPhone with advanced features"
      },
      {
        name: "realme 14x 5G",
        brand: "Realme",
        model: "14x 5G",
        price: "14999.00",
        originalPrice: "16999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "6GB",
        storage: "128GB",
        color: "Golden Glow",
        imageUrl: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        features: ["5G Ready", "50MP Camera", "5000mAh Battery"],
        isBestseller: true,
        description: "Affordable 5G smartphone"
      },
      {
        name: "vivo T3 Lite 5G",
        brand: "Vivo",
        model: "T3 Lite 5G",
        price: "11499.00",
        originalPrice: "12499.00",
        category: "smartphones",
        subcategory: "android",
        ram: "6GB",
        storage: "128GB",
        color: "Vibrant Green",
        imageUrl: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        features: ["5G Connectivity", "AI Photography", "Fast Charging"],
        isBestseller: true,
        description: "Budget-friendly 5G phone"
      },
      {
        name: "Nothing CMF Phone 1 5G",
        brand: "Nothing",
        model: "CMF Phone 1 5G",
        price: "15999.00",
        originalPrice: "27999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "6GB",
        storage: "128GB",
        color: "Black",
        imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        features: ["Transparent Design", "50MP Camera", "Nothing OS"],
        isBestseller: true,
        isPopular: true,
        description: "Innovative transparent design"
      },
      {
        name: "Redmi 13 5G",
        brand: "Redmi",
        model: "13 5G",
        price: "12499.00",
        originalPrice: "17999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "6GB",
        storage: "128GB",
        color: "Orchid Pink",
        imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        features: ["5G Ready", "108MP Camera", "MIUI"],
        isBestseller: true,
        description: "Feature-packed affordable phone"
      },
      {
        name: "Samsung Galaxy S25 Edge 5G",
        brand: "Samsung",
        model: "Galaxy S25 Edge 5G",
        price: "89999.00",
        originalPrice: "99999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "12GB",
        storage: "512GB",
        color: "Titanium Silver",
        imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        features: ["Snapdragon 8 Gen 3", "200MP Camera", "S Pen", "5G"],
        isPopular: true,
        description: "Premium flagship smartphone"
      },
      {
        name: "Oppo Reno 14 5G",
        brand: "Oppo",
        model: "Reno 14 5G",
        price: "32999.00",
        originalPrice: "36999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "8GB",
        storage: "256GB",
        color: "Forest Green",
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        features: ["Portrait Photography", "ColorOS", "Fast Charging"],
        isPopular: true,
        description: "Photography-focused smartphone"
      },
      {
        name: "Vivo V40e 5G",
        brand: "Vivo",
        model: "V40e 5G",
        price: "28999.00",
        originalPrice: "31999.00",
        category: "smartphones",
        subcategory: "android",
        ram: "8GB",
        storage: "128GB",
        color: "Royal Bronze",
        imageUrl: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        features: ["Aura Light Portrait", "5000mAh Battery", "Funtouch OS"],
        isPopular: true,
        description: "Stylish design with great cameras"
      }
    ];

    sampleProducts.forEach(product => {
      const newProduct: Product = { ...product, id: randomUUID(), inStock: true };
      this.products.set(newProduct.id, newProduct);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category || product.subcategory === category
    );
  }

  async getPopularProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.isPopular);
  }

  async getBestsellerProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.isBestseller);
  }

  async getProductsByBrand(brand: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.brand.toLowerCase() === brand.toLowerCase()
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id, inStock: true, isPopular: false, isBestseller: false };
    this.products.set(id, product);
    return product;
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  async getBrands(): Promise<Brand[]> {
    return Array.from(this.brands.values());
  }

  async createBrand(insertBrand: InsertBrand): Promise<Brand> {
    const id = randomUUID();
    const brand: Brand = { ...insertBrand, id };
    this.brands.set(id, brand);
    return brand;
  }
}

export const storage = new MemStorage();
