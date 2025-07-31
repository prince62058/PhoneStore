export default function HeroBanner() {
  return (
    <section className="hero-banner py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-trigger-element">
            <div className="space-y-2">
              <div className="w-1 h-16 bg-primary"></div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Mobile Phones</h2>
            </div>
          </div>
          <div className="scroll-trigger-element">
          </div>
        </div>
      </div>
    </section>
  );
}