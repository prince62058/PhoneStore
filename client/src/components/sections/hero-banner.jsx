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
            <img 
              src="https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP%20Experiment/April/29th/Mobile/desktop/PCP_Mobiles_iphone16-24april2025_drodwj.jpg?tr=w-2048" 
              alt="iPhone 16 promotional banner" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}