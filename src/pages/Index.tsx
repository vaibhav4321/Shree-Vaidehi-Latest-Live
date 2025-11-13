import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Shree Vaidehi | Interior & Exterior</title>
        <link rel="canonical" href="https://shreevaidehi.com/" />
        <meta 
          name="description" 
          content="Transforming spaces since 1999, Shree Vaidehi offers complete interior and exterior design solutions in Jaipur. From furniture to construction, we make your dream spaces come true."
        />
        <meta name="keywords" content="Panels, laminates, paint, louvers, hardware, tvunits, Exterior Design, Home Decor, Office Design, Furniture, Construction, Jaipur" />
      </Helmet>
      <Navigation />
      <Hero />
      <Portfolio limit={3}/>
      <Services />
      <Testimonials limit={3}/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
