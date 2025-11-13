import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Services | Shree Vaidehi Interiors & Exteriors</title>
        <link rel="canonical" href="https://shreevaidehi.com/services" />
        <meta
          name="description"
          content="Explore Shree Vaidehi’s wide range of services – from custom furniture, modular kitchens, and interiors to exterior design, renovations, and full construction solutions."
        />
      </Helmet>
      <Navigation />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;