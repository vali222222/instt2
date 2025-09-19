import { Heart, ChevronDown, Mail, User, CreditCard, Gift, Sparkles, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import ReviewsSection from "@/components/ReviewsSection";

const GiftCardHero = () => {
  const steps = [
    "Click A Button Above 👆 ",
    "Enter Your Email & Basic Info",
    "Complete Recommended Deals",
    "Claim Your Gift Card!"
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{animationDelay: "1.5s"}}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <DollarSign className="w-12 h-12 text-black font-bold" strokeWidth={3} />
              </div>
              <Sparkles className="w-6 h-6 text-primary-glow absolute -top-1 -right-1 animate-float" />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient leading-tight">
            Claim Your Gift Card Now!
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 leading-tight">
            Higher value deals = faster rewards!
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 space-y-4">
            {/* SHEIN */}
            <a 
              href="hhttps://girls-go.cacatmilfa.workers.dev/btn2" 
              className="w-full max-w-md mx-auto bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl py-4 px-8 text-base sm:text-lg flex items-center justify-center gap-3 animate-shein-breath"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">S</span>
              </div>
              <div className="text-left">
                <div className="font-bold">$750 SHEIN Gift Card</div>
                <div className="text-xs opacity-90">(Enter Email & Complete Deals)</div>
              </div>
            </a>

            {/* SEPHORA */}
            <a 
              href="https://girls-go.cacatmilfa.workers.dev/btn1" 
              className="w-full max-w-md mx-auto bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl py-4 px-8 text-base sm:text-lg flex items-center justify-center gap-3 animate-shein-breath"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.pinimg.com/originals/59/88/ed/5988ed9531e7e4322993de62a1b98d05.png" 
                  alt="Sephora Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="font-bold">$750 SEPHORA Gift Card</div>
                <div className="text-xs opacity-90">(Enter Email & Complete Deals)</div>
              </div>
            </a>
          </div>
        </div>

        {/* Steps Section */}
        <Card className="gradient-card card-shadow p-6 md:p-8 mb-8 animate-slide-up border border-primary/20">
          <div className="grid gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-white/50 hover:bg-white/70 transition-all duration-300 border border-primary/10 hover:border-primary/20 shadow-sm hover:shadow-md"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full gradient-primary flex items-center justify-center font-bold text-lg md:text-xl text-primary-foreground shadow-lg">
                  {index + 1}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                    {step}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1">
                    {index === 0 && "Start your gift card claim process"}
                    {index === 1 && "We need this to send your gift card"}
                    {index === 2 && "(Higher value deals = faster rewards!)"}
                    {index === 3 && "Your reward is waiting for you!"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center animate-fade-in">
          <p className="text-xs md:text-sm text-muted-foreground">
            * Terms and conditions apply. Gift card values may vary based on completed offers.
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
};

export default GiftCardHero;
