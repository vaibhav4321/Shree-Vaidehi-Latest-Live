import { Button } from "@/components/ui/button";
import heroInterior from "@/assets/hero-interior.jpg";
import heroExterior from "@/assets/hero-exterior.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroInterior, heroExterior];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt="Luxury Interior Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-georgia font-medium mb-6 leading-tight">
          Crafting Unique Spaces <span className="text-green-200 font-bold">Since 1999</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Making spaces feel uniquely yours<br />
          "Let's design your dream space together!"
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#portfolio">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-3 shadow-elegant hover:shadow-lg transition-smooth"
            >
              View Our Portfolio
            </Button>
          </a>
          <a href="#contact">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-3 shadow-elegant hover:shadow-lg transition-smooth"
            >
              Free Consultation
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Hero;