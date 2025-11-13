import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import {Helmet} from "react-helmet";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Helmet>
        <title>Portfolio | Shree Vaidehi Design Projects in Jaipur</title>
        <link rel="canonical" href="https://shreevaidehi.com/portfolio" />
        <meta
          name="description"
          content="Browse our portfolio of interior and exterior projects across Jaipur. Shree Vaidehi showcases residential, commercial, and custom design works with timeless finishes."
        />
      </Helmet>
      <main className="pt-16">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;