import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-georgia font-bold mb-4">Shree Vaidehi</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Crafting unique spaces since 1999. Your premier destination for luxury interior and exterior design.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/shree.vaidehi/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-montserrat">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Residential Design</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Commercial Design</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Exterior Design</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Renovation</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">3D Rendering</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Custom Furniture</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Consultation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-montserrat">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-smooth">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary-foreground transition-smooth">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-primary-foreground transition-smooth">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-montserrat">Get in Touch</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">138 Vishvesariya Nagar<br />Triveni Nagar<br />Jaipur, Rajasthan 302018</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+91 9529895040</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm">contact@shreevaidehi.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Shree Vaidehi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;