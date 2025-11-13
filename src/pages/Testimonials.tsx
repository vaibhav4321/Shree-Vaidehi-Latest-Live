import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Helmet } from "react-helmet";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Helmet>
        <title>Client Reviews | Shree Vaidehi Interiors & Exteriors</title>
        <link rel="canonical" href="https://shreevaidehi.com/testimonials" />
        <meta
          name="description"
          content="See what our clients say about Shree Vaidehi. From home interiors to commercial spaces, our happy clients share their experiences working with us."
        />
      </Helmet>
      <main className="pt-16">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;