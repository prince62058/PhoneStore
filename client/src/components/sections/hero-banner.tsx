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
              src="/attached_assets/screenshot-1753943082307.png" 
              alt="Family using mobile device together" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
