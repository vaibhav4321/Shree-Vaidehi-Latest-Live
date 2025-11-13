import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Helmet>
        <title>Contact Us | Shree Vaidehi Interiors & Exteriors</title>
        <link rel="canonical" href="https://shreevaidehi.com/contact" />
        <meta
          name="description"
          content="Get in touch with Shree Vaidehi for your interior and exterior design needs. We are here to help you transform your space."
        />
      </Helmet>
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;