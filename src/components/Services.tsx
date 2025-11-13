import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  Building2, 
  Palette, 
  Sofa, 
  Layers, 
  Compass 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Interior Design",
      description: "Transform your home into a luxurious sanctuary with our personalized interior design solutions.",
      features: ["Space Planning", "Custom Furniture", "Color Consultation", "Lighting Design"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Commercial Interior Design",
      description: "Create inspiring workspaces that enhance productivity and reflect your brand identity.",
      features: ["Office Design", "Retail Spaces", "Hospitality", "Corporate Branding"]
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Exterior Design & Landscaping",
      description: "Enhance your property's curb appeal with sophisticated exterior design and landscaping.",
      features: ["Facade Design", "Garden Planning", "Outdoor Living", "Landscape Architecture"]
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Renovation",
      description: "Transform your space with our expert renovation services, tailored to your needs.",
      features: ["Space Planning", "Material Selection", "Project Management", "Custom Solutions"]
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Custom Furniture Design",
      description: "Bespoke furniture pieces designed specifically for your space and lifestyle needs.",
      features: ["Custom Pieces", "Space Optimization", "Quality Materials", "Unique Designs"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Color & Material Consulting",
      description: "Expert guidance on color schemes and material selection to create cohesive, stunning interiors.",
      features: ["Color Psychology", "Material Selection", "Texture Coordination", "Finish Consultation"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-georgia font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your unique vision and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-smooth group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-georgia font-bold text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg" className="px-8 py-3">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;