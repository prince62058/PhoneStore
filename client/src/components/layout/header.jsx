import { useState } from "react";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-gray-800 py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            Free delivery on orders above ₹499 | Easy returns | Buy Now, Pay Later
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">PhoneShopsy</h1>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-primary transition-colors">Mobile Phones</a>
              <a href="#" className="hover:text-primary transition-colors">Laptops</a>
              <a href="#" className="hover:text-primary transition-colors">TV & Audio</a>
              <a href="#" className="hover:text-primary transition-colors">Home Appliances</a>
              <a href="#" className="hover:text-primary transition-colors">Gaming</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-80 bg-white text-black pl-4 pr-10"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-gray-800 hover:text-primary"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-gray-800 hover:text-primary relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-white text-black"
                />
                <nav className="flex flex-col space-y-2">
                  <a href="#" className="hover:text-primary transition-colors py-2">Mobile Phones</a>
                  <a href="#" className="hover:text-primary transition-colors py-2">Laptops</a>
                  <a href="#" className="hover:text-primary transition-colors py-2">TV & Audio</a>
                  <a href="#" className="hover:text-primary transition-colors py-2">Home Appliances</a>
                  <a href="#" className="hover:text-primary transition-colors py-2">Gaming</a>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}