export default function HeroBanner() {
  return (
    <div className="hero-banner py-16 bg-gray-50 dark:bg-gray-900">
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
              src="https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Main%20Banner/D_main-banner_hat0zq.png?tr=w-2048" 
              alt="Family using mobile device together" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}