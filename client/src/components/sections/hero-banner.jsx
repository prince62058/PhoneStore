import { useState, useEffect } from "react";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Main%20Banner/D_main-banner_hat0zq.png?tr=w-2048",
      alt: "Mobile Phones Banner"
    },
    {
      src: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP%20Experiment/April/29th/Mobile/desktop/PCP_Mobiles_PIXEL_24april2025_yolm9f.jpg?tr=w-2048",
      alt: "Google Pixel Promotional Banner"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-banner bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="w-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.src}
              alt={slide.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
        
        {/* First slide always visible for proper height calculation */}
        <img 
          src={slides[0].src}
          alt={slides[0].alt}
          className="w-full h-auto object-cover opacity-0"
        />
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}