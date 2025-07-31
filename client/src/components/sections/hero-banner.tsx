export default function HeroBanner() {
  return (
    <section className="hero-banner py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-trigger-element">
            <div className="space-y-2">
              <div className="w-1 h-16 bg-primary"></div>
              <h2 className="text-4xl font-bold text-gray-900">Mobile Phones</h2>
            </div>
          </div>
          <div className="scroll-trigger-element">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Family using mobile device together" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
